import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Validate input
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Please provide an email address' },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Find user by email
    const user = await User.findOne({ email });
    
    // Check if user exists
    if (!user) {
      // For security reasons, don't reveal that the user doesn't exist
      return NextResponse.json(
        { success: true, message: 'If your email is registered, you will receive a password reset link' },
        { status: 200 }
      );
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    // Hash token and set to resetPasswordToken field
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    
    // Set token expiry (10 minutes)
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    
    await user.save();

    // In a real application, you would send an email with the reset link
    // For now, we'll just return the token in the response
    console.log(`Reset token for ${email}: ${resetToken}`);

    return NextResponse.json(
      { 
        success: true, 
        message: 'If your email is registered, you will receive a password reset link',
        // In production, don't include the token in the response
        // This is just for development purposes
        resetToken: resetToken
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong' },
      { status: 500 }
    );
  }
} 