"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LogIn, LogOut } from 'lucide-react'

export default function AuthMenu() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()

    let mounted = true
    async function init() {
      const { data } = await supabase.auth.getUser()
      if (mounted) setUser(data.user ?? null)
    }
    init()

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return
      setUser(session?.user ?? null)
    })

    return () => {
      mounted = false
      try { sub?.subscription?.unsubscribe?.() } catch {}
    }
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  if (!user) {
    return (
      <a href="/login" className="relative group flex flex-row items-center gap-2">
        <LogIn size={20} />Login
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
      </a>
    )
  }

  return (
    <button onClick={handleSignOut} className="w-full text-left">
      <div className="relative group flex flex-row items-center gap-2">
        <LogOut size={20} />Logout
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
      </div>
    </button>
  )
}
