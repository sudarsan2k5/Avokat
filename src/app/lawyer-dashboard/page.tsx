"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LawyerDashboardPage() {
  const router = useRouter();
  const [lawyerData, setLawyerData] = useState({
    name: "",
    email: "",
    specialization: "Property Law",
    experience: "10 years",
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
      if (parsedUser.userType !== 'lawyer') {
        router.push('/login');
        return;
      }

      // Set user data
      setLawyerData({
        name: parsedUser.name || "Lawyer",
        email: parsedUser.email || "",
        specialization: "Property Law", // This would come from the server in a real app
        experience: "10 years", // This would come from the server in a real app
        joinDate: "March 5, 2022", // This would come from the server in a real app
      });
    } catch (error) {
      console.error('Error parsing user data:', error);
      router.push('/login');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  // Mock data for cases
  const activeCases = [
    {
      id: 1,
      clientName: "Robert Johnson",
      caseType: "Property Dispute",
      startDate: "2023-05-10",
      status: "Active",
    },
    {
      id: 2,
      clientName: "Sarah Williams",
      caseType: "Will Creation",
      startDate: "2023-06-22",
      status: "Active",
    },
    {
      id: 3,
      clientName: "Michael Brown",
      caseType: "Divorce",
      startDate: "2023-07-15",
      status: "Pending",
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
            Welcome, {lawyerData.name}
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Manage your cases and client interactions from your lawyer dashboard.
          </p>
        </div>
      </div>

      <div className="py-16 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lawyer Profile Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500">Name</p>
                <p className="font-medium">{lawyerData.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{lawyerData.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Specialization</p>
                <p className="font-medium">{lawyerData.specialization}</p>
              </div>
              <div>
                <p className="text-gray-500">Experience</p>
                <p className="font-medium">{lawyerData.experience}</p>
              </div>
              <div>
                <p className="text-gray-500">Member Since</p>
                <p className="font-medium">{lawyerData.joinDate}</p>
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

          {/* Active Cases */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Active Cases</h2>
            {activeCases.length > 0 ? (
              <div className="space-y-4">
                {activeCases.map((caseItem) => (
                  <div
                    key={caseItem.id}
                    className="border-b border-gray-200 pb-4 last:border-0"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{caseItem.clientName}</p>
                        <p className="text-sm text-gray-500">
                          {caseItem.caseType} • Started: {caseItem.startDate}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          caseItem.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {caseItem.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No active cases found.</p>
            )}
            <div className="mt-6">
              <Link href="/cases/new">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                  Add New Case
                </button>
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/clients">
                <div className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="font-bold text-blue-700">Clients</h3>
                  <p className="text-sm text-gray-600">
                    View and manage your clients
                  </p>
                </div>
              </Link>
              <Link href="/schedule">
                <div className="bg-green-50 hover:bg-green-100 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="font-bold text-green-700">Schedule</h3>
                  <p className="text-sm text-gray-600">
                    Manage your appointments
                  </p>
                </div>
              </Link>
              <Link href="/documents">
                <div className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="font-bold text-purple-700">Documents</h3>
                  <p className="text-sm text-gray-600">
                    Manage legal documents
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