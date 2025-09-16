import React from "react";
import {
  ChevronRight,
  Sparkles,
  Rocket,
  Palette,
  Code,
  Smartphone,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "iOS App Development",
    description:
      "We create smart, high-performing iOS apps that adhere to Apple's best practices. Whether it's a native iPhone app, an iPad or Apple TV solution, or an application for Apple Watch and IoT devices, we ensure security, usability, and speed across the entire Apple ecosystem.",
    icon: <Smartphone className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Android App Development",
    description:
      "Our Android apps are optimized for performance across various devices. Moreover, we offer cross-platform solutions that work smoothly on both iOS and Android. We deliver scalable, feature-rich applications that run flawlessly on the latest Android versions.",
    icon: <Smartphone className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Web Development",
    description:
      "From landing pages to enterprise applications, we design and build fast, secure, and scalable web platforms tailored to your business goals.",
    icon: <Globe className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX experts design intuitive, user-friendly interfaces that make digital products engaging and effortless to use.",
    icon: <Palette className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Startup Services",
    description:
      "We help startups launch faster with strategic consulting, MVP creation, and end-to-end development services.",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    title: "MVP Development",
    description:
      "Validate your idea quickly with our MVP development services. Get a working product to test the market and attract investors.",
    icon: <Sparkles className="w-8 h-8" />,
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function ServiceList() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section className=" bg-white  py-16 px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto rounded-2xl mt-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #2B2D2C 0, #2B2D2C 1px, transparent 1px, transparent 15px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            PREMIUM SERVICES
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Complex Custom Software
            <span className="block text-4xl md:text-5xl mt-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Development Services
            </span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We deliver complex custom software development services that meet
            the real needs of startups and growing businesses. Choose the right
            solution, rely on our expertise, and watch your project launch
            effortlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(null)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 h-full shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <button className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:text-red-600 transition-colors duration-300">
                    Learn More
                    <ChevronRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Hover Number Badge */}
              <div
                className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform transition-all duration-500 ${
                  hoveredIndex === index ? "scale-125 rotate-12" : "scale-100"
                }`}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-orange-500">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
