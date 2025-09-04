import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand / About */}
          <div>
            <h2 className="text-xl font-bold text-white">Everest • Resilivia</h2>
            <p className="mt-3 text-sm text-gray-400">
              Providing trusted information, prescribing guidance, and resources
              to support healthcare and patients worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/everest" className="hover:text-white">
                  About Everest
                </a>
              </li>
              <li>
                <a href="/resilivia" className="hover:text-white">
                  About Resiliva
                </a>
              </li>
              <li>
                <a href="/pi" className="hover:text-white">
                  Prescribing Information
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-3 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 hover:bg-blue-600"
              >
                <Facebook className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 hover:bg-sky-500"
              >
                <Twitter className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 hover:bg-blue-700"
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="mailto:info@example.com"
                className="rounded-full bg-gray-800 p-2 hover:bg-red-500"
              >
                <Mail className="h-5 w-5 text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Everest • Resilivia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
