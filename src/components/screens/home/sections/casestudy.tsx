"use client";
import Image from "next/image";

export default function CaseStudies() {
  // Array of case study objects
  const caseStudies = [
    {
      title: "E-Commerce Website",
      description:
        "Built a scalable e-commerce platform with real-time inventory, secure payments, and modern UI/UX.",
      technologies: "Next.js, Tailwind CSS, Node.js, MongoDB",
      image: "/case-study/ecommerce.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed a sleek personal portfolio with animations, responsive design, and SEO optimization.",
      technologies: "Next.js, Tailwind CSS, Framer Motion",
      image: "/case-study/portfolio.png",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Developed a SaaS dashboard for analytics and reporting with authentication and role management.",
      technologies: "React, Next.js, Tailwind CSS, Firebase",
      image: "/case-study/saas.png",
    },
  ];

  return (
    <section className="py-6 bg-white mt-3">
      {/* Outer Wrapper */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl border border-purple-300 p-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">
          Case Studies
        </h2>

        {/* Render Cards */}
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-white border border-purple-200 rounded-xl p-6 shadow-sm mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Text Content */}
              <div className="col-span-2 space-y-3">
                <h3 className="text-xl font-semibold text-purple-700">
                  {study.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {study.description}
                </p>
                <p className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-lg inline-block">
                  Technologies: {study.technologies}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center border border-purple-600 rounded-lg overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={220}
                  height={140}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
