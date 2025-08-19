import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-gray-100 border-t border-gray-300 mt-14 font-sans">
      <div className="footer-container w-full">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16 rounded-t-3xl">
          <div className="mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-neutral-500">Innovate :</span> <br />
              <span className="text-white">Create ;</span> <br />
              <span className="text-neutral-500">Dominate :)</span>
            </h1>
          </div>
          <div className="flex flex-col md:mr-20 max-w-md">
            <p className="text-lg mb-6 leading-relaxed text-gray-300">
              Experience robotics like never before with Grobots.
              <br className="hidden md:block" />
              Join our community of innovators and creators to
              <br className="hidden md:block" />
              explore the future of technology together.
            </p>
            <button className="bg-button border border-gray-300 cursor-target text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 w-fit flex items-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black">
              Join Us Now
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>

        {/* Brand Name */}
        <div className="relative px-8 py-12 overflow-hidden">
          <h2 className="text-[15vw] md:text-[180px] lg:text-[250px] text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-gray-300 font-bold w-full text-center cursor-pointer relative z-10 transition-all duration-500 hover:from-teal-300 hover:to-white">
            GROBOTS
          </h2>
        </div>

        <hr className="border-gray-800" />

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-10">
          <div className="flex gap-6 mb-6 md:mb-0">
            {[
              { icon: <Facebook size={20} />, href: "https://facebook.com", color: "hover:bg-blue-500" },
              { icon: <Twitter size={20} />, href: "https://twitter.com", color: "hover:bg-blue-400" },
              { icon: <Linkedin size={20} />, href: "https://linkedin.com", color: "hover:bg-blue-600" },
              { icon: <Instagram size={20} />, href: "https://instagram.com", color: "hover:bg-pink-500" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 bg-neutral-900 rounded-full cursor-target flex items-center justify-center cursor-pointer transition-all duration-300 ${item.color} hover:scale-110 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black`}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Grobots. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
