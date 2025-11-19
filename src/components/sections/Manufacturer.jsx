import React from "react";

const Manufacturer = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            The Best Furniture Manufacturer <br />
            of Your Choice
          </h2>
          <p className="text-neutral-dark/70 leading-relaxed">
            Furnitre power is a software as services for multipurpose business management system, especially for them who are running two or more business explore the future.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&h=400&fit=crop"
            alt="Modern kitchen with white cabinets"
            className="rounded-lg w-full object-cover h-[350px] shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Manufacturer;
