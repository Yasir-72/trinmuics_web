"use client";
import Image from "next/image";

const clients = [
  { name: "Cisco", src: "/Clients/Cisco.png" },
  { name: "Google", src: "/Clients/google.png" },
  { name: "IBM", src: "/Clients/ibm.png" },
  { name: "Waffly", src: "/Clients/waffly.png" },
  { name: "Noviscient", src: "/Clients/noviscient.png" },
];

export default function ClientScroll() {
  return (
    <section className="py-6 rounded-xl mt-3 bg-white px-10">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-3">
        Our Clients
      </h2>

      {/* Gradient Background with gray-white-purple */}
      <div className="relative w-full overflow-hidden h-12 flex items-center rounded-full bg-gradient-to-r from-gray-800 via-purple-500 to-white">
        {/* Fading edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-900/60 via-gray-700/30 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-900/60 via-gray-700/30 to-transparent z-10" />

        {/* Scrolling Logos */}
        <div className="flex animate-scroll gap-10 relative z-10">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center">
              <Image
                src={client.src}
                alt={client.name}
                width={70}
                height={30}
                className="opacity-90 hover:opacity-100 hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {/* Left Column with Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-100 text-purple-700 shadow-md hover:shadow-purple-400/70 transition-transform duration-300">
            <h3 className="font-semibold">36 Standards of Quality</h3>
          </div>
          <div className="p-4 rounded-lg bg-gray-100 text-purple-700 shadow-md hover:shadow-purple-400/70 transition-transform duration-300">
            <h3 className="font-semibold">Hiring the top 3% of talent</h3>
          </div>
          <div className="col-span-2 p-4 rounded-lg bg-gray-100 text-purple-700 shadow-md hover:shadow-purple-400/70 transition-transform duration-300">
            <h3 className="font-semibold">100% Estimates Match</h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-6 rounded-lg bg-gray-100 text-purple-700 shadow-md hover:shadow-purple-400/70 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-2">36 Standards of Quality</h3>
          <p className="text-sm leading-relaxed">
            At our company, we adhere to a comprehensive set of 36 rigorous
            standards of quality, ensuring that every aspect of our software
            development process is executed with precision and excellence.
          </p>
          <a
            href="#"
            className="text-purple-700 font-semibold text-sm mt-3 inline-block hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
