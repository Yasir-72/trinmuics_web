"use client";
import Image from "next/image";
import { Code, Cpu, Globe, Layers } from "lucide-react";

const codingLanguages = [
  { name: "Python", src: "/Coding/python.png" },
  { name: "JavaScript", src: "/Coding/js.png" },
  { name: "Java", src: "/Coding/java.png" },
  { name: "C++", src: "/Coding/cpp.png" },
  { name: "C#", src: "/Coding/csharp.png" },
  { name: "Go", src: "/Coding/go.png" },
  { name: "PHP", src: "/Coding/php.png" },
  { name: "Kotlin", src: "/Coding/kotlin.png" },
  { name: "Ruby", src: "/Coding/ruby.png" },
  { name: "R", src: "/Coding/r.png" },
];

export default function CodingLanguagesScroll() {
  return (
    <section className="relative py-20 rounded-3xl mt-6 max-w-screen-2xl mx-auto overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(237,76,34,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(237,76,34,0.08)_0%,transparent_50%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#ED4C22]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ED4C22]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 px-4 md:px-12 lg:px-16">
        {/* Enhanced Title */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-[#ED4C22] bg-[#ED4C22]/10 px-4 py-2 rounded-full border border-[#ED4C22]/20 mb-4 inline-block">
              💻 Tech Stack
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Technologies We{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Work With
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From{" "}
            <span className="text-[#ED4C22] font-semibold">
              enterprise-grade applications
            </span>{" "}
            to{" "}
            <span className="text-[#ED4C22] font-semibold">
              innovative startups
            </span>
            , we master a wide range of modern technologies to bring your ideas
            to life.
          </p>
        </div>

        {/* Enhanced Scrolling Logos */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none rounded-2xl"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none rounded-2xl"></div>

          <div className="flex animate-scroll gap-8">
            {[...codingLanguages, ...codingLanguages, ...codingLanguages].map(
              (lang, idx) => (
                <div
                  key={idx}
                  className="group relative flex-shrink-0 w-44 h-32 flex flex-col items-center justify-center transition-all duration-500 hover:scale-110"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/98 to-gray-50/95 backdrop-blur-sm rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ED4C22]/5 via-transparent to-[#ED4C22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Enhanced Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ED4C22]/20 via-transparent to-[#ED4C22]/20 p-[2px] group-hover:from-[#ED4C22]/40 group-hover:to-[#ED4C22]/40 transition-all duration-500">
                    <div className="w-full h-full bg-white/90 rounded-2xl"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ED4C22]/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 p-4 text-center">
                    <div className="mb-3 transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={lang.src}
                        alt={lang.name}
                        width={60}
                        height={60}
                        className="object-contain mx-auto filter drop-shadow-lg"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-[#ED4C22] transition-colors duration-300">
                      {lang.name}
                    </h4>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#ED4C22]/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {[
            {
              icon: Code,
              title: "Full-Stack Expertise",
              desc: "We handle both frontend and backend seamlessly — delivering fast, scalable, and secure solutions.",
            },
            {
              icon: Cpu,
              title: "Cutting-Edge Tech",
              desc: "From AI to cloud computing, we integrate the latest innovations to future-proof your projects.",
            },
            {
              icon: Layers,
              title: "Custom Solutions",
              desc: "Every project is unique. We tailor our tech stack to match your goals and ensure the best performance.",
            },
            {
              icon: Globe,
              title: "Global Standards",
              desc: "Following international best practices, we deliver solutions that are reliable, secure, and globally competitive.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:rotate-1"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/90 via-gray-800/95 to-gray-900/95 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED4C22]/5 via-transparent to-[#ED4C22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Enhanced Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ED4C22]/20 via-transparent to-[#ED4C22]/20 p-[2px] group-hover:from-[#ED4C22]/40 group-hover:to-[#ED4C22]/40 transition-all duration-500">
                <div className="w-full h-full bg-gray-800/95 rounded-2xl"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ED4C22]/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-8">
                {/* Enhanced Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ED4C22]/20 to-orange-500/20 border border-[#ED4C22]/30 group-hover:from-[#ED4C22] group-hover:to-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon className="w-8 h-8 text-[#ED4C22] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Icon Glow */}
                  <div className="absolute inset-0 w-16 h-16 bg-[#ED4C22]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ED4C22] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.desc}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#ED4C22]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
      </div>

      {/* Enhanced Animation */}
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
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
