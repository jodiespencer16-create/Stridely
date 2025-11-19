import React from "react";

const categories = [
  { name: "Bed", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=150&h=150&fit=crop" },
  { name: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&h=150&fit=crop" },
  { name: "Chair", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=150&h=150&fit=crop" },
  { name: "Lamp", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150&h=150&fit=crop" },
];

const Features = () => (
  <section className="py-12 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex items-center gap-8">
        <div className="flex-shrink-0">
          <h2 className="text-2xl font-bold text-neutral-dark mb-1">
            New In<br />
            Store Now
          </h2>
          <p className="text-neutral-dark/60 text-xs">
            Get the latest items immediately<br />with promo prices
          </p>
        </div>
        <div className="flex gap-3 flex-1">
          {categories.map((category, idx) => (
            <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg flex-1">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2">
                <p className="text-white text-sm font-bold">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
