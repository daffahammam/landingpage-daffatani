import { Menu, X } from "lucide-react"; // Icon hamburger dan close dari lucide
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero"><div className="flex items-center space-x-2 text-xl font-bold text-green-600">
  <img src="/daffatani.png" alt="logo" className="w-8 h-8" />
  <span>Daffa Tani</span>
</div></a>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li><a href="#hero" className="hover:text-green-600">Beranda</a></li>
            <li><a href="#product" className="hover:text-green-600">Produk</a></li>
            <li><a href="#service" className="hover:text-green-600">Layanan</a></li>
            <li><a href="#FAQ" className="hover:text-green-600">FAQ's</a></li>
            <li><a href="#contact" className="hover:text-green-600">Kontak</a></li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><a href="#hero" className="hover:text-green-600">Beranda</a></li>
            <li><a href="#product" className="hover:text-green-600">Produk</a></li>
            <li><a href="#service" className="hover:text-green-600">Layanan</a></li>
            <li><a href="#FAQ" className="hover:text-green-600">FAQ's</a></li>
            <li><a href="#contact" className="hover:text-green-600">Kontak</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
