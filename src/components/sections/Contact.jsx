import React from "react";

const Contact = () => (
  <section className="py-16 bg-neutral-light">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-[#1A7B7B] rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              Get more discount<br />
              Off your order
            </h2>
            <p className="mb-6 text-sm">Join our mailing list</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded text-neutral-dark text-sm focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded bg-[#C9A56B] text-white font-medium hover:bg-[#B8945A] transition whitespace-nowrap"
              >
                Shop Now
              </button>
            </form>
          </div>
          <div className="flex-1 flex justify-center items-center p-8">
            <img
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop"
              alt="Lamp"
              className="w-full max-w-[250px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
