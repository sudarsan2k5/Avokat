"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("type") === "lawyer" ? "lawyer" : "user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      if (isLogin) {
        // Login
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            userType: activeTab,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Login failed');
        }

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Show success message
        setSuccess('Login successful! Redirecting...');
        
        // Redirect to appropriate dashboard
        setTimeout(() => {
          if (activeTab === "lawyer") {
            router.push("/lawyer-dashboard");
          } else {
            router.push("/dashboard");
          }
        }, 1500);
      } else {
        // Register
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
            userType: activeTab,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Registration failed');
        }

        // Show success message
        setSuccess('Registration successful! Please login.');
        
        // Switch to login mode
        setTimeout(() => {
          setIsLogin(true);
          setName("");
          setEmail("");
          setPassword("");
          setSuccess("");
        }, 2000);
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
            {isLogin ? "Login to Your Account" : "Create an Account"}
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            {isLogin
              ? "Access your account to manage your legal services."
              : "Join us to get access to our legal services."}
          </p>
        </div>
      </div>

      <div className="py-16 px-4 container mx-auto">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* User/Lawyer Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`flex-1 py-3 font-medium text-center ${
                activeTab === "user"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("user")}
            >
              {isLogin ? "Login as User" : "Register as User"}
            </button>
            <button
              className={`flex-1 py-3 font-medium text-center ${
                activeTab === "lawyer"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("lawyer")}
            >
              {isLogin ? "Login as Lawyer" : "Register as Lawyer"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-green-50 text-green-500 p-4 rounded-md mb-6">
              {success}
            </div>
          )}

          {/* Login/Register Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            )}

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
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="••••••••"
                required
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Forgot Password?
                </Link>
              </div>
            )}

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
                  isLogin ? "Login" : "Register"
                )}
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError("");
                    setSuccess("");
                  }}
                  className="ml-1 text-red-500 hover:text-red-600 font-medium"
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
} 