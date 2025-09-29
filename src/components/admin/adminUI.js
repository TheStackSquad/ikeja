//src/components/admin/adminUI.js

import React, { useState } from "react";
import { LogIn, AlertCircle } from "lucide-react"; // Icons

// Hardcoded Credentials
const HARDCODED_USERNAME = "admin123";
const HARDCODED_PASSWORD = "password123";

/**
 * AdminUI Component: Handles the login form logic and presentation.
 * In a real application, this would use the Supabase Auth Client
 * to handle sign-in.
 */
const AdminUI = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // In a production app, this function would call a secure Next.js Server Action or API Route
  // which uses the Supabase Server Client to perform authentication.
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate Network Delay
    setTimeout(() => {
      if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
        // In a real app, successful login would redirect or set global auth state.
        setLoggedIn(true);
        console.log("Login successful! Redirecting to dashboard...");
      } else {
        setError("Invalid username or password. Please try again.");
        setPassword("");
      }
      setLoading(false);
    }, 1500);
  };

  if (setLoggedIn === true) {
    // Placeholder for when the user is logged in
    return (
      <div className="text-center p-8 bg-green-50 rounded-xl shadow-lg">
        <h2 className="text-2xl font-josefin-sans text-green-700">
          Access Granted
        </h2>
        <p className="mt-2 text-lg text-green-600">Welcome, Admin!</p>
        <p className="mt-4 text-sm text-gray-500">
          In a real app, you would now be redirected to the full admin
          dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl transition-all duration-300">
      <h1 className="text-3xl font-bold text-gray-900 text-center font-josefin-sans">
        Admin Login
      </h1>
      <p className="text-center text-gray-500 font-merriweather-sans text-sm">
        {/* font-family: var(--font-merriweather-sans); */}
        Enter your credentials to access the Content Management System.
      </p>

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Username Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 font-merriweather-sans"
          >
            Username
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 disabled:bg-gray-50 transition-colors"
            placeholder="admin123"
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 font-merriweather-sans"
          >
            Password
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 disabled:bg-gray-50 transition-colors"
            placeholder="password123"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div
            className="flex items-center p-3 text-sm font-medium text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            <span className="font-merriweather-sans">{error}</span>
          </div>
        )}

        {/* Login Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-transform duration-150 active:scale-[0.98] disabled:bg-sky-400"
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
                Logging in...
              </span>
            ) : (
              <>
                <LogIn className="w-5 h-5 mr-2" />
                Sign In
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

