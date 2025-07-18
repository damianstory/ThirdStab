import { NextRequest, NextResponse } from 'next/server';

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send to email service (Mailchimp, SendGrid, etc.)
    // 3. Send confirmation email

    // For now, we'll just log it
    console.log('Email captured:', { email, source, timestamp: new Date().toISOString() });

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        message: 'Successfully subscribed!',
        email,
        source 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in email capture:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}