"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Play,
  Building,
  Globe,
  Target,
  Heart,
} from "lucide-react";

const floatingElements = [
  { icon: Sparkles, delay: 0, x: "10%", y: "20%" },
  { icon: Zap, delay: 1000, x: "80%", y: "15%" },
  { icon: Shield, delay: 2000, x: "85%", y: "70%" },
  { icon: TrendingUp, delay: 1500, x: "15%", y: "80%" },
];

const keyValues = [
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering exceptional quality in every project",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Building lasting partnerships with transparency",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Creating meaningful change that drives growth",
    color: "from-pink-500 to-purple-500",
  },
];

const stats = [
  { number: "500+", label: "Projects Delivered", icon: Building },
  { number: "50+", label: "Global Clients", icon: Globe },
  { number: "99%", label: "Client Satisfaction", icon: Award },
  { number: "24/7", label: "Support Available", icon: Users },
];

export default function TrinumicsWhoWeAre() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [playVideo, setPlayVideo] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 to-black  rounded-2xl max-w-screen-2xl mx-auto overflow-hidden mt-6 "
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <div
            key={index}
            className={`absolute w-8 h-8 text-orange-400/30 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: element.x,
              top: element.y,
              animationDelay: `${element.delay}ms`,
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
            }}
          >
            <IconComponent
              className="w-full h-full animate-bounce"
              style={{ animationDelay: `${element.delay}ms` }}
            />
          </div>
        );
      })}

      {/* Main Content Container - Centered Vertical Layout */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-16">
          {/* Header Section */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
              <span className="text-orange-300 font-semibold tracking-wide">
                WHO WE ARE
              </span>
              
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              The Story Behind{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Trinumics
                </span>
                
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </h1>
          </div>

          {/* Description Section */}
          <div
            className={`text-center max-w-4xl transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
              <p className="text-xl">
                At <strong className="text-orange-400">Trinumics</strong>, we
                are more than just an IT company — we're{" "}
                <span className="text-white font-semibold">
                  innovators, problem-solvers, and partners in growth.
                </span>
              </p>

              <p>
                Founded with a mission to{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-semibold">
                  bridge businesses and technology seamlessly
                </span>
                , we've evolved into a trusted name in delivering{" "}
                <strong className="text-white">
                  secure, scalable, and future-ready digital solutions.
                </strong>
              </p>

              <p>
                From startups to global enterprises, our journey has been built
                on{" "}
                <span className="text-orange-400 font-semibold">
                  excellence, trust, and impact
                </span>{" "}
                — helping clients navigate the digital era with confidence.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`w-full transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* 3D Card Effect */}
              <div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform transition-transform duration-300 hover:scale-105"
                style={{
                  transform: `perspective(1000px) rotateX(${
                    mousePosition.y * 0.1
                  }deg) rotateY(${mousePosition.x * 0.1}deg) scale(1.02)`,
                }}
              >
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50" />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div
                          key={index}
                          className={`text-center transition-all duration-500 ${
                            isVisible
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-5"
                          }`}
                          style={{ transitionDelay: `${index * 100 + 800}ms` }}
                        >
                          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 mb-3 backdrop-blur-sm border border-orange-500/30">
                            <IconComponent className="w-10 h-10 text-orange-400 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-white mb-2">
                              {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Innovation Showcase */}
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-white font-bold text-2xl">
                          Innovation-Driven
                        </h3>
                        <p className="text-gray-400">
                          Cutting-edge solutions for tomorrow
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        "AI & Machine Learning",
                        "Cloud-Native Architecture",
                        "Blockchain Integration",
                      ].map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center gap-3 bg-white/5 rounded-xl p-4"
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                          <span className="text-gray-300 font-medium">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div
            className={`transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-3 text-lg">
                Discover Our Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => setPlayVideo(true)}
                className="group bg-transparent border-2 border-orange-500/50 text-orange-400 px-10 py-5 rounded-2xl font-semibold hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                <Play className="w-6 h-6" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {playVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl w-full">
            <button
              onClick={() => setPlayVideo(false)}
              className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors duration-200"
            >
              <span className="text-2xl">×</span>
            </button>
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
              <Play className="w-16 h-16 text-orange-400" />
              <span className="text-white ml-4 text-xl">Video Coming Soon</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
