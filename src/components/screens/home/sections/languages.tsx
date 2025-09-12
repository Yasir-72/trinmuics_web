"use client";
import Image from "next/image";

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
    <section className="py-4 rounded-xl mt-6 bg-white max-w-screen-2xl mx-auto">
      {/* Title */}
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-3 ">
        Languages We Offer
      </h2>

      {/* Purple Gradient Background with faded corners */}
      <div className="relative w-full overflow-hidden h-8 flex items-center rounded-full bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900">
        {/* Left Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-purple-900 via-purple-600 to-transparent z-10" />
        {/* Right Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-purple-900 via-purple-600 to-transparent z-10" />

        {/* Scrolling Logos */}
        <div className="flex animate-scroll gap-6 relative z-10">
          {[...codingLanguages, ...codingLanguages, ...codingLanguages].map(
            (lang, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center">
                <Image
                  src={lang.src}
                  alt={lang.name}
                  width={50}  // smaller logos
                  height={20}
                  className="opacity-95 hover:scale-110 transition-transform duration-300"
                />
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        /* Logo Scrolling Animation */
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
