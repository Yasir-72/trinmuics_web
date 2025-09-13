"use client";
import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Users, Calculator, Headphones } from "lucide-react";

const clients = [
  { name: "Cisco", src: "/Clients/Cisco.png" },
  { name: "Google", src: "/Clients/google.png" },
  { name: "IBM", src: "/Clients/ibm.png" },
  { name: "Waffly", src: "/Clients/waffly.png" },
  { name: "Noviscient", src: "/Clients/noviscient.png" },
];

const features = [
  {
    title: "36 Standards of Quality",
    desc: "We follow 36 rigorous standards across design, development, testing, and delivery to guarantee world-class quality in every project, ensuring nothing is left to chance.",
    Icon: ShieldCheck,
  },
  {
    title: "Top 3% Talent",
    desc: "Our team is handpicked from the top 3% of global talent, bringing unmatched expertise, innovation, and excellence. Every project benefits from skilled minds and proven experience.",
    Icon: Users,
  },
  {
    title: "100% Estimate Accuracy",
    desc: "We deliver projects on time and within budget, with 100% estimation accuracy. No hidden surprises, no delays — only complete transparency and predictable outcomes.",
    Icon: Calculator,
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Our commitment doesn’t end at delivery. We provide round-the-clock dedicated support and proactive monitoring to keep your business running smoothly, without interruptions.",
    Icon: Headphones,
  },
];

export default function ClientScroll() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="py-20 rounded-2xl mt-6 bg-white max-w-screen-2xl mx-auto px-6 md:px-12">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#2B2D2C]">
          Trusted by <span className="text-[#ED4C22]">Leading Brands</span>
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          We’ve partnered with some of the most innovative companies worldwide,
          delivering excellence and innovation in every project.
        </p>
      </div>

      {/* Scrolling Logos Section */}
      <div className="relative w-full overflow-hidden py-6">
        <div className="flex animate-scroll gap-6">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-2xl bg-[#2B2D2C] shadow-lg hover:shadow-orange-500/50 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {/* Left Column - Feature Cards */}
        <div className="grid grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveFeature(feature)}
              className={`p-6 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 shadow-md 
                ${
                  activeFeature.title === feature.title
                    ? "bg-[#2B2D2C] text-white shadow-orange-500/40 scale-105"
                    : "bg-gray-100 text-[#2B2D2C] hover:bg-[#2B2D2C]/80 hover:text-white"
                }`}
            >
              {/* Icon Circle */}
              <div
                className={`w-14 h-14 mb-3 flex items-center justify-center rounded-full transition-colors duration-300 
                ${
                  activeFeature.title === feature.title
                    ? "bg-[#ED4C22] text-white"
                    : "bg-white text-[#ED4C22]"
                }`}
              >
                <feature.Icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Column - Active Description */}
        <div className="p-8 rounded-xl bg-[#2B2D2C] text-white shadow-md transition-all duration-500">
          <h3 className="text-3xl font-bold mb-4 text-[#ED4C22]">
            {activeFeature.title}
          </h3>
          <p className="text-xl leading-relaxed text-gray-200">
            {activeFeature.desc}
          </p>
          <a
            href="#"
            className="text-[#ED4C22] font-semibold text-xl mt-5 inline-block hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* Logo Scroll Animation */}
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
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
