import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  if (code) {
    // Display the code so you can copy it
    return new Response(`
      <html>
        <body>
          <h2>Authorization Code:</h2>
          <p><strong>${code}</strong></p>
          <p>Copy this code and use it in Step 2 of the OAuth process.</p>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    });
  }

  return NextResponse.json({ error: 'No code received' }, { status: 400 });
}