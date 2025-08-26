"use client";
import Image from "next/image";

export default function CaseStudies() {
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
    <section className="py-6 mt-3 px-6 md:px-10 bg-white rounded-xl">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">
        Case Studies
      </h2>

      {/* List */}
      <div className="space-y-6 overflow-y-auto pr-2">
        {caseStudies.map(({ title, description, technologies, image }, i) => (
          <div
            key={i}
            className="p-6 border border-purple-200 rounded-xl shadow-sm 
                       transition-all duration-300 hover:shadow-lg hover:border-purple-500"
          >
            <div className="grid gap-6 md:grid-cols-3">
              {/* Text */}
              <div className="col-span-2 space-y-10 w-3/4">
                <h3 className="text-3xl font-semibold text-purple-700">{title}</h3>
                <p className="text-md text-gray-700 leading-relaxed">
                  {description}
                </p>
                <span className="inline-block px-3 py-1 text-md font-medium text-purple-600 bg-purple-50 rounded-lg">
                  Technologies: {technologies}
                </span>
              </div>

              {/* Image */}
              <div className="flex items-center justify-center border border-purple-600 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={220}
                  height={140}
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
