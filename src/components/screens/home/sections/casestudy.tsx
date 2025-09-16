"use client";
import Image from "next/image";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "E-Commerce Website",
      description:
        "Built a scalable e-commerce platform with real-time inventory, secure payments, and a modern UI/UX that improved customer engagement and boosted sales conversions.",
      technologies: "Next.js, Tailwind CSS, Node.js, MongoDB",
      image: "/images/software-hardware.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed a sleek personal portfolio with animations, responsive layouts, and SEO optimization — helping clients showcase their skills and land more opportunities.",
      technologies: "Next.js, Tailwind CSS, Framer Motion",
      image: "/images/Aboutus.jpg",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Developed a SaaS dashboard for analytics and reporting with authentication, role management, and real-time charts — empowering businesses with actionable insights.",
      technologies: "React, Next.js, Tailwind CSS, Firebase",
      image: "/images/software-hardware.png",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-[#2B2D2C] rounded-2xl mt-6 max-w-screen-2xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">Case <span className="text-[#ED4C22]">Studies</span></h2>
        <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
          Explore some of our recent projects where we combined creativity,
          technology, and strategy to deliver results that matter.
        </p>
      </div>

      {/* List */}
      <div className="space-y-10">
        {caseStudies.map(({ title, description, technologies, image }, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-[#1F2020] shadow-lg  
                       transition-all duration-300 hover:shadow-orange-500/30 hover:scale-[1.02]"
          >
            <div className="grid gap-8 md:grid-cols-2 items-center">
              {/* Text */}
              <div className="col-span-1 space-y-5">
                <h3 className="text-2xl font-semibold text-[#ED4C22]">
                  {title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {description}
                </p>
                <span
                  className="inline-block px-4 py-2 text-sm font-medium 
                                text-white bg-[#ED4C22] rounded-lg shadow-md"
                >
                  {technologies}
                </span>
              </div>

              {/* Image */}
              <div className="flex items-start justify-end rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={450}
                  height={100}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
