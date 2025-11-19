import React from "react";

const About = () => (
  <section className="py-12 bg-[#F5F5F5]">
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 order-1">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
            alt="Living room"
            className="rounded-lg w-full object-cover"
          />
        </div>
        <div className="flex-1 order-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-dark mb-3">
            We Create Your Home<br />
            More Aesthetic
          </h2>
          <p className="text-neutral-dark/60 text-xs mb-4 leading-relaxed">
            Furnitre power is a software as services for multipurpose business management system, especially for them who are running two or more business explore the future.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 rounded-full bg-[#1A7B7B] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-neutral-dark text-xs">Valuation Services</p>
                <p className="text-neutral-dark/60 text-xs mt-0.5">Sometimes features require a short description. This can be detailed or just a short text.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 rounded-full bg-[#1A7B7B] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-neutral-dark text-xs">Development of Furniture Models</p>
                <p className="text-neutral-dark/60 text-xs mt-0.5">Sometimes features require a short description. This can be detailed or just a short text.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
