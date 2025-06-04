import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_dark} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://www.instagram.com/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={25} />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+52-111-111-1111</li>
            <li>contact@fooddelivery.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {new Date().getFullYear()} © binaryedge.com – All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
