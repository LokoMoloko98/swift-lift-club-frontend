"use client"
import { useEffect, useState } from 'react'
import { getUser } from '@/app/auth/hooks'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      try {
        const userData = await getUser()
        setUser(userData)
        setLoading(false)
      } catch (error) {
        router.push('/')
      }
    }
    checkAuth()
  }, [router])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-2xl font-bold">Profile</h1>
      {user && (
        <div className="mt-4">
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  )
}