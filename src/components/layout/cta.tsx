"use client";

export default function CtaBanner() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div
          className="relative bg-gradient-to-r from-[#2B2D2C] to-[#1a1a1a] rounded-3xl 
          p-10 md:p-14 text-center md:text-left shadow-2xl 
          overflow-hidden transition duration-500 hover:shadow-orange-500/40"
        >
          {/* Decorative Accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ED4C22]/20 via-transparent to-transparent rounded-3xl"></div>

          {/* Content */}
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left Text */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
                Let’s Build Something <br />
                <span className="text-[#ED4C22]">Amazing Together</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-xl">
                We craft modern, scalable, and engaging digital solutions to
                help your business grow. Share your idea with us and let’s bring
                it to life. 🚀
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <button
                className="px-8 py-4 bg-[#ED4C22] text-white text-lg font-semibold 
                rounded-xl shadow-lg hover:shadow-orange-500/40 hover:scale-105 
                transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
