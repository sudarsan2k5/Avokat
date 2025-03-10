import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    const { name, email, password, userType } = await request.json();
    
    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
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

    // Check if user already exists
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json(
          { success: false, message: 'Email already exists' },
          { status: 400 }
        );
      }
    } catch (findError) {
      console.error('Error checking existing user:', findError);
      return NextResponse.json(
        { success: false, message: 'Error checking user existence' },
        { status: 500 }
      );
    }

    // Create new user
    try {
      const user = await User.create({
        name,
        email,
        password,
        userType: userType || 'user', // Default to 'user' if not specified
      });

      // Return success response (without password)
      return NextResponse.json(
        {
          success: true,
          message: 'User registered successfully',
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            userType: user.userType,
          },
        },
        { status: 201 }
      );
    } catch (createError) {
      console.error('Error creating user:', createError);
      return NextResponse.json(
        { success: false, message: 'Error creating user' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong' },
      { status: 500 }
    );
  }
} 