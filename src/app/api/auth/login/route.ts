import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    const { email, password, userType } = await request.json();
    
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Please provide email and password' },
        { status: 400 }
      );
    }

    // Connect to database
    try {
      await dbConnect();
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      );
    }

    // Find user by email and include password for comparison
    let user;
    try {
      user = await User.findOne({ email }).select('+password');
      
      // Check if user exists
      if (!user) {
        return NextResponse.json(
          { success: false, message: 'Invalid credentials' },
          { status: 401 }
        );
      }
    } catch (findError) {
      console.error('Error finding user:', findError);
      return NextResponse.json(
        { success: false, message: 'Error finding user' },
        { status: 500 }
      );
    }

    // Check if user type matches
    if (user.userType !== userType) {
      return NextResponse.json(
        { 
          success: false, 
          message: userType === 'lawyer' 
            ? 'This account is not registered as a lawyer' 
            : 'This account is not registered as a user'
        },
        { status: 401 }
      );
    }

    // Compare password
    try {
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return NextResponse.json(
          { success: false, message: 'Invalid credentials' },
          { status: 401 }
        );
      }
    } catch (passwordError) {
      console.error('Error comparing password:', passwordError);
      return NextResponse.json(
        { success: false, message: 'Error validating credentials' },
        { status: 500 }
      );
    }

    // Return success response (without password)
    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          userType: user.userType,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong' },
      { status: 500 }
    );
  }
} 