import React from "react";
import heroShoeImg from "../../assets/images/hero-sneaker.webp";

const Hero = () => (
    <section className="w-full bg-gradient-to-r from-primary via-secondary to-accent">
    <div className="max-w-7xl mx-auto py-20 px-4 flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-light mb-6 leading-tight">
          Unleash Your Style. <br />
          <span className="text-accent">Shop the Latest Sneakers</span>
        </h1>
        <p className="text-neutral-light/90 text-lg mb-8">
          Level up your collection with Stridely Kicks. Discover fresh drops, timeless classics, and game-changing comfort for every step.
        </p>
        <a
          href="#features"
          className="inline-block px-10 py-4 rounded-full bg-accent text-neutral-dark font-semibold shadow hover:bg-secondary transition-colors"
        >
          View Collection
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={heroShoeImg}
          alt="Featured sneaker"
          className="rounded-xl w-full max-w-[500px] shadow-2xl object-cover h-[350px]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Hero;