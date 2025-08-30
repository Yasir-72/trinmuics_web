"use client";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div
          className="relative bg-gradient-to-r from-purple-50 to-white rounded-2xl 
          p-10 text-center md:text-left shadow-lg 
          transition duration-500 hover:shadow-2xl hover:scale-[1.01]"
        >
          {/* Content */}
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 max-w-2xl leading-snug">
              Ready to discuss <br />
              your project with us?
            </h2>
            <button
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md 
              hover:bg-purple-700 hover:shadow-purple-300/60 hover:shadow-lg
              transition-all duration-300 font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
