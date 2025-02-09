"use client"
import { useEffect, useState } from 'react'
import { login, logout, getUser } from '@/app/auth/hooks'
import Link from 'next/link'

export default function Header() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      const user = await getUser()
      setUser(user)
    } catch (error) {
      setUser(null)
    }
  }

  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex items-center font-bold">
              Swift Lift Club
            </Link>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center gap-4">
                <button 
                  onClick={logout}
                  className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button 
                onClick={() => login()}
                className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}