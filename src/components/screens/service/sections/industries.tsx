"use client";

import Image from "next/image";

const industries = [
  {
    title: "Healthcare",
    description:
      "We design robust and intuitive health apps that enhance patient care and streamline healthcare administration. From telehealth solutions to exercise tracking and appointment booking apps, our products adhere to industry guidelines such as HIPAA, ensuring that your data remains private and secure.",
    image: "/industries/healthcare.png",
  },
  {
    title: "Marketplaces",
    description:
      "Whether for multivendor shopping platforms or niche service markets, we ensure smooth navigation, secure payments, and an engaging user experience. Our features include geolocation, push notifications, and in-app purchases to help businesses attract and retain users.",
    image: "/industries/marketplace.png",
  },
  {
    title: "Fintech",
    description:
      "Our fintech applications simplify and secure financial transactions. From e-wallets and mobile banking to investment management, we build fast and intuitive solutions that incorporate NFC, Google Pay integration, and end-to-end encryption for seamless payments.",
    image: "/industries/fintech.png",
  },
  {
    title: "IoT Apps",
    description:
      "The Internet of Things (IoT) is changing the way we interact with devices, including wearables and home integrations, as well as industrial applications. Our custom software application development services utilize technologies such as Bluetooth and Wi-Fi connectivity, along with real-time monitoring, to maximize the value of your IoT applications.",
    image: "/industries/iot.png",
  },
  {
    title: "AI Development",
    description:
      "We create powerful AI-driven applications that automate processes, analyze large data sets, and provide intelligent recommendations. As a development services company, our offerings range from chatbots and voice assistants to predictive analytics and personalized suggestions.",
    image: "/industries/ai.png",
  },
  {
    title: "Social",
    description:
      "We develop dynamic social platforms that foster engagement and seamless interactions. From content-sharing applications and social networks to dating and community platforms, we integrate features such as instant messaging, live streaming, smart recommendations, and personalized feeds.",
    image: "/industries/social.png",
  },
];

export default function Industries() {
  return (
    <section className="py-16 bg-white text-gray-900  mt-3">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-purple-700">
            Industries We Work With
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At You are launched, we specialize in providing custom solutions
            across a variety of industries, helping businesses unlock their full
            potential through innovative technology.
          </p>
        </div>

        {/* Grid (2 per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 border border-purple-200 
              transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-600"
            >
              <div className="w-full h-48 relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">
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
