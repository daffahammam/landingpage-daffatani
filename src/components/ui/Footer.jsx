export default function Footer() {
    return (
      <footer className="bg-green-700 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Daffa Tani</h2>
            <p className="text-sm">
              Solusi pertanian modern untuk hasil yang maksimal. Kami menyediakan berbagai produk pertanian berkualitas.
            </p>
          </div>
  
          {/* Navigasi */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:underline">Beranda</a></li>
              <li><a href="#product" className="hover:underline">Produk</a></li>
              <li><a href="#service" className="hover:underline">Layanan</a></li>
              <li><a href="#FAQ" className="hover:underline">FAQ's</a></li>
              <li><a href="#contact" className="hover:underline">Kontak</a></li>
            </ul>
          </div>
  
          {/* Kontak & Sosial Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
            <p className="text-sm mb-2">Email: Khotimulhusna37@gmail.com</p>
            <p className="text-sm mb-4">Telp: +62 895-323-901050</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BcQgxmAmn/" className="hover:text-gray-300">Facebook</a>
              <a href="https://www.instagram.com/khotimulhusna37?igsh=ajF1Z2h5NzRiMTQ1" className="hover:text-gray-300">Instagram</a>
              <a href="https://wa.me/62895323901050" className="hover:text-gray-300">WhatsApp</a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-sm mt-10 border-t border-green-600 pt-4">
          © {new Date().getFullYear()} Daffa Tani. All rights reserved.
        </div>
      </footer>
    );
  }
  