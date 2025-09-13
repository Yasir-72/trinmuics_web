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
    <section className="py-20 rounded-2xl mt-6 bg-[#2B2D2C] max-w-screen-2xl mx-auto px-6 md:px-12">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">
          Technologies We <span className="text-[#ED4C22]">Work With</span> 
        </h2>
        <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
          From enterprise-grade applications to innovative startups, we master a
          wide range of modern technologies to bring your ideas to life.
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex animate-scroll gap-12">
          {[...codingLanguages, ...codingLanguages].map((lang, idx) => (
            <div
              key={idx}
               className={`
                  flex-shrink-0 w-40 h-28 
                  flex flex-col items-center justify-center 
                  rounded-xl bg-white shadow-md hover:shadow-orange-500/40 
                  transition-transform duration-300 hover:scale-105
                `}
            >
              <Image
                src={lang.src}
                alt={lang.name}
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        <div className="p-6 rounded-xl bg-[#1F2020] text-white shadow-md hover:shadow-orange-500/40 transition-transform duration-300">
          <Code className="w-10 h-10 text-[#ED4C22] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Full-Stack Expertise</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We handle both frontend and backend seamlessly — delivering fast,
            scalable, and secure solutions.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#1F2020] text-white shadow-md hover:shadow-orange-500/40 transition-transform duration-300">
          <Cpu className="w-10 h-10 text-[#ED4C22] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cutting-Edge Tech</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            From AI to cloud computing, we integrate the latest innovations to
            future-proof your projects.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#1F2020] text-white shadow-md hover:shadow-orange-500/40 transition-transform duration-300">
          <Layers className="w-10 h-10 text-[#ED4C22] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Every project is unique. We tailor our tech stack to match your
            goals and ensure the best performance.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#1F2020] text-white shadow-md hover:shadow-orange-500/40 transition-transform duration-300">
          <Globe className="w-10 h-10 text-[#ED4C22] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Following international best practices, we deliver solutions that
            are reliable, secure, and globally competitive.
          </p>
        </div>
      </div>

      <style jsx>{`
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
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
