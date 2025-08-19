import { NextResponse } from 'next/server';
import { sendOTPEmail, testSMTPConnection } from '@/lib/emailService';

export async function POST(request) {
  try {
    const { email, testType = 'smtp-test' } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required for testing' },
        { status: 400 }
      );
    }
    
    // First test SMTP connection
    console.log('Testing SMTP connection...');
    const connectionTest = await testSMTPConnection();
    
    if (!connectionTest.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: `SMTP connection failed: ${connectionTest.error}`,
          error: connectionTest.error
        },
        { status: 500 }
      );
    }
    
    console.log('SMTP connection successful, sending test email...');
    
    // Send a test OTP email
    const testOTP = '123456';
    const result = await sendOTPEmail(email, testOTP, 'registration', 'Test User');
    
    if (result.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Test email sent successfully! Check your inbox.',
          messageId: result.messageId
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: `Failed to send test email: ${result.error}`,
          error: result.error
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('SMTP Test error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'SMTP test failed',
        error: error.message
      },
      { status: 500 }
    );
  }
}
