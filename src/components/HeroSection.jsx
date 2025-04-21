import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpeg",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background dinamis dengan transisi lembut */}
      <motion.div
        key={images[currentImage]} // biar framer detect perubahan style
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      />

      {/* Overlay (opsional) */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Konten utama */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        style={{
          textShadow:
            "2px 2px 0 #92400e, -2px -2px 0 #92400e, 2px -2px 0 #92400e, -2px 2px 0 #92400e",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Selamat Datang di Daffa Tani
        </motion.h1>
        <p className="text-lg md:text-xl mb-6">
          Solusi terbaik untuk kebutuhan pertanian Anda
        </p>
        <Button
          onClick={() => {
            const section = document.getElementById("contact");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl mb-4"
        >
          Hubungi Kami
      </Button>
      </div>
    </section>
  );
}
