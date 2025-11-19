import React from "react";

const Hero = () => (
  <section className="py-8 bg-[#F5F5F5]">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-[#2B2B2B] text-white rounded-lg shadow-xl overflow-hidden">
        <div className="py-12 px-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <span className="text-lg font-semibold">WeCan</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Creative Home Simpify Your<br />
              Furniture
            </h1>
            <p className="text-white/70 text-sm mb-6 max-w-md leading-relaxed">
              Do i have consent to record this meeting gain traction. We need to dialog around your choice of work attire cross pollination. Quick sync new economy. We need to dialog around your choice of work attire.
            </p>
            <button className="px-8 py-3 rounded bg-[#C9A56B] text-white font-medium hover:bg-[#B8945A] transition">
              Shop Now
            </button>
          </div>
          <div className="flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=350&fit=crop"
              alt="Yellow sofa"
              className="rounded-lg w-full object-cover"
            />
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-[#1A7B7B] px-8 py-6">
          <div className="grid grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-2xl font-bold mb-1">7</p>
              <p className="text-xs opacity-90">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-1">2</p>
              <p className="text-xs opacity-90">Country</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-1">10k+</p>
              <p className="text-xs opacity-90">Happy Customer</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-1">260+</p>
              <p className="text-xs opacity-90">Furniture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
