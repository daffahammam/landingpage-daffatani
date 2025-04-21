// components/TestimonialsSection.jsx
import { Card } from "@/components/ui/card";

const testimonials = [
  { name: "Pak Budi", quote: "Produk dan konsultasi gratis dari Daffa Tani sangat membantu pertanian saya!" },
  { name: "Ibu Sari", quote: "Pelayanan cepat dan kualitas produk terbaik!" },
  { name: "Pak Harno", quote: "Produk lengkap dengan harga yang kompetitif!" },
  { name: "Pak Joko", quote: "Bisa mencarikan kebutuhan pertanian saya!" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonial" className="py-16 px-6 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-10">Apa Kata Mereka</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((testi, idx) => (
          <Card key={idx} className="border-green-200 border rounded-2xl p-4">
            <p className="italic text-gray-700">"{testi.quote}"</p>
            <p className="mt-4 font-semibold text-green-800">- {testi.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}