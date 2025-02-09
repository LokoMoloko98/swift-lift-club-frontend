"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { logout, getUser } from "@/app/auth/hooks";
import { FaHome, FaCalculator, FaRoute, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const [user, setUser] = useState<any>(null);

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
    <aside className="bg-gray-800 text-white w-64 h-screen p-5 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Swift Lift Club</h2>
      <nav className="flex-1 space-y-4">
        <Link href="/dashboard" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
          <FaHome /> Dashboard
        </Link>
        <Link href="/fare-calculator" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
          <FaCalculator /> Fare Calculator
        </Link>
        <Link href="/weekly-trips" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
          <FaRoute /> Weekly Trips
        </Link>
      </nav>
      {/* <div className="mt-auto pt-6">
        <button
          onClick={logout}
          className="flex items-center gap-3 p-2 rounded-md bg-red-600 hover:bg-red-700 w-full justify-center"
        >
          <FaSignOutAlt /> Sign Out
        </button>
      </div> */}
    </aside>
  );
}
