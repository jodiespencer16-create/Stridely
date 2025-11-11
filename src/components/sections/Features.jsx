import React from "react";
import { FaRunning, FaStar, FaGift } from "react-icons/fa";

const featuresData = [
  {
    icon: <FaRunning className="text-3xl text-accent" />,
    title: "Sport & Performance",
    description: "Gear up with the latest athletic sneakers engineered for speed, comfort, and style.",
  },
  {
    icon: <FaStar className="text-3xl text-accent" />,
    title: "Limited Editions",
    description: "Grab unique drops and rare colorways—stand out with one-of-a-kind designs.",
  },
  {
    icon: <FaGift className="text-3xl text-accent" />,
    title: "Everyday Classics",
    description: "Shop iconic kicks and everyday shoes with signature comfort and timeless looks.",
  },
];

const Features = () => (
  <section id="features" className="py-16 bg-neutral-light">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark text-center mb-10">
        Why Shop With Stridely Kicks?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center transition hover:-translate-y-2 hover:shadow-xl"
          >
            {feature.icon}
            <h3 className="mt-6 text-xl font-semibold text-primary mb-3">{feature.title}</h3>
            <p className="text-neutral-dark/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;