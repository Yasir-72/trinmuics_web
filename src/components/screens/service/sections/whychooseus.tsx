"use client";

import Image from "next/image";

const whyChooseUs = [
  {
    title: "Access to a Team of Experts",
    description:
      "By partnering with us, you gain direct access to a dedicated professional social app development team. Our developers, designers, and consultants craft secure, user-friendly, and scalable fintech apps tailored to your needs, ensuring a standout product.",
    image: "/images/team-experts.png",
  },
  {
    title: "100% Transparency",
    description:
      "We prioritize open communication, keeping you informed at every stage of development. Through detailed reports, video calls, we ensure your ideas and concerns are addressed, maintaining complete transparency throughout the project.",
    image: "/images/transparency.png",
  },
  {
    title: "Lean Development Process",
    description:
      "Using Lean methodology, we focus on efficiency and adaptability. This approach allows us to deliver high-performance apps quickly while meeting user needs and financial industry standards.",
    image: "/images/lean-process.png",
  },
  {
    title: "End-to-End Support",
    description:
      "From concept to deployment and beyond, our development service provides full lifecycle support. We ensure your social media application meets regulations, performs optimally, and evolves with market demands for lasting success.",
    image: "/images/support.png",
  },
  {
    title: "User Analytics Configuration",
    description:
      "We integrate advanced user analytics to track performance and behaviors, providing insights for data-driven decisions, feature refinement, and enhanced user engagement.",
    image: "/images/analytics.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white  mt-3">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Why Choose{" "}
            <span className="text-purple-600">Trinumics</span>
            <br />
            as Your App Development Company?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our position as a trusted app development company ensures your
            business stands out with secure, scalable, and user-friendly
            applications.
          </p>
        </div>

        {/* First Row - 2 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
          {whyChooseUs.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="bg-purple-50 rounded-2xl shadow-md p-8 hover:shadow-lg hover:bg-purple-100 transition duration-300"
            >
              <div className="w-16 h-16 mb-6 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 items in one line */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {whyChooseUs.slice(2).map((item, index) => (
            <div
              key={index}
              className="bg-purple-50 rounded-2xl shadow-md p-8 hover:shadow-lg hover:bg-purple-100 transition duration-300"
            >
              <div className="w-16 h-16 mb-6 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
