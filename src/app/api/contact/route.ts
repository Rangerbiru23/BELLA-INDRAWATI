import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const contact = await db.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      }
    })
    
    return NextResponse.json({ message: 'Pesan berhasil dikirim!', contact })
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengirim pesan' }, { status: 500 })
  }
}