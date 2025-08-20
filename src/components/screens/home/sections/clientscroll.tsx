"use client";
import Image from "next/image";

const clients = [
  { name: "Cisco", src: "/Clients/Cisco.png" },
  { name: "Google", src: "/Clients/google.png" },
  { name: "IBM", src: "/Clients/ibm.png" },
  { name: "Oracle", src: "/Clients/oracle.png" },
  { name: "Waffly", src: "/Clients/waffly.png" },
  { name: "Noviscient", src: "/Clients/noviscient.png" },
];

export default function ClientScroll() {
  return (
    <section className="py-4 bg-white rounded-xl mt-3">
      {/* Full width but smaller height */}
      <div className="relative w-full overflow-hidden bg-white h-12 flex items-center rounded-full animated-border custom-scroll">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Scrolling Logos */}
        <div className="flex animate-scroll gap-8 relative z-10">
          {[...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center">
              <Image
                src={client.src}
                alt={client.name}
                width={65}
                height={20}
                className="opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Logo Scrolling Animation */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 18s linear infinite;
          width: max-content;
        }

        /* Animated Border */
        .animated-border {
          border: 2px solid transparent;
          border-radius: 9999px;
          background: linear-gradient(white, white) padding-box,
            linear-gradient(90deg, #9333ea, #a855f7, #9333ea) border-box;
          background-size: 300% 300%;
          animation: borderGlow 6s linear infinite;
        }

        @keyframes borderGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Thin Custom Scrollbar */
        .custom-scroll::-webkit-scrollbar {
          height: 2px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #9333ea;
          border-radius: 9999px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #a855f7;
        }
      `}</style>
    </section>
  );
}
