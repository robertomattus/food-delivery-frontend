import React from "react";
import { assets } from "../../assets/assets";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-zinc-900 border-t border-zinc-800 mt-auto"
      id="footer"
    >
      {/* Grid principal */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-10 py-16">
        {/* Columna 1 - Branding */}
        <div className="flex flex-col gap-5">
          <img
            src={assets.logo_dark}
            alt="Logo"
            className="w-full max-w-[180px] h-auto object-contain"
          />
          <p className="text-zinc-400 text-sm leading-relaxed">
            Redefining the art of food delivery with curated culinary
            experiences and artisanal quality delivered directly to you.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:text-orange-500 transition-colors duration-200"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.instagram.com/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:text-orange-500 transition-colors duration-200"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:text-orange-500 transition-colors duration-200"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Columna 2 - Company */}
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase">
            Company
          </h4>
          <ul className="space-y-3">
            {["Home", "About Us", "Delivery", "Privacy Policy"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 - Get in touch */}
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </h4>
          <ul className="space-y-3">
            {["+52-111-111-1111", "contact@fooddelivery.com"].map((item) => (
              <li key={item} className="text-zinc-400 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4 - Newsletter */}
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase">
            Newsletter
          </h4>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Join our community for exclusive chef specials and curated menus.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-zinc-800 border-none rounded-l-lg text-white text-sm px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <button className="bg-orange-600 text-white px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-4 md:px-10 py-6 border-t border-zinc-800">
        <p className="text-zinc-500 text-center text-sm">
          Copyright {new Date().getFullYear()} © binaryedge.com – All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
