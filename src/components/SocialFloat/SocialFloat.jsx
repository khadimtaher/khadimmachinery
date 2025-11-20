import React from "react";
import style from "./SocialFloat.module.css";
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";

function SocialFloat() {
  return (
    <div className={style.float_container}>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className={`${style.float_icon} ${style.whatsapp}`}
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+91956166656"
        className={`${style.float_icon} ${style.phone}`}
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${style.float_icon} ${style.instagram}`}
      >
        <FaInstagram />
      </a>

    </div>
  );
}

export default SocialFloat;
