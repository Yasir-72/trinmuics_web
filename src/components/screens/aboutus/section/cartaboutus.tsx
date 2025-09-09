"use client";

import { Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const cards: CardProps[] = [
  {
    icon: <Target className="text-blue-800 w-6 h-6 sm:w-7 sm:h-7" />, // Icon scales
    title: "Our Mission",
    text: "To craft innovative, scalable, and reliable digital solutions that empower businesses to grow smarter, operate faster, and compete stronger in the digital era.",
  },
  {
    icon: <Lightbulb className="text-blue-800 w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Our Vision",
    text: "To become a trusted global partner for next-generation technology — shaping the future of businesses through creativity, innovation, and human-centered solutions.",
  },
];

function InfoCard({ icon, title, text }: CardProps) {
  return (
    <motion.div
      className="bg-white shadow-md rounded-2xl p-6 sm:p-8 text-center border border-blue-100 
                 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-800">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 italic">{text}</p>
    </motion.div>
  );
}

export default function CartAboutUs() {
  return (
    <section className="py-12 sm:py-20 my-8 sm:my-16 bg-gray-50 rounded-2xl">
      <div
        className="
          max-w-6xl mx-auto 
          grid grid-cols-1 md:grid-cols-2 
          gap-6 sm:gap-10 px-4 sm:px-6 lg:px-10 xl:px-16
        "
      >
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
}
