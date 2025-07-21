import { NextRequest, NextResponse } from 'next/server';

async function subscribeToZohoCampaigns(email: string, source: string) {
  const accessToken = process.env.ZOHO_CAMPAIGNS_ACCESS_TOKEN;
  const listKey = process.env.ZOHO_CAMPAIGNS_LIST_KEY;

  if (!accessToken || !listKey) {
    throw new Error('Zoho Campaigns credentials not configured');
  }

  const contactInfo = JSON.stringify({
    'Contact Email': email,
    'Source': source
  });

  const params = new URLSearchParams({
    resfmt: 'JSON',
    listkey: listKey,
    contactinfo: contactInfo,
    source: source
  });

  const response = await fetch('https://campaigns.zoho.com/api/v1.1/json/listsubscribe', {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString()
  });

  if (!response.ok) {
    throw new Error(`Zoho API error: ${response.status}`);
  }

  const data = await response.json();
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
      // Subscribe to Zoho Campaigns
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
    } catch (zohoError) {
      console.error('Zoho Campaigns error:', zohoError);
      
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