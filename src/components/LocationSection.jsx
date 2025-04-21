
export default function LocationSection() {
    return (
<section id="location" className="py-16 px-8 bg-gray-100 relative">
      <h2 className="text-3xl font-bold text-center mb-6">Lokasi</h2>
        <div className="mt-2">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.4998341379705!2d110.67939559999999!3d-7.629270300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a41226d4e81db%3A0x5dd3e9945b7b5a2f!2sToko%20Pertanian%20DAFFA%20TANI!5e0!3m2!1sid!2sid!4v1744813487859!5m2!1sid!2sid"
                width="100%"
                height="200"
                className="rounded-lg border mt-2"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
</section>
);
}