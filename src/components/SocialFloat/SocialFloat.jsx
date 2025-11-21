import React from "react";
import style from "./SocialFloat.module.css";
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";

function SocialFloat() {
  return (
    <div className={style.float_container}>

      <a
        href="https://wa.me/+919561666568"
        target="_blank"
        rel="noopener noreferrer"
        className={`${style.float_icon} ${style.whatsapp}`}
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+919561666568"
        className={`${style.float_icon} ${style.phone}`}
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://www.instagram.com/khadim_engineering_works/"
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
