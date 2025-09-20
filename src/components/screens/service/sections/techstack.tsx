"use client";

import Image from "next/image";

const techStack = [
  {
    title: "Custom iOS App",
    points: [
      "Latest Swift language",
      "Swift UI framework, UI Kit",
      "Combine",
      "Core-Data",
      "Keychain",
      "Cached storing",
      "Xcode cloud",
      "Unit testing",
      "Snapshot testing",
    ],
    image: "/techstack/ios.png",
  },
  {
    title: "Tailored Social Media Web App",
    points: [
      "ReactJS",
      "NextJS",
      "Ruby on Rails",
      "Monolith-First, Microservices",
      "Swagger",
      "RSpec",
      "PostgreSQL",
      "Redis",
      "AWS, Heroku",
      "CloudFront, Lambda, S3",
    ],
    image: "/techstack/web.png",
  },
  {
    title: "Custom-built Android Application",
    points: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Services",
      "JUnit",
      "Artik module",
      "Raspberry Pi",
      "Arduino",
      "Protocols: NFC, Wi-Fi, Bluetooth, LPWAN, IPv6 over LoWPAN",
      "AWS: Lambda, Kinesis, S3, SageMaker, Sumerian",
    ],
    image: "/techstack/android.png",
  },
];

export default function TechStack() {
  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-16 bg-white rounded-3xl max-w-screen-2xl mx-auto overflow-hidden mt-6">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(237,76,34,0.08)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(237,76,34,0.06)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
              Modern Technology
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#2B2D2C]">
            Tech Stack <span className="text-[#ED4C22]">We Use</span>
          </h2>
          <p className="text-[#2B2D2C]/70 max-w-3xl mx-auto text-lg leading-relaxed">
            We're thrilled to offer comprehensive development for Android, iOS,
            and web applications! Our secure, scalable, high-performance
            solutions guarantee smooth integration across all devices.
          </p>
        </div>

        {/* Grid - One card per row */}
        <div className="grid grid-cols-1 gap-12">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center 
              bg-gradient-to-br from-gray-900 to-zinc-900 backdrop-blur-sm rounded-3xl shadow-lg p-10 
               max-w-6xl mx-auto w-full
              transform transition-all duration-300 hover:scale-[1.02] 
              hover:shadow-2xl  group"
            >
              {/* Text Section */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-orange-400 mb-6  transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-[#ED4C22]/5 rounded-xl border border-[#ED4C22]/10 hover:bg-[#ED4C22]/10 hover:border-[#ED4C22]/30 transition-all duration-300"
                    >
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-white text-sm font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                <div className=" group/image">
                  <div className="w-48 h-48 relative bg-gradient-to-br from-[#ED4C22]/10 to-[#ED4C22]/20 rounded-3xl p-8 border-2 border-[#ED4C22]/30 shadow-inner group-hover/image:scale-110 group-hover/image:rotate-3 transition-all duration-500">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  {/* Floating accent elements */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
