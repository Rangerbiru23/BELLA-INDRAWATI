import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Check if products already exist
    const existingProducts = await db.product.count()
    
    if (existingProducts > 0) {
      return NextResponse.json({ message: 'Products already exist' })
    }

    // Sample products for sembako store
    const sampleProducts = [
      {
        name: 'Beras Premium 5kg',
        description: 'Beras kualitas premium dengan butiran penuh dan pulen',
        category: 'Beras',
        price: 75000,
        featured: true,
        imageUrl: '/api/placeholder/300/200'
      },
      {
        name: 'Minyak Goreng 2L',
        description: 'Minyak goreng kemasan 2 liter berkualitas tinggi',
        category: 'Minyak Goreng',
        price: 35000,
        featured: true,
        imageUrl: '/api/placeholder/300/200'
      },
      {
        name: 'Gula Pasir 1kg',
        description: 'Gula pasir murni kemasan 1 kilogram',
        category: 'Gula',
        price: 15000,
        featured: false,
        imageUrl: '/api/placeholder/300/200'
      },
      {
        name: 'Tepung Terigu 1kg',
        description: 'Tepung terigu protein sedang untuk berbagai kebutuhan masakan',
        category: 'Tepung',
        price: 12000,
        featured: false,
        imageUrl: '/api/placeholder/300/200'
      },
      {
        name: 'Telur Ayam 1kg',
        description: 'Telur ayam segar kualitas premium',
        category: 'Protein',
        price: 28000,
        featured: true,
        imageUrl: '/api/placeholder/300/200'
      },
      {
        name: 'Kecap Manis 600ml',
        description: 'Kecap manis dengan rasa autentik',
        category: 'Bumbu',
        price: 18000,
        featured: false,
        imageUrl: '/api/placeholder/300/200'
      },
      {
        name: 'Garam Halus 500g',
        description: 'Garam halus beryodium kemasan hygiene',
        category: 'Bumbu',
        price: 5000,
        featured: false,
        imageUrl: '/api/placeholder/300/200'
      },
      {
        name: 'Susu Kental Manis 370g',
        description: 'Susu kental manis dengan kualitas terbaik',
        category: 'Susu',
        price: 12000,
        featured: true,
        imageUrl: '/api/placeholder/300/200'
      }
    ]

    // Insert sample products
    for (const product of sampleProducts) {
      await db.product.create({
        data: product
      })
    }

    return NextResponse.json({ message: 'Sample products created successfully' })
  } catch (error) {
    console.error('Error creating sample products:', error)
    return NextResponse.json({ error: 'Failed to create sample products' }, { status: 500 })
  }
}