"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Search, UserCircle } from 'lucide-react'

export default function NavLinks() {
  const [user, setUser] = useState<any>(null)

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

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="p-2 border rounded-lg hover:bg-gray-300 transition duration-300">
        <Link href="/recipes" className="flex gap-2"><Search />Browse</Link>
      </div>
      {user && (
        <div className="p-2 border rounded-lg hover:bg-gray-300 transition duration-300">
          <Link href="/dashboard" className="flex gap-2 items-center">
            <UserCircle size={20} /> Dashboard
          </Link>
        </div>
      )}
    </div>
  )
}
