import React from "react";

const Contact = () => (
  <section className="py-12 bg-[#F5F5F5]">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-[#1A7B7B] rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 p-8 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              Get more discount<br />
              Off your order
            </h2>
            <p className="mb-4 text-xs">Join our mailing list</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded text-neutral-dark text-xs focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 rounded bg-[#C9A56B] text-white text-xs font-medium hover:bg-[#B8945A] transition whitespace-nowrap"
              >
                Shop Now
              </button>
            </form>
          </div>
          <div className="flex-1 flex justify-center items-center p-6">
            <img
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop"
              alt="Lamp"
              className="w-full max-w-[180px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
