import { NextRequest, NextResponse } from 'next/server';

async function getZohoAccessToken(): Promise<string> {
  const clientId = process.env.ZOHO_CAMPAIGNS_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CAMPAIGNS_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_CAMPAIGNS_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Zoho OAuth credentials not configured');
  }

  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'refresh_token'
  });

  const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString()
  });

  const data = await response.json();
  
  if (!response.ok || data.error) {
    throw new Error(`Failed to refresh token: ${data.error || response.status}`);
  }

  return data.access_token;
}

async function subscribeToZohoCampaigns(email: string, source: string) {
  const listKey = process.env.ZOHO_CAMPAIGNS_LIST_KEY;

  if (!listKey) {
    throw new Error('Zoho Campaigns list key not configured');
  }

  // Get fresh access token
  const accessToken = await getZohoAccessToken();

  // Zoho expects JSON string format for contactinfo
  const contactInfo = JSON.stringify({
    "Contact Email": email
  });

  const params = new URLSearchParams({
    resfmt: 'JSON',
    listkey: listKey,
    contactinfo: contactInfo,
    source: source
  });

  console.log('Zoho API request params:', params.toString());
  console.log('Access token:', accessToken ? `${accessToken.substring(0, 20)}...` : 'NO TOKEN');
  
  // Use bulk add API which doesn't require confirmation
  const bulkParams = new URLSearchParams({
    resfmt: 'JSON',
    listkey: listKey,
    emailids: email
  });
  
  const response = await fetch('https://campaigns.zoho.com/api/v1.1/addlistsubscribersinbulk', {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: bulkParams.toString()
  });

  const responseText = await response.text();
  console.log('Zoho API raw response:', responseText);
  
  let data;
  try {
    data = JSON.parse(responseText);
  } catch (e) {
    console.error('Failed to parse Zoho response as JSON');
    throw new Error('Invalid response from Zoho API');
  }
  
  if (!response.ok) {
    throw new Error(`Zoho API error: ${response.status} - ${JSON.stringify(data)}`);
  }
  
  // Check for Zoho-specific error responses
  if (data.code && data.code !== '0') {
    throw new Error(`Zoho API error: ${data.message || data.code}`);
  }
  
  return data;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Validate source
    if (!source) {
      return NextResponse.json(
        { message: 'Source is required' },
        { status: 400 }
      );
    }

    try {
      // Subscribe to Zoho Campaigns (with automatic token refresh)
      await subscribeToZohoCampaigns(email, source);
      
      console.log('Email subscribed to Zoho Campaigns:', { email, source, timestamp: new Date().toISOString() });

      return NextResponse.json(
        { 
          message: 'Successfully subscribed! Please check your email to confirm.',
          email,
          source 
        },
        { status: 200 }
      );
    } catch (zohoError: any) {
      console.error('Zoho Campaigns error:', zohoError.message || zohoError);
      console.error('Full error:', zohoError);
      
      // Fallback: still log the email capture even if Zoho fails
      console.log('Email captured (Zoho failed):', { email, source, timestamp: new Date().toISOString() });
      
      return NextResponse.json(
        { 
          message: 'Subscription initiated. If you don\'t receive a confirmation email, please contact us.',
          email,
          source 
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error in email capture:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}