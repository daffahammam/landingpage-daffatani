import { Card, CardContent } from "@/components/ui/card";
import { FaMoneyCheckAlt, FaSeedling } from "react-icons/fa";

const services = [
  {
    title: "Konsultasi Pertanian",
    description:
      "Dapatkan saran dan pendampingan langsung dari ahli pertanian untuk meningkatkan hasil panen Anda secara GRATIS.",
    icon: <FaSeedling className="text-green-600 text-4xl mb-4" />,
    bgColor: "bg-green-100", // Hijau muda
  },
  {
    title: "Layanan BRILink",
    description:
      "Melayani berbagai transaksi keuangan seperti tarik tunai, transfer, dan pembayaran melalui BRILink.",
    icon: <FaMoneyCheckAlt className="text-blue-600 text-4xl mb-4" />,
    bgColor: "bg-blue-100", // Biru muda
  },
];

export default function ServicesSection() {
  return (
    <section id="service" className="py-16 px-6 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md p-0 overflow-hidden">
            <CardContent
              className={`text-center p-6 ${service.bgColor}`}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
