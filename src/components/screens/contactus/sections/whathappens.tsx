"use client";

import { MessageCircle, FileText, Cog, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Professional Consultation",
    text: (
      <>
        {"You'll"} get consulted on your particular inquiry professionally.{" "}
        <span className="font-semibold text-orange-400">Our Expert Team</span>{" "}
        works swiftly within Business Development, so all of your questions
        related to tech stack, business,{" "}
        <span className=" text-orange-400  font-medium">
          {'" is it even possible to engineer?"'}
        </span>{" "}
        type of issues will be answered in great detail, or addressed to the
        right people.
      </>
    ),
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    icon: FileText,
    title: "Swift RFX Communication",
    text: (
      <>
        Smooth RFX communication.{" "}
        <span className=" text-orange-400  font-medium">
          Our proposal will not make you wait for years
        </span>
        , we create proposals in a 96-hour timeframe, making sure your product
        went through multiple discussions and advice within Product Designers,
        Tech Leads, and Delivery Director.{" "}
        <span className="font-semibold text-orange-400">
          Our Leadership Team
        </span>{" "}
        has that covered!
      </>
    ),
    color: "from-red-500 to-pink-500",
  },
  {
    id: 3,
    icon: Cog,
    title: "Product Delivery Mastery",
    text: (
      <>
        <span className="font-semibold text-orange-400">
          Our Product Delivery Team
        </span>{" "}
        {'has a secret reputation as "Product Delivery Masterminds".'}. They can
        supervise, manage and facilitate products in the most complicated
        engineering form. Basically, they can prove,{" "}
        <span className=" text-orange-400 font-medium">
          your complex product is not complex for us at all.
        </span>
      </>
    ),
    color: "from-pink-500 to-purple-500",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Ready for Launch",
    text: (
      <>
        Finally, your product roadmap is ready 🚀. This stage involves{" "}
        <span className=" text-orange-400  font-medium">
          full alignment of business goals, timelines, and delivery milestones
        </span>
        , ensuring that your journey ahead is crystal clear and future-proof.
        Your success story begins here!
      </>
    ),
    color: "from-purple-500 to-orange-500",
  },
];

export default function SimpleProcessSteps() {

  

  return (
    <section className="relative flex justify-center py-20 px-4 sm:px-8 md:px-12 lg:px-16  bg-gradient-to-br from-gray-900 to-black   rounded-2xl max-w-screen-2xl mx-auto overflow-hidden mt-6">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            What Happens{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Next?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our streamlined 4-step process ensures your project success from
            consultation to delivery.
          </p>
        </motion.div>

        {/* Steps */}
        {/* Steps */}
        <div className="flex flex-col items-center space-y-12 w-full">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center w-full"
              >
                {/* Step icon */}
                <div className="flex flex-col items-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-orange-400">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Step content */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-8 px-3 lg:px-8 shadow-lg hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 w-full text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <div className="text-gray-300 leading-relaxed text-lg">
                    {step.text}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
