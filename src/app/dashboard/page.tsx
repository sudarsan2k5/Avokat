"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    userType: "",
    joinDate: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(user);
      
      // Check if user type is correct
      if (parsedUser.userType !== 'user') {
        router.push('/login');
        return;
      }

      // Set user data
      setUserData({
        name: parsedUser.name || "User",
        email: parsedUser.email || "",
        userType: parsedUser.userType || "user",
        joinDate: "January 15, 2023", // This would come from the server in a real app
      });
    } catch (error) {
      console.error('Error parsing user data:', error);
      router.push('/login');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      type: "Document",
      title: "Will Creation",
      date: "2023-06-15",
      status: "Completed",
    },
    {
      id: 2,
      type: "Consultation",
      title: "Property Dispute",
      date: "2023-07-22",
      status: "Scheduled",
    },
    {
      id: 3,
      type: "Document",
      title: "Power of Attorney",
      date: "2023-08-05",
      status: "In Progress",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-slate-800 py-20">
        <Navbar />
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl font-bold text-white text-center">
            Welcome, {userData.name}
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Manage your legal services and documents from your personal dashboard.
          </p>
        </div>
      </div>

      <div className="py-16 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500">Name</p>
                <p className="font-medium">{userData.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{userData.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Account Type</p>
                <p className="font-medium capitalize">{userData.userType}</p>
              </div>
              <div>
                <p className="text-gray-500">Member Since</p>
                <p className="font-medium">{userData.joinDate}</p>
              </div>
              <div className="pt-4">
                <Link href="/profile/edit">
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors mb-2">
                    Edit Profile
                  </button>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
            {recentActivities.length > 0 ? (
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="border-b border-gray-200 pb-4 last:border-0"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-500">
                          {activity.type} • {activity.date}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          activity.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : activity.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No recent activities found.</p>
            )}
            <div className="mt-6">
              <Link href="/services">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/services">
                <div className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="font-bold text-blue-700">Legal Services</h3>
                  <p className="text-sm text-gray-600">
                    Browse our legal services
                  </p>
                </div>
              </Link>
              <Link href="/documents">
                <div className="bg-green-50 hover:bg-green-100 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="font-bold text-green-700">My Documents</h3>
                  <p className="text-sm text-gray-600">
                    View and manage your documents
                  </p>
                </div>
              </Link>
              <Link href="/consultations">
                <div className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="font-bold text-purple-700">Consultations</h3>
                  <p className="text-sm text-gray-600">
                    Schedule a consultation
                  </p>
                </div>
              </Link>
              <Link href="/about">
                <div className="bg-amber-50 hover:bg-amber-100 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="font-bold text-amber-700">Translator</h3>
                  <p className="text-sm text-gray-600">
                    Translate legal documents
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 