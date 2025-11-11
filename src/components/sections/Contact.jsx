import React from "react";

const Contact = () => (
  <section id="contact" className="py-16 bg-gradient-to-r from-primary via-secondary to-accent">
    <div className="max-w-2xl mx-auto px-4 text-center text-neutral-light rounded-xl shadow-lg py-12">
      <h2 className="text-3xl font-bold mb-4">Stay In The Loop</h2>
      <p className="mb-6 text-neutral-light/90">
        Join our newsletter for drop alerts, exclusive offers, and sneaker insights! No spam—just pure sneaker news.
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Your email address"
          className="px-6 py-3 rounded-full text-neutral-dark w-full md:w-auto border-none bg-neutral-light focus:outline-none"
          required
        />
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-accent text-neutral-dark font-bold shadow hover:bg-secondary transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  </section>
);

export default Contact;