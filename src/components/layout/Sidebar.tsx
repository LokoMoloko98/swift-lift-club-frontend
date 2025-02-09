"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { useEffect, useState } from "react";
import { logout, getUser } from "@/app/auth/hooks";
import { FaHome, FaCalculator, FaRoute, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await getUser();
      setUser(user);
    } catch (error) {
      setUser(null);
    }
  }

  if (!user) return null;

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen flex flex-col shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-100">Swift Lift Club</h2>
      </div>
      <nav className="flex-1 px-2 py-4">
        <div className="space-y-2">
          <Link
            href="/dashboard"
            className={`flex items-center space-x-3 p-3 rounded-md hover:bg-gray-800 transition-colors ${
              pathname === "/dashboard" ? 'bg-gray-800 text-blue-400' : 'text-gray-300'
            }`}
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/fares"
            className={`flex items-center space-x-3 p-3 rounded-md hover:bg-gray-800 transition-colors ${
              pathname === "/fares" ? 'bg-gray-800 text-blue-400' : 'text-gray-300'
            }`}
          >
            <FaCalculator className="h-5 w-5" />
            <span>Fare Calculator</span>
          </Link>
          <Link
            href="/weeklytrips"
            className={`flex items-center space-x-3 p-3 rounded-md hover:bg-gray-800 transition-colors ${
              pathname === "/weeklytrips" ? 'bg-gray-800 text-blue-400' : 'text-gray-300'
            }`}
          >
            <FaRoute className="h-5 w-5" />
            <span>Weekly Trips</span>
          </Link>
        </div>
      </nav>
      <div className="p-6 mt-auto">
        <button
          onClick={logout}
          className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-800 text-gray-300 transition-colors w-full justify-start"
        >
          <FaSignOutAlt className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}