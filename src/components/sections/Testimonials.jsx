import React from "react";

const Testimonials = () => (
  <section className="py-12 bg-[#F5F5F5]">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-neutral-dark mb-8">
        What People Are Saying About Us
      </h2>
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
              alt="Josh Smith"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-neutral-dark text-sm">Josh Smith</p>
              <p className="text-neutral-dark/60 text-xs">Manager of The New York Times</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <p className="text-neutral-dark/70 text-xs leading-relaxed">
            "They are have a perfect touch for make something so professional, interest and useful for a lot of people."
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
            alt="Living room"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
