// sections/Methodologies.tsx
import Image from "next/image";

const methodologies = [
  {
    title: "Idea Validation",
    description:
      "We validate your product ideas early with market research, competitor analysis, and quick prototyping.",
    image: "/images/idea.png",
  },
  {
    title: "UX Research",
    description:
      "We perform deep UX research to understand user behavior, pain points, and expectations for your product.",
    image: "/images/ux.png",
  },
  {
    title: "MVP Development",
    description:
      "We build MVPs quickly so you can test, iterate, and raise investment faster.",
    image: "/images/mvp.png",
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
      "We love data-driven decisions, so we utilize A/B Testing. This allows us to compare different versions of a solution and identify which one delivers the best user engagement and results.",
    image: "/images/abtesting.png", // 🔑 replace with your actual icon
  },
  {
    title: "CI/CD Pipeline",
    description:
      "We implement a Continuous Integration and Continuous Deployment (CI/CD) pipeline that allows for quick updates and reduces errors, keeping your project’s code fresh and ready.",
    image: "/images/cicd.png", // 🔑 replace with your actual icon
  },
  {
    title: "Manual and Automated Testing",
    description:
      "Quality is our priority! We employ both Manual and Automated Testing. Manual testing catches usability issues, while automated tests quickly identify bugs, ensuring smooth user experience.",
    image: "/images/testing.png", // 🔑 replace with your actual icon
  },
  {
    title: "Continuous Monitoring & Feedback",
    description:
      "We maintain Continuous Monitoring & Feedback throughout development and maintenance, ensuring necessary adjustments are made and final product meets all requirements.",
    image: "/images/monitoring.png", // 🔑 replace with your actual icon
  },
];

export default function Methodologies() {
  return (
    <section className="bg-gray-50 py-16  mt-3">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Software Development Methodologies
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We follow the Lean methodology to ensure efficient custom software app
          development services. Our approach focuses on delivering value fast
          while minimizing waste. We streamline processes, respond to feedback,
          and concentrate on what truly matters to our clients.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {methodologies.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
            >
              {/* Icon / Image */}
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
