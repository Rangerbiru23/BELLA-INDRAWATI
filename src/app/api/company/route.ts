import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    let company = await db.company.findFirst()
    
    if (!company) {
      company = await db.company.create({
        data: {
          name: "BELLA INDRAWATI",
          address: "GRIYA BUKIT JAYA BLOK T.6/2, Desa/Kelurahan Tlajung Udik, Kec. Gunung Putri, Kab. Bogor, Provinsi Jawa Barat",
          phone: "085285703497",
          email: "bellaricobella92@outlook.co.id",
          description: "Perdagangan eceran sembako moderen yang menyediakan kebutuhan pokok berkualitas dengan harga terjangkau."
        }
      })
    }
    
    return NextResponse.json(company)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch company info' }, { status: 500 })
  }
}