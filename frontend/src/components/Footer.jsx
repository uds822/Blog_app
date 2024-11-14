import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  iOS
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Design to Code</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Figma Plugin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Templates
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Comparison</h2>
            <ul className="space-y-2">
              {["DhiWise vs Anima", "DhiWise vs Appsmith", "DhiWise vs FlutterFlow", "DhiWise vs Monday Hero", "DhiWise vs Retool", "DhiWise vs Bubble", "DhiWise vs Figma Dev Mode"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-semibold text-white md:flex hidden">
            Cilli<span className="text-blue-400">Blog</span>
          </div>
          <p className="text-gray-400 text-sm md:order-none order-2 mt-4 md:mt-0">
            &copy; 2024 DhiWise PVT. LTD. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-300 md:order-last order-1 mb-4 md:mb-0">
            <a href="#" aria-label="GitHub" className="hover:text-blue-400">
              <FaGithub size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-blue-400">
              <BsYoutube size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
