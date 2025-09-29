//src/components/admin/content-management/contentUI.js
"use client";

import React from "react";
import { LayoutDashboard, Newspaper, Settings, LogOut } from "lucide-react";

const ContentUI = () => {
  // NOTE: In a real app, this handleLogout function would use the Supabase Auth Client
  // to sign out the user, clear the session cookie, and then redirect to the login page.
  const handleLogout = () => {
    console.log(
      "Simulating Logout. In a real app, this clears the Supabase session."
    );
    // Example: supabase.auth.signOut().then(() => router.push('/admin'));
    alert(
      "Logged out simulation complete. You would now be redirected to /admin."
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-merriweather-sans">
      {/* Custom Font Styles referenced in CSS classes */}
      <style jsx global>{`
        .font-merriweather-sans {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times,
            serif;
        }
        .font-josefin-sans {
          font-family: ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
            "Noto Sans", sans-serif;
        }
      `}</style>

      {/* Header (Responsive) */}
      <header className="w-full bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-800 font-josefin-sans">
          CMS Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 hidden sm:inline">
            Welcome, Admin!
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors text-sm"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area (Responsive Grid) */}
      <main className="flex-grow p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News Posts Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <Newspaper className="w-8 h-8 text-blue-500 mb-3" />
            <h2 className="text-xl font-bold text-gray-800 font-josefin-sans">
              Manage News
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Create, edit, and publish the latest news updates for the public
              site.
            </p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
              Go to News List &rarr;
            </button>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow">
            <LayoutDashboard className="w-8 h-8 text-green-500 mb-3" />
            <h2 className="text-xl font-bold text-gray-800 font-josefin-sans">
              Quick Overview
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Drafts: **3** / Published: **45**
            </p>
            <p className="mt-4 text-xs text-green-600 font-medium">
              Public Site Health: **Operational**
            </p>
          </div>

          {/* Settings Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-500 hover:shadow-xl transition-shadow">
            <Settings className="w-8 h-8 text-gray-500 mb-3" />
            <h2 className="text-xl font-bold text-gray-800 font-josefin-sans">
              Configuration
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Adjust application settings and user roles.
            </p>
            <button className="mt-4 text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors">
              View Settings &rarr;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContentUI;
