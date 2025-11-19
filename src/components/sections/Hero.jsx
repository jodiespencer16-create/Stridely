import React from "react";

const Hero = () => (
  <>
    <section className="w-full bg-neutral-dark text-neutral-light">
      <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-neutral-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <span className="text-xl font-semibold">WeCan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Creative Home <br />
            Simplify Your Furniture
          </h1>
          <p className="text-neutral-light/80 text-base mb-8 max-w-md">
            Do i have consent to record this meeting gain traction. We need to dialog around your choice of work attire cross pollination. Quick sync new economy. We need to dialog around your choice of work attire.
          </p>
          <a
            href="#shop"
            className="inline-block px-8 py-3 rounded-md bg-[#D4A574] text-neutral-dark font-semibold shadow hover:bg-[#C49564] transition-colors"
          >
            Shop Now
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
              alt="Modern yellow sofa with decorative pillows"
              className="rounded-lg w-full max-w-[550px] object-cover h-[400px]"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop"
                alt="Designer"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
              <p className="text-neutral-dark text-sm font-semibold">7 Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="w-full bg-[#1A7B7B]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <p className="text-3xl md:text-4xl font-bold mb-1">7</p>
            <p className="text-sm opacity-90">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold mb-1">2</p>
            <p className="text-sm opacity-90">Country</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold mb-1">10k+</p>
            <p className="text-sm opacity-90">Happy Customer</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold mb-1">260+</p>
            <p className="text-sm opacity-90">Furniture</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
