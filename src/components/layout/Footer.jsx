import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-accent pb-8">
        <div className="col-span-2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary">Stridely</h2>
          <p className="text-sm text-neutral-light/80">
            Step Up Your Game. Top sneakers, quality, and comfort.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="text-xl hover:text-accent" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <BsInstagram className="text-xl hover:text-accent" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <BsTwitterX className="text-xl hover:text-accent" />
            </a>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
          <ul>
            <li className="font-semibold mb-2">Shop</li>
            <li><a href="#" className="hover:text-accent">New Arrivals</a></li>
            <li><a href="#" className="hover:text-accent">Men</a></li>
            <li><a href="#" className="hover:text-accent">Women</a></li>
            <li><a href="#" className="hover:text-accent">Sale</a></li>
          </ul>
          <ul>
            <li className="font-semibold mb-2">About</li>
            <li><a href="#" className="hover:text-accent">Our Story</a></li>
            <li><a href="#" className="hover:text-accent">Press</a></li>
            <li><a href="#" className="hover:text-accent">Careers</a></li>
            <li><a href="#" className="hover:text-accent">Blog</a></li>
          </ul>
          <ul>
            <li className="font-semibold mb-2">Support</li>
            <li><a href="#" className="hover:text-accent">Contact</a></li>
            <li><a href="#" className="hover:text-accent">FAQs</a></li>
            <li><a href="#" className="hover:text-accent">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-accent">Accessibility</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center mt-8 text-xs text-neutral-light/60">
        <p>© {new Date().getFullYear()} Stridely. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;