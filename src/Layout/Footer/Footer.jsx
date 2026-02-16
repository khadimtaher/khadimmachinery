import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import style from "../Footer/Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { path: "/services", name: "↠ All Services" },
    { path: "/services/submersible", name: "↠ Submersible Motor Repair" },
    { path: "/services/monoblock", name: "↠ Monoblock Motor Repair" },
    { path: "/services/home-motors", name: "↠ Domestic Water Pump" },
    { path: "/services/generator", name: "↠ Generator Repair" },
    { path: "/services/engine", name: "↠ Engine Servicing" },
  ];

  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>

        {/* Logo + Description */}
        <div className={style.footerLeft}>
          <img className={style.logo} src="logo.png" alt="logo" />
          <p className={style.desc}>
            Expert in water pump repair, pipe threading, generator repair,
            engine servicing and rental services.
          </p>
        </div>

        {/* Quick Links */}
        <div className={style.footerBox}>
          <h3 className={style.sectionTitle}>Quick Links</h3>
          <ul className={style.footerLinks}>
            <li><Link to="/">↠ Home</Link></li>
            <li><Link to="/about">↠ About</Link></li>
            <li><Link to="/services">↠ Services</Link></li>
            <li><Link to="/contact">↠ Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className={style.footerBox}>
          <h3 className={style.sectionTitle}>Our Services</h3>
          <ul className={style.footerLinks}>
            {services.map((service) => (
              <li key={service.path}>
                <Link to={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={style.footerBox}>
          <h3 className={style.sectionTitle}>Contact Info</h3>
          <p className={style.contactText}>
            Terna Colony Opposite, Bidar Road,<br />
            TQ Nilanga, Dist Latur, India
          </p>
          <p className={style.contactText}> <IoCallOutline className={style.contactIcons}/> +91 9561666568</p>
          <p className={style.contactText}> <IoCallOutline  className={style.contactIcons}/> +91 8855965998</p>
        </div>

        {/* Social Icons */}
        <div className={style.footerRight}>
          <h3 className={style.sectionTitle}>Follow Us</h3>
          <div className={style.socialIcons}>
            <a href="https://wa.me/919561666568" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/khadim_engineering_works/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="tel:+919561666568" rel="noopener noreferrer">
              <IoCallOutline />
            </a>
          </div>
        </div>
      </div>

      {/* Google Map */}
<iframe
  title="Khadim Engineering Works Location"
  src="https://www.google.com/maps?q=Khadim+Engineering+Works+Nilanga+Maharashtra+413521&z=15&output=embed"
  className={style.mapIframe}
  loading="lazy"
  allowFullScreen
></iframe>


      {/* Copyright */}
      <div className={style.copyRight}>
        <p>© {currentYear} Khadim Engineering Works | All Rights Reserved</p>
        <div className={style.terms}>

        <p> 
        <Link to="/privacy">Privacy & Policy</Link>

        </p>
        <p>
        <Link to="/terms">Terms & Condition</Link>

        </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
