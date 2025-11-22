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
            <li><Link to="/gallery">↠ Gallery</Link></li>
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
      <div className={style.mapContainer}>
        <iframe
          title="Shop Location - Khadim Engineering Works"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d121337.6116183482!2d76.67442545567587!3d18.12700807947977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcf6dd69b7a908f%3A0xd8afbcd2b80550bf!2sBidar%20Road%2C%20opposite%20Terna%20Colony%2C%20Gandhi%20Nagar%2C%20Nilanga%2C%20Nilanga%20Rural%2C%20Maharashtra%20413521!3m2!1d18.1270256!2d76.7568272!5e0!3m2!1sen!2sin!4v1763641763254!5m2!1sen!2sin"
          className={style.mapIframe}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

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
