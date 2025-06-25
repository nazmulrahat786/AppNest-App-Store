import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-black bg-white-100    py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-primary mb-4">AppNest</h2>
            <p className="text-lg mb-6">
              Discover the best apps with ease. Stay up-to-date and find your next favorite app.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a href="#" className="hover:text-primary-300 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-primary-300 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-primary-300 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-primary-300 transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-primary-300 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary-300 transition">Careers</a></li>
              <li><a href="#" className="hover:text-primary-300 transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Legal & Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-300 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-300 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-300 transition">Developer Resources</a></li>
              <li><a href="#" className="hover:text-primary-300 transition">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} AppNest — All rights reserved.</p>
          <p className="text-sm opacity-75 mt-2">Made with ❤️ by the AppNest Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
