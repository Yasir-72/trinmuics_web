import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Lightbulb,
  Users,
  Rocket,
  Repeat,
  TestTube,
  GitBranch,
  Bug,
  BarChart3,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const methodologies = [
  {
    title: "Idea Validation",
    description:
      "We validate your product ideas early with market research, competitor analysis, and quick prototyping to ensure market-fit.",
    icon: Lightbulb,
    style: "lg:col-span-2",
    stats: "95% Success Rate",
    features: [
      "Market Research",
      "Competitor Analysis",
      "Rapid Prototyping",
      "User Interviews",
    ],
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "UX Research",
    description:
      "We perform deep UX research to understand user behavior, pain points, and expectations for exceptional user experiences.",
    icon: Users,
    style: "lg:row-span-2",
    stats: "500+ Users Studied",
    features: [
      "User Journey Mapping",
      "Persona Development",
      "Usability Testing",
      "Behavioral Analytics",
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "MVP Development",
    description:
      "We build MVPs quickly with core features that matter, enabling faster testing, iteration, and investment opportunities.",
    icon: Rocket,
    style: "lg:row-span-2",
    stats: "30% Faster Launch",
    features: [
      "Core Feature Focus",
      "Scalable Architecture",
      "Cloud-Ready",
      "Performance Optimized",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Agile Iterations",
    description:
      "Using Agile methodology, we deliver features in short cycles, ensuring maximum flexibility and faster results.",
    icon: Repeat,
    stats: "2-Week Sprints",
    features: [
      "Sprint Planning",
      "Daily Standups",
      "Retrospectives",
      "Continuous Feedback",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    title: "A/B Testing",
    description:
      "We utilize advanced A/B Testing frameworks to compare versions and identify optimal user engagement strategies.",
    icon: TestTube,
    style: "lg:col-span-2",
    stats: "40% Better Conversion",
    features: [
      "Split Testing",
      "Statistical Analysis",
      "User Segmentation",
      "Performance Metrics",
    ],
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "CI/CD Pipeline",
    description:
      "We implement robust CI/CD pipelines for automated deployments, faster updates, and reduced errors.",
    icon: GitBranch,
    stats: "99.9% Uptime",
    features: [
      "Automated Testing",
      "Zero Downtime",
      "Rollback Strategy",
      "Environment Sync",
    ],
    color: "from-teal-500 to-blue-600",
  },
  {
    title: "Quality Assurance",
    description:
      "We employ comprehensive Manual and Automated Testing strategies to ensure bug-free, high-quality releases.",
    icon: Bug,
    stats: "99% Bug-Free",
    features: [
      "Unit Testing",
      "Integration Tests",
      "Load Testing",
      "Security Audits",
    ],
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Performance Monitoring",
    description:
      "We maintain continuous monitoring and feedback loops for constant improvement, reliability, and optimal performance.",
    icon: BarChart3,
    stats: "24/7 Monitoring",
    features: [
      "Real-time Analytics",
      "Error Tracking",
      "Performance Metrics",
      "Alert Systems",
    ],
    color: "from-violet-500 to-purple-600",
  },
];

const stats = [
  { label: "Projects Delivered", value: "200+", icon: CheckCircle },
  { label: "Client Satisfaction", value: "98%", icon: Star },
  { label: "Avg. Time to Market", value: "45 Days", icon: Rocket },
  { label: "Code Quality Score", value: "9.8/10", icon: BarChart3 },
];

export default function EnhancedMethodologies() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto rounded-3xl mt-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-orange-500/30">
            <Rocket className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-medium">
              Our Proven Methodology
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Development{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient ">
                Excellence
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-gray-300 max-w-4xl mx-auto mb-12 text-xl leading-relaxed">
            We follow a lean, agile-driven approach that combines cutting-edge
            technology with proven methodologies. Every step is designed to
            ensure flexibility, innovation, and measurable business impact that
            drives real results.
          </p>

          {/* Stats Row */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Methodology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(300px,auto)] gap-8">
          {methodologies.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col justify-start transition-all duration-500 hover:bg-white/10 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20 ${
                  item.style
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(null)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Gradient Background */}
                  <div
                    className={`w-15 h-15 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} mx-auto shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full mb-4 border border-green-500/30">
                    <Star className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 text-sm font-medium">
                      {item.stats}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-col gap-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="inline-flex w-fit items-center gap-3 px-3 py-2 bg-[#ED4C22]/20 rounded-xl border border-[#ED4C22]/10 hover:bg-[#ED4C22]/10 hover:border-[#ED4C22]/30 transition-all duration-300"
                      >
                        <div className="w-2.5 h-2.5 bg-[#ED4C22] rounded-full flex-shrink-0"></div>
                        <span className="text-white text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div
                    className={`flex items-center gap-2 text-orange-400 font-medium cursor-pointer transition-all duration-300 ${
                      hoveredCard === index ? "gap-4" : "gap-2"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        hoveredCard === index ? "translate-x-2" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        {/* <div
          className={`text-center mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Ideas into Reality?
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Let's discuss how our proven methodologies can accelerate your
              project's success and deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-3">
                Start Your Project
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
