import { ChevronDown, ChevronUp } from "lucide-react"; // opsional untuk ikon
import { useState } from "react";

const faqData = [
  {
    question: "Jam buka operasional Daffa Tani ?",
    answer: "Kami buka setiap hari pukul 07.30 - 17.00 WIB, kecuali ada acara",
  },
  {
    question: "Dimana Lokasi Daffa Tani ?",
    answer: "Kami berada di Sribit, Delanggu, Klaten",
  },
  {
    question: "Bagaimana cara membeli pupuk bersubsidi ?",
    answer: "Pupuk subsidi hanya dapat dibeli oleh petani yang memiliki/membawa kartu tani dan terdatar di RDKK",
  },
  {
    question: "Bagaimana mendapat Informasi produk, Stok, dan harga ?",
    answer: "Anda bisa menghubungi kami melalui formulir kontak atau WhatsApp yang tersedia.",
  },
  {
    question: "Seputar layanan BRILink ?",
    answer: "Layanan BRILink hanya dilakukan langsung di toko saat jam buka operasional, baik transfer, setor maupun tarik tunai.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Pertanyaan Umum</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
            >
              {item.question}
              {activeIndex === index ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            <div
              className={`px-4 pb-4 py-2 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
