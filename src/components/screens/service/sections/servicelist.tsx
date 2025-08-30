// sections/ServiceList.tsx
import Image from "next/image";

const services = [
  {
    title: "iOS App Development",
    description:
      "We create smart, high-performing iOS apps that adhere to Apple’s best practices. Whether it’s a native iPhone app, an iPad or Apple TV solution, or an application for Apple Watch and IoT devices, we ensure security, usability, and speed across the entire Apple ecosystem.",
    image: "/images/ios.png",
  },
  {
    title: "Android App Development",
    description:
      "Our Android apps are optimized for performance across various devices. Moreover, we offer cross-platform solutions that work smoothly on both iOS and Android. We deliver scalable, feature-rich applications that run flawlessly on the latest Android versions.",
    image: "/images/android.png",
  },
  {
    title: "Web Development",
    description:
      "From landing pages to enterprise applications, we design and build fast, secure, and scalable web platforms tailored to your business goals.",
    image: "/images/web.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX experts design intuitive, user-friendly interfaces that make digital products engaging and effortless to use.",
    image: "/images/uiux.png",
  },
  {
    title: "Startup Services",
    description:
      "We help startups launch faster with strategic consulting, MVP creation, and end-to-end development services.",
    image: "/images/startup.png",
  },
  {
    title: "MVP Development",
    description:
      "Validate your idea quickly with our MVP development services. Get a working product to test the market and attract investors.",
    image: "/images/mvp.png",
  },
];

export default function ServiceList() {
  return (
    <section className="bg-white py-16  mt-3">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-purple-700 text-center mb-6">
          Complex Custom Software Development Services
        </h2>
        <p className="text-gray-600 max-w-2xl text-center mx-auto mb-12">
          We deliver complex custom software development services that meet the
          real needs of startups and growing businesses. Choose the right
          solution, rely on our expertise, and watch your project launch
          effortlessly.
        </p>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start md:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
