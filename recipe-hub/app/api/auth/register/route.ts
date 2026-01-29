import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const email = String(form.get('email') ?? '')
    const password = String(form.get('password') ?? '')

    const supabase = await createClient()
    const { error } = await supabase.auth.signUp({ email, password })

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Unexpected error' }, { status: 500 })
  }
}
