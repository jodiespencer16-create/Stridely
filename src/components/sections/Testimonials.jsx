import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark text-center mb-12">
        What People Are Saying About Us
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 bg-neutral-light rounded-lg p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              alt="Josh Smith"
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="font-bold text-neutral-dark">Josh Smith</p>
              <p className="text-neutral-dark/60 text-sm">Manager of The New York Times</p>
            </div>
          </div>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-lg" />
            ))}
          </div>
          <p className="text-neutral-dark/70 leading-relaxed">
            "They are have a perfect touch for make something so professional, interest and useful for a lot of people."
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
            alt="Living room interior"
            className="rounded-lg w-full object-cover h-[350px] shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
