import React from "react";

const categories = [
  { name: "Bed", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=250&h=250&fit=crop" },
  { name: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=250&h=250&fit=crop" },
  { name: "Chair", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=250&h=250&fit=crop" },
  { name: "Lamp", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=250&h=250&fit=crop" },
];

const Features = () => (
  <section className="py-12 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-neutral-dark mb-1">
          New In<br />
          Store Now
        </h2>
        <p className="text-neutral-dark/60 text-xs">
          Get the latest items immediately with promo prices
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category, idx) => (
          <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-white text-base font-bold">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
