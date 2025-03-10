"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to process request');
      }

      // Show success message
      setIsSubmitted(true);
      
      // In development, log the reset token
      if (data.resetToken) {
        console.log('Reset token:', data.resetToken);
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-slate-800 py-20">
        <Navbar />
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl font-bold text-white text-center">
            Forgot Password
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
      </div>

      <div className="py-16 px-4 container mx-auto">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
              {error}
            </div>
          )}

          {isSubmitted ? (
            <div className="text-center">
              <div className="mb-6 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
              </p>
              <Link href="/login">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                  Back to Login
                </button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md transition-colors flex justify-center items-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </div>

              <div className="text-center mt-4">
                <p className="text-gray-600">
                  Remember your password?{" "}
                  <Link
                    href="/login"
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    Back to Login
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
} 