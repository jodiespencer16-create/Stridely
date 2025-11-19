import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-neutral-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <span className="text-lg font-bold">WeCan</span>
          </div>
          <p className="text-sm text-neutral-light/70 mb-4">
            Optima is the world's leading community for creatives to share, grow, and get hired.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-[#1A7B7B] transition">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#1A7B7B] transition">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#1A7B7B] transition">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#1A7B7B] transition">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-white">Our Products</h3>
          <ul className="space-y-2 text-sm text-neutral-light/70">
            <li><a href="#" className="hover:text-white transition">The Support Suite</a></li>
            <li><a href="#" className="hover:text-white transition">The Sales Suite</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
            <li><a href="#" className="hover:text-white transition">Guide</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Top Features</h3>
          <ul className="space-y-2 text-sm text-neutral-light/70">
            <li><a href="#" className="hover:text-white transition">Ticketing System</a></li>
            <li><a href="#" className="hover:text-white transition">Knowledge Base</a></li>
            <li><a href="#" className="hover:text-white transition">Community Forums</a></li>
            <li><a href="#" className="hover:text-white transition">Help Desk Software</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2 text-sm text-neutral-light/70">
            <li><a href="#" className="hover:text-white transition">Product Support</a></li>
            <li><a href="#" className="hover:text-white transition">Request Demo</a></li>
            <li><a href="#" className="hover:text-white transition">Library</a></li>
            <li><a href="#" className="hover:text-white transition">Peoplepower Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-sm text-neutral-light/70">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
            <li><a href="#" className="hover:text-white transition">Investors</a></li>
            <li><a href="#" className="hover:text-white transition">Events</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Favourite Things</h3>
          <ul className="space-y-2 text-sm text-neutral-light/70">
            <li><a href="#" className="hover:text-white transition">For Enterprise</a></li>
            <li><a href="#" className="hover:text-white transition">For Startups</a></li>
            <li><a href="#" className="hover:text-white transition">For Benchmark</a></li>
            <li><a href="#" className="hover:text-white transition">For Small Business</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-neutral-light/20">
        <div className="text-center text-xs text-neutral-light/60">
          <p>© Copyright 2021. Localio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
