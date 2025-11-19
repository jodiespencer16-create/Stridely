import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => (
  <section id="about" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
            alt="Modern living room with sofa"
            className="rounded-lg w-full object-cover h-[400px] shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            We Create Your Home <br />
            More Aesthetic
          </h2>
          <p className="text-neutral-dark/70 mb-6 leading-relaxed">
            Furniture power is a software as services for multipurpose business management system, especially for them who are running two or more business explore the future.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#1A7B7B] text-xl mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-neutral-dark">Valuation Services</p>
                <p className="text-neutral-dark/60 text-sm">Sometimes features require a short description. This can be detailed or just a short text.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#1A7B7B] text-xl mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-neutral-dark">Development of Furniture Models</p>
                <p className="text-neutral-dark/60 text-sm">Sometimes features require a short description. This can be detailed or just a short text.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
