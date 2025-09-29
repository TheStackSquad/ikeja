//app/admin/page.js

"use client";

import { useState } from "react";
import { LogIn, AlertCircle } from "lucide-react"; // Icons

// Hardcoded Credentials for development/testing
const HARDCODED_USERNAME = "admin123";
const HARDCODED_PASSWORD = "password123";
const REDIRECT_URL = "/admin/content-management"; // Destination path

/**
 * AdminLoginUI Component: Handles the login form logic, presentation, and redirection.
 */
const AdminLoginUI = () => {
  // Removed useRouter to fix the compilation error
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle the authentication process
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // NOTE: In a production app, this function MUST call a secure Next.js Server Action
    // or API Route that uses the Supabase Server Client for authentication.
    setTimeout(() => {
      if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
        console.log("Login successful! Redirecting...");

        // SUCCESS: Use standard window navigation to simulate Next.js router.push()
        // This avoids the module resolution error.
        window.location.href = REDIRECT_URL;
      } else {
        // Failed login
        setError("Invalid username or password. Please try again.");
        setPassword("");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300">
      {/* Header - Uses custom font-josefin-sans class */}
      <h1 className="text-3xl font-bold text-gray-900 text-center font-josefin-sans">
        CMS Login
      </h1>

      {/* Subtitle - Uses custom font-merriweather-sans class */}
      <p className="text-center text-gray-500 font-merriweather-sans text-sm">
        Enter your credentials to manage news content.
      </p>

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Username Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 font-merriweather-sans"
          >
            Username (admin123)
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 transition-colors"
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 font-merriweather-sans"
          >
            Password (password123)
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 transition-colors"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div
            className="flex items-center p-3 text-sm font-medium text-red-800 rounded-lg bg-red-50 border border-red-200"
            role="alert"
          >
            <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="font-merriweather-sans">{error}</span>
          </div>
        )}

        {/* Login Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-150 active:scale-[0.98] disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Authenticating...
              </span>
            ) : (
              <>
                <LogIn className="w-5 h-5 mr-2" />
                Secure Sign In
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

/**
 * Page Component: The entry point for the Next.js /admin route.
 * Renders only the login form.
 */
const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gray-50">
      {/* Global Style Tags for Font Simulation */}
      <style jsx global>{`
        /* Font variables requested by the user */
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

      {/* The component now handles its own state and redirection */}
      <AdminLoginUI />
    </div>
  );
};

export default Page;
