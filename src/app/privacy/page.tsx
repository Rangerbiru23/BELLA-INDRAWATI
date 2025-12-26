import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              BELLA INDRAWATI - Perlindungan data dan privasi Anda adalah prioritas utama kami
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
                  Kami memahami bahwa privasi dan keamanan data pribadi Anda sangat penting. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                  melindungi, dan membagikan informasi pribadi Anda saat menggunakan layanan kami.
                </p>
                <p>
                  Dengan menggunakan layanan <span className="font-semibold text-green-600">BELLA INDRAWATI</span>, 
                  Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                  <Database className="h-6 w-6" />
                  Pengumpulan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold mb-3">Informasi yang Kami Kumpulkan:</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600">Data Pribadi</h4>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat pengiriman</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600">Data Transaksi</h4>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Riwayat pembelian</li>
                      <li>Produk yang dipesan</li>
                      <li>Metode pembayaran</li>
                      <li>Alamat pengiriman</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600">Data Penggunaan</h4>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>IP Address</li>
                      <li>Jenis perangkat</li>
                      <li>Browser yang digunakan</li>
                      <li>Waktu akses</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                  <Eye className="h-6 w-6" />
                  Penggunaan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Kami menggunakan informasi yang Anda berikan untuk:</p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Memproses pesanan:</strong> Menangani pembelian dan pengiriman produk sembako
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Layanan pelanggan:</strong> Merespons pertanyaan dan memberikan dukungan
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Marketing:</strong> Mengirimkan informasi produk dan promosi relevan
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Perbaikan layanan:</strong> Menganalisis data untuk meningkatkan kualitas layanan
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                  <Lock className="h-6 w-6" />
                  Perlindungan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-green-600">BELLA INDRAWATI</span> berkomitmen 
                  untuk melindungi data pribadi Anda dengan:
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <ul className="space-y-2">
                    <li>✅ Enkripsi data saat transmisi dan penyimpanan</li>
                    <li>✅ Akses terbatas kepada otorisasi personel</li>
                    <li>✅ Sistem keamanan berlapis untuk server</li>
                    <li>✅ Backup data rutin dan aman</li>
                    <li>✅ Monitoring keamanan 24/7</li>
                  </ul>
                </div>
                
                <p>
                  Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda 
                  kepada pihak ketiga tanpa persetujuan Anda, kecuali yang diwajibkan oleh hukum.
                </p>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Hak Anda Sebagai Pengguna</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Sebagai pengguna, Anda memiliki hak untuk:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Akses Data</h4>
                    <p className="text-sm">Meminta salinan data pribadi yang kami simpan</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Koreksi Data</h4>
                    <p className="text-sm">Memperbarui informasi pribadi yang tidak akurat</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Hapus Data</h4>
                    <p className="text-sm">Meminta penghapusan data pribadi Anda</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Opt-out</h4>
                    <p className="text-sm">Berhenti dari komunikasi marketing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin 
                  menggunakan hak privasi Anda, silakan hubungi kami:
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
                <CardTitle className="text-2xl text-green-700">Pembaruan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan 
                  perubahan dalam praktik kami atau persyaratan hukum. Setiap perubahan akan 
                  diberitahukan melalui website atau email.
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