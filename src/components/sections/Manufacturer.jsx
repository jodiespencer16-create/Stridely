import React from "react";

const Manufacturer = () => (
  <section className="py-12 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 order-2 lg:order-1">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-dark mb-3">
            The Best Furniture<br />
            Manufacturer of Your Choice
          </h2>
          <p className="text-neutral-dark/60 text-xs leading-relaxed">
            Furnitre power is a software as services for multipurpose business management system, especially for them who are running two or more business explore the future.
          </p>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=400&h=300&fit=crop"
            alt="Kitchen"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Manufacturer;
