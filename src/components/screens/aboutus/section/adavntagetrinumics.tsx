"use client";

import { useState, useEffect, useRef } from "react";
import {
  Lightbulb,
  Users,
  Shield,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function AdvantageTrinumics() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const differentiators = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Cutting-edge technology solutions that keep you ahead of the competition and future-ready.",
      stats: "50+ Advanced Tech",
      color: "from-yellow-500 to-orange-500",
      features: ["AI Integration", "Blockchain", "IoT Solutions", "AR/VR"],
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "We listen, understand, and deliver solutions perfectly tailored to your specific business goals.",
      stats: "98% Client Retention",
      color: "from-blue-500 to-purple-500",
      features: [
        "Custom Solutions",
        "24/7 Support",
        "Dedicated Teams",
        "Agile Process",
      ],
    },
    {
      icon: Shield,
      title: "Scalable & Secure",
      description:
        "Systems built to grow with your business while maintaining the highest security standards.",
      stats: "99.9% Security Rate",
      color: "from-green-500 to-teal-500",
      features: ["Auto-scaling", "Data Encryption", "Compliance", "Monitoring"],
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description:
        "Trusted by startups and enterprises across industries with a track record of successful deliveries.",
      stats: "500+ Projects Done",
      color: "from-orange-500 to-red-500",
      features: [
        "Industry Awards",
        "Expert Team",
        "Quality Assurance",
        "On-time Delivery",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 to-black  rounded-2xl max-w-screen-2xl mx-auto overflow-hidden mt-6 "
    >
      {/* Floating Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-semibold">
              WHY CHOOSE TRINUMICS
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            What Makes Us{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Different
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choosing Trinumics means choosing a partner who values innovation,
            transparency, and your success above all else.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(null)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`}
                />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {item.stats}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Success Metric
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div
                    className={`flex items-center gap-2 text-orange-400 font-medium transition-all duration-300 ${
                      hoveredCard === index ? "gap-4" : "gap-2"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-400">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  ISO
                </div>
                <div className="text-gray-400">Certified Quality</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">5★</div>
                <div className="text-gray-400">Client Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  99%
                </div>
                <div className="text-gray-400">Project Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
