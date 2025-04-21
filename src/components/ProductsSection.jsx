import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

const products = [
  { name: "Pupuk Subsidi", desc: "Pupuk subsidi pemerintah bagi petani terdaftar", image: "/images/pupuk-1.png" },
  { name: "Pupuk Non Subsidi", desc: "Alternatif pupuk untuk para petani", image: "/images/pupuk-2.jpg" },
  { name: "Benih Padi", desc: "Benih padi berkualitas dan bersertifikat dengan berbagai varietas", image: "/images/benih-padi1.png" },
  { name: "Benih Holtikultura", desc: "Berbagai Jenis benih Holtikultura yang berkualitas", image: "/images/benih-holti.jpg" },
  { name: "Pestisida", desc: "Tersedia beragam Pestisida, Herbisida, Fungisida", image: "/images/pestisida.png" },
  { name: "Alat Pertanian", desc: "Peralatan modern untuk pertanian efisien", image: "/images/tangki-1.jpg" },
];

export default function ProductsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="product" className="py-16 px-6 bg-gray-100 relative">
      <h2 className="text-3xl font-bold text-center mb-10">Produk Unggulan</h2>

      {/* Tombol Navigasi */}
      <div className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2">
        <button onClick={() => scroll("left")} className="bg-white shadow p-2 rounded-full">&#8592;</button>
      </div>
      <div className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2">
        <button onClick={() => scroll("right")} className="bg-white shadow p-2 rounded-full">&#8594;</button>
      </div>

      {/* Scrollable Product List */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2"
      >
        {products.map((product, idx) => (
          <Card
            key={idx}
            className="snap-start shrink-0 w-full sm:w-[80%] md:w-1/3 lg:w-1/3 rounded-2xl overflow-hidden shadow-md flex flex-col"
          >
            <img src={product.image} alt={product.name} className="h-60 w-full object-cover" />
            <CardContent className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
