import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "62895323901050"; // Ganti dengan nomor WA tujuan
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Halo Daffa Tani!, saya ${name}.\n\n${message}`
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Hubungi Kami</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 border rounded-xl"
        />
        <textarea
          rows="5"
          placeholder="Pesan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="p-3 border rounded-xl"
        ></textarea>
        <Button type="submit" className="w-full bg-green-600 text-white font-semibold">
          Kirim via WhatsApp
        </Button>
      </form>
    </section>
  );
}
