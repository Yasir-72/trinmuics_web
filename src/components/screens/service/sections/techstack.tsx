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
    <section className="py-16 bg-white text-gray-900  mt-3">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-purple-700">
            Tech Stack We Use
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're thrilled to offer comprehensive development for Android, iOS,
            and web applications! Our secure, scalable, high-performance
            solutions guarantee smooth integration across all devices.
          </p>
        </div>

        {/* Grid - One card per row */}
        <div className="grid grid-cols-1 gap-10">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center 
              bg-white rounded-2xl shadow-md p-8 border border-purple-200 
              max-w-5xl mx-auto w-full
              transform transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-purple-600"
            >
              {/* Text Section */}
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                  {item.title}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
