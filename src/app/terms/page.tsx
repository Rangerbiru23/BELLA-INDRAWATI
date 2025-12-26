import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, ShoppingCart, Users, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-green-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              BELLA INDRAWATI - Ketentuan penggunaan layanan perdagangan sembako moderen kami
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Pendahuluan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Selamat datang di <span className="font-semibold text-green-600">BELLA INDRAWATI</span>. 
                  Syarat & Ketentuan ini mengatur penggunaan layanan perdagangan eceran sembako 
                  moderen yang kami sediakan melalui website dan platform lainnya.
                </p>
                <p>
                  Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat 
                  oleh Syarat & Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun 
                  dari ketentuan ini, harap jangan menggunakan layanan kami.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm">
                    <strong>Informasi Perusahaan:</strong><br/>
                    Nama: BELLA INDRAWATI<br/>
                    Alamat: GRIYA BUKIT JAYA BLOK T.6/2, Desa/Kelurahan Tlajung Udik, Kec. Gunung Putri, Kab. Bogor, Provinsi Jawa Barat<br/>
                    Telepon: 085285703497<br/>
                    Email: bellaricobella92@outlook.co.id
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6" />
                  Layanan Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold mb-3">Layanan yang Kami Sediakan:</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Penjualan Sembako:</strong> Berbagai macam kebutuhan pokok seperti beras, minyak goreng, gula, terigu, dan lainnya
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Pengiriman:</strong> Layanan pengiriman langsung ke alamat pelanggan dalam area tertentu
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Pemesanan Online:</strong> Platform pemesanan melalui website dan aplikasi mobile
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Konsultasi Produk:</strong> Informasi dan rekomendasi produk sesuai kebutuhan
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Tanggung Jawab Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Sebagai pengguna layanan <span className="font-semibold text-green-600">BELLA INDRAWATI</span>, Anda setuju untuk:</p>
                
                <div className="space-y-2">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Informasi Akurat</h4>
                    <p className="text-sm">Memberikan informasi pribadi yang benar, akurat, dan lengkap saat pendaftaran dan pemesanan</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Keamanan Akun</h4>
                    <p className="text-sm">Menjaga kerahasiaan kata sandi dan informasi akun Anda</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Penggunaan yang Bertanggung Jawab</h4>
                    <p className="text-sm">Menggunakan layanan kami untuk tujuan yang sah dan sesuai dengan hukum yang berlaku</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Pembayaran Tepat Waktu</h4>
                    <p className="text-sm">Melakukan pembayaran sesuai dengan metode dan jangka waktu yang disepakati</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ordering and Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Pemesanan & Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold mb-3">Prosedur Pemesanan:</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600">1. Pemilihan Produk</h4>
                    <p>Pelanggan memilih produk sembako yang diinginkan melalui website atau aplikasi</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600">2. Konfirmasi Pesanan</h4>
                    <p>Sistem akan mengkonfirmasi ketersediaan produk dan total harga</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600">3. Pembayaran</h4>
                    <p>Pelanggan melakukan pembayaran melalui metode yang tersedia</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600">4. Pengiriman</h4>
                    <p>Pesanan akan dikirim ke alamat yang ditentukan setelah pembayaran dikonfirmasi</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Kebijakan Pembayaran:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
                    <li>Pembayaran harus dilakukan sebelum pengiriman</li>
                    <li>Biaya pengiriman ditanggung oleh pembeli</li>
                    <li>Promo dan diskon berlaku sesuai syarat dan ketentuan masing-masing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Pengiriman</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold mb-3">Kebijakan Pengiriman:</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Area Pengiriman:</strong> Saat ini melayani area Tlajung Udik dan sekitarnya
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Waktu Pengiriman:</strong> 1-3 hari kerja tergantung ketersediaan dan lokasi
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Status Pesanan:</strong> Pelanggan dapat melacak status pesanan melalui website
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2">Catatan Penting:</h4>
                  <p className="text-sm">
                    Kami tidak bertanggung jawab atas keterlambatan pengiriman yang disebabkan oleh 
                    faktor di luar kendali kami seperti cuaca buruk, kemacetan, atau bencana alam.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Returns and Refunds */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Pengembalian & Pengembalian Dana</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold mb-3">Kebijakan Pengembalian:</h3>
                
                <div className="space-y-3">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Produk Tidak Dapat Dikembalikan:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Produk makanan yang sudah dibuka atau digunakan</li>
                      <li>Produk dengan kemasan rusak akibat pengiriman (harus dilaporkan segera)</li>
                      <li>Produk yang sudah melewati batas waktu pengembalian (maksimal 24 jam)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Syarat Pengembalian:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Produk masih dalam kondisi baik dan kemasan utuh</li>
                      <li>Menunjukkan bukti pembelian</li>
                      <li>Melaporkan kerusakan maksimal 2 jam setelah pengiriman</li>
                      <li>Produk tidak sesuai dengan pesanan atau kedaluwarsa</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Semua konten, desain, logo, dan materi lainnya di website <span className="font-semibold text-green-600">BELLA INDRAWATI</span> 
                  dilindungi oleh hukum hak kekayaan intelektual.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-2">Yang Dilindungi:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Nama dan logo "BELLA INDRAWATI"</li>
                    <li>Desain website dan tampilan visual</li>
                    <li>Konten teks, gambar, dan video</li>
                    <li>Informasi produk dan harga</li>
                  </ul>
                </div>
                
                <p className="text-sm">
                  Dilarang keras menyalin, mendistribusikan, atau menggunakan materi kami tanpa 
                  izin tertulis dari <span className="font-semibold text-green-600">BELLA INDRAWATI</span>.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-green-600">BELLA INDRAWATI</span> tidak bertanggung jawab atas:
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      Kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan layanan
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      Ketersediaan produk yang dapat berubah sewaktu-waktu
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      Gangguan teknis atau downtime website
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      Kesalahan atau ketidakakuratan informasi produk
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Terminasi Layanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami berhak untuk menghentikan atau menangguhkan akses Anda ke layanan kami 
                  jika:
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Anda melanggar Syarat & Ketentuan ini</li>
                  <li>Anda menggunakan layanan untuk tujuan ilegal</li>
                  <li>Anda membahayakan keamanan sistem kami</li>
                  <li>Ada alasan keamanan atau perlindungan pengguna lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <strong className="text-green-600">Email:</strong>
                      <p>bellaricobella92@outlook.co.id</p>
                    </div>
                    <div>
                      <strong className="text-green-600">Telepon:</strong>
                      <p>085285703497</p>
                    </div>
                    <div>
                      <strong className="text-green-600">Alamat:</strong>
                      <p>GRIYA BUKIT JAYA BLOK T.6/2, Desa/Kelurahan Tlajung Udik, Kec. Gunung Putri, Kab. Bogor, Provinsi Jawa Barat</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Update Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Pembaruan Syarat & Ketentuan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Syarat & Ketentuan ini dapat diperbarui dari waktu ke waktu. Perubahan akan 
                  diberitahukan melalui website atau email. Penggunaan lanjutan layanan kami 
                  setelah perubahan berarti Anda menerima syarat yang telah diperbarui.
                </p>
                
                <p className="text-sm text-gray-600">
                  <strong>Terakhir diperbarui:</strong> 1 Januari 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            <h3 className="text-xl font-bold">
              <span className="text-orange-400">BELLA</span> INDRAWATI
            </h3>
          </div>
          <p className="text-gray-400 mb-4">
            Perdagangan eceran sembako moderen terpercaya
          </p>
          <div className="space-x-4 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            &copy; 2024 BELLA INDRAWATI. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  )
}