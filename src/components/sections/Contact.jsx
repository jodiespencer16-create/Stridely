import React from "react";

const Contact = () => (
  <section id="contact" className="py-16 bg-neutral-light">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-[#1A7B7B] rounded-lg overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get more discount <br />
              Off your order
            </h2>
            <p className="mb-6 text-white/90">Join our mailing list</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-md text-neutral-dark border-none focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-md bg-[#D4A574] text-neutral-dark font-bold shadow hover:bg-[#C49564] transition whitespace-nowrap"
              >
                Shop Now
              </button>
            </form>
          </div>
          <div className="flex-1 flex justify-center items-center p-8">
            <img
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop"
              alt="Modern pendant lamp"
              className="w-full max-w-[300px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
