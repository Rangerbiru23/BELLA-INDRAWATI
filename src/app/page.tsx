'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, ShoppingCart, Package, Star, Clock, Truck } from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  imageUrl?: string
  featured: boolean
}

interface Company {
  name: string
  address: string
  phone: string
  email: string
  description: string
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [company, setCompany] = useState<Company | null>(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [productsRes, companyRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/company')
      ])
      
      if (productsRes.ok) {
        const productsData = await productsRes.json()
        setProducts(productsData)
      }
      
      if (companyRes.ok) {
        const companyData = await companyRes.json()
        setCompany(companyData)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })
      
      if (response.ok) {
        alert('Pesan berhasil dikirim!')
        setContactForm({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('Gagal mengirim pesan. Silakan coba lagi.')
      }
    } catch (error) {
      alert('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <div>
                  <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-semibold mb-2">
                    TERPERCAYA & PROFESIONAL
                  </Badge>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-orange-400">BELLA</span>{' '}
                <span className="text-white">INDRAWATI</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-4 text-green-50 font-medium">
                Perdagangan Eceran Sembako Moderen
              </p>
              
              <p className="text-lg mb-8 text-green-100 leading-relaxed">
                Menyediakan kebutuhan pokok berkualitas dengan harga terjangkau. 
                Solusi lengkap untuk kebutuhan sembako keluarga Anda dengan pelayanan terbaik.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Belanja Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 text-lg">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400">1000+</div>
                    <div className="text-green-100">Produk</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400">500+</div>
                    <div className="text-green-100">Pelanggan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400">24/7</div>
                    <div className="text-green-100">Pelayanan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400">100%</div>
                    <div className="text-green-100">Halal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih <span className="text-green-600">BELLA INDRAWATI</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen menyediakan produk berkualitas dengan pelayanan terbaik untuk kebutuhan sembako Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Produk Lengkap</h3>
              <p className="text-gray-600">Berbagai macam sembako dan kebutuhan pokok tersedia dalam satu tempat</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pesanan Anda akan dikirim dengan cepat dan aman ke tujuan</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">Semua produk yang kami jual terjamin kualitas dan kehalalannya</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Buka Setiap Hari</h3>
              <p className="text-gray-600">Layanan kami tersedia setiap hari untuk memenuhi kebutuhan Anda</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Produk Unggulan</h2>
            <p className="text-xl text-gray-600">Produk pilihan dengan kualitas terbaik</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-4">
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <Package className="h-12 w-12 text-gray-400" />
                  </div>
                  <Badge className="w-fit bg-green-100 text-green-800">
                    {product.category}
                  </Badge>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-600">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      + Keranjang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info & Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Tentang <span className="text-green-600">BELLA INDRAWATI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {company?.description || "Perdagangan eceran sembako moderen yang menyediakan kebutuhan pokok berkualitas dengan harga terjangkau. Kami berkomitmen untuk memberikan pelayanan terbaik kepada setiap pelanggan."}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Alamat</h4>
                    <p className="text-gray-600">{company?.address || "GRIYA BUKIT JAYA BLOK T.6/2, Desa/Kelurahan Tlajung Udik, Kec. Gunung Putri, Kab. Bogor, Provinsi Jawa Barat"}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telepon</h4>
                    <p className="text-gray-600">{company?.phone || "085285703497"}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">{company?.email || "bellaricobella92@outlook.co.id"}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-gray-800">Hubungi Kami</CardTitle>
                  <p className="text-gray-600">Kirim pesan untuk pertanyaan atau pemesanan</p>
                </CardHeader>
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telepon
                    </label>
                    <Input
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <Textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-cover" />
                <h3 className="text-2xl font-bold">
                  <span className="text-orange-400">BELLA</span> INDRAWATI
                </h3>
              </div>
              <p className="text-gray-400">
                Perdagangan eceran sembako moderen terpercaya yang menyediakan kebutuhan pokok berkualitas.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Berbagai Macam Sembako</li>
                <li>Pengiriman Langsung</li>
                <li>Pemesanan Online</li>
                <li>Konsultasi Produk</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{company?.address || "GRIYA BUKIT JAYA BLOK T.6/2, Tlajung Udik, Gunung Putri, Bogor"}</li>
                <li>{company?.phone || "085285703497"}</li>
                <li>{company?.email || "bellaricobella92@outlook.co.id"}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BELLA INDRAWATI. Hak Cipta Dilindungi.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}