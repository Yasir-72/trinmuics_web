// sections/Methodologies.tsx
"use client";
import Image from "next/image";

const methodologies = [
  {
    title: "Idea Validation",
    description:
      "We validate your product ideas early with market research, competitor analysis, and quick prototyping.",
    image: "/images/idea.png",
    style: "lg:col-span-2", // Wide
  },
  {
    title: "UX Research",
    description:
      "We perform deep UX research to understand user behavior, pain points, and expectations for your product.",
    image: "/images/ux.png",
    style: "lg:row-span-2",
  },
  {
    title: "MVP Development",
    description:
      "We build MVPs quickly so you can test, iterate, and raise investment faster.",
    image: "/images/mvp.png",
    style: "lg:row-span-2", // Tall
  },
  {
    title: "Agile Iterations",
    description:
      "Using Agile methodology, we deliver features in short cycles, ensuring flexibility and faster results.",
    image: "/images/agile.png",
  },
  {
    title: "A/B Testing",
    description:
      "We utilize A/B Testing to compare versions and identify which delivers the best engagement and results.",
    image: "/images/abtesting.png",
    style: "lg:col-span-2", // Wide
  },
  {
    title: "CI/CD Pipeline",
    description:
      "We implement CI/CD pipelines for quick updates and fewer errors, keeping code fresh and reliable.",
    image: "/images/cicd.png",
  },
  {
    title: "Manual & Automated Testing",
    description:
      "We employ both Manual and Automated Testing to ensure top quality and bug-free releases.",
    image: "/images/testing.png",
  },
  {
    title: "Continuous Monitoring",
    description:
      "We maintain continuous monitoring and feedback loops for constant improvement and reliability.",
    image: "/images/monitoring.png",
  },
];

export default function Methodologies() {
  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto rounded-2xl mt-6">
      <div className="max-w-7xl mx-auto  text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Development Methodologies
          </span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          We follow a lean, agile-driven approach to deliver high-quality
          software quickly. Every step ensures flexibility, innovation, and
          measurable impact.
        </p>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(250px,auto)] gap-6">
          {methodologies.map((item, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-start transition transform hover:-translate-y-2 hover:shadow-2xl ${item.style}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#ED4C22] to-[#2B2D2C] mx-auto">
                <div className="relative w-8 h-8">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#2B2D2C] mb-3 group-hover:text-[#ED4C22] transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
