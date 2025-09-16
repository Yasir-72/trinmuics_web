"use client";

import Image from "next/image";

const industries = [
  {
    title: "Healthcare",
    description:
      "We design robust and intuitive health apps that enhance patient care and streamline healthcare administration. From telehealth solutions to exercise tracking and appointment booking apps, our products adhere to industry guidelines such as HIPAA, ensuring that your data remains private and secure.",
    image: "/industries/healthcare.png",
    accent: "orange",
    featured: true,
  },
  {
    title: "Marketplaces",
    description:
      "Whether for multivendor shopping platforms or niche service markets, we ensure smooth navigation, secure payments, and an engaging user experience. Our features include geolocation, push notifications, and in-app purchases to help businesses attract and retain users.",
    image: "/industries/marketplace.png",
    accent: "dark",
    featured: false,
  },
  {
    title: "Fintech",
    description:
      "Our fintech applications simplify and secure financial transactions. From e-wallets and mobile banking to investment management, we build fast and intuitive solutions that incorporate NFC, Google Pay integration, and end-to-end encryption for seamless payments.",
    image: "/industries/fintech.png",
    accent: "orange",
    featured: true,
  },
  {
    title: "IoT Apps",
    description:
      "The Internet of Things (IoT) is changing the way we interact with devices, including wearables and home integrations, as well as industrial applications. Our custom software application development services utilize technologies such as Bluetooth and Wi-Fi connectivity, along with real-time monitoring, to maximize the value of your IoT applications.",
    image: "/industries/iot.png",
    accent: "dark",
    featured: false,
  },
  {
    title: "AI Development",
    description:
      "We create powerful AI-driven applications that automate processes, analyze large data sets, and provide intelligent recommendations. As a development services company, our offerings range from chatbots and voice assistants to predictive analytics and personalized suggestions.",
    image: "/industries/ai.png",
    accent: "orange",
    featured: false,
  },
  {
    title: "Social",
    description:
      "We develop dynamic social platforms that foster engagement and seamless interactions. From content-sharing applications and social networks to dating and community platforms, we integrate features such as instant messaging, live streaming, smart recommendations, and personalized feeds.",
    image: "/industries/social.png",
    accent: "dark",
    featured: false,
  },
];

export default function Industries() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto rounded-2xl mt-6 bg-gradient-to-br from-gray-50 via-white to-gray-50  overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-orange-300 to-red-300 blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Magazine-Style Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-full shadow-2xl">
              Industry Expertise
            </div>
          </div>

          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Industries
            </span>{" "}
            We Transform
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto text-xl leading-relaxed font-light">
            At{" "}
            <span className="font-semibold text-gray-800">
              You are launched
            </span>
            , we specialize in providing custom solutions across diverse
            industries, helping businesses unlock their full potential through
            innovative technology and cutting-edge design.
          </p>
        </div>

        {/* Magazine-Style Asymmetric Grid */}
        <div className="max-w-7xl mx-auto">
          {/* First Row - Large Featured + Medium */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Healthcare - Large Featured Card */}
            <div className="lg:col-span-2 group">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1 text-white h-full">
                <div className="flex flex-col md:flex-row items-start gap-8 h-full">
                  <div className="w-full md:w-80 h-64 relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm flex-shrink-0">
                    <Image
                      src={industries[0].image}
                      alt={industries[0].title}
                      fill
                      className="object-contain p-6 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-4xl font-black mb-6 leading-tight">
                      {industries[0].title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      {industries[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketplaces - Medium Card */}
            <div className="lg:col-span-1 group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 text-white h-full">
                <div className="text-center h-full flex flex-col">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-4">
                    <Image
                      src={industries[1].image}
                      alt={industries[1].title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {industries[1].title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed flex-1">
                    {industries[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Medium + Large Featured */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* IoT - Medium Card */}
            <div className="lg:col-span-1 group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 border-2 border-gray-100 hover:border-gray-300 h-full">
                <div className="text-center h-full flex flex-col">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 p-4">
                    <Image
                      src={industries[3].image}
                      alt={industries[3].title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {industries[3].title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {industries[3].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Fintech - Large Featured Card */}
            <div className="lg:col-span-2 group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 text-white h-full">
                <div className="flex flex-col md:flex-row-reverse items-start gap-8 h-full">
                  <div className="w-full md:w-80 h-64 relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm flex-shrink-0">
                    <Image
                      src={industries[2].image}
                      alt={industries[2].title}
                      fill
                      className="object-contain p-6 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full">
                        Trending
                      </span>
                    </div>
                    <h3 className="text-4xl font-black mb-6 leading-tight">
                      {industries[2].title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      {industries[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row - Two Regular Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Development */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-orange-100 hover:border-orange-300 h-full">
                <div className="flex items-start gap-6 h-full">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 p-4 flex-shrink-0">
                    <Image
                      src={industries[4].image}
                      alt={industries[4].title}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-orange-600">
                      {industries[4].title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {industries[4].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-gray-200 hover:border-gray-400 h-full">
                <div className="flex items-start gap-6 h-full">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex-shrink-0">
                    <Image
                      src={industries[5].image}
                      alt={industries[5].title}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {industries[5].title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {industries[5].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
      </div>
    </section>
  );
}
