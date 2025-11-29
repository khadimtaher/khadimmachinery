import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import styles from "./Navbar.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import CustomLanguageDropdown from "../../components/CustomLanguageDropdown/CustomLanguageDropdown";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
 

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setShowDropdown(false);
  };


  const navLinkStyle = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.activeLink : ""}`;

  return (
    <>
    <nav className={`${styles.navbar} ${navbarBg ? styles.scrolled : ""}`}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.logoSection}>
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Menu Links */}
        <ul className={`${styles.links} ${isOpen ? styles.active : ""}`}>
          <div className={styles.mobileOverlay} onClick={closeMenu}></div>

          <li><NavLink to="/" className={navLinkStyle} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkStyle} onClick={closeMenu}>About</NavLink></li>

          {/* Dropdown */}
          <li className={styles.dropdown}>
            <button
              className={styles.dropdownToggle}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Services <MdKeyboardArrowDown className={`${styles.arrow} ${showDropdown ? styles.rotate : ""}`} />
            </button>

            <ul className={`${styles.dropdownMenu} ${showDropdown ? styles.showMobile : ""}`}>
              {services.map((s) => (
                <li key={s.path}>
                  <NavLink to={s.path} className={styles.dropdownLink} onClick={closeMenu}>
                    {s.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li><NavLink to="/contact" className={navLinkStyle} onClick={closeMenu}>Contact</NavLink></li>
          <div className={styles.phoneGroup}>
            <a href="tel:+919561666568" className={styles.phoneLink}>
              <FiPhone className={styles.linkIcon} /> +91 95616 66568
            </a>
            <a href="tel:+918855965998" className={styles.phoneLink}>
              <FiPhone className={styles.linkIcon}/> +91 88559 65998
            </a>
          </div>

          <li className={styles.languageSelector}>
            {/* <GoogleTranslate/> */}
            <CustomLanguageDropdown/>
          </li>
         <li>

</li>
</ul>

        {/* Hamburger */}
        <div className={`${styles.hamburger} ${isOpen ? styles.activeHamburger : ""}`} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
    

    </>
  );
}

const services = [
  { path: "/services", name: "All Services" },
  { path: "/services/submersible", name: "Submersible Motor Repair & Rewinding" },
  { path: "/services/monoblock", name: "Monoblock Motor Repair & Rewinding" },
  { path: "/services/home-motors", name: "Domestic Water Pump (Home Motor)" },
  { path: "/services/generator", name: "Generator Repair & Maintenance" },
  { path: "/services/engine", name: "Engine Servicing & Overhaul" },
];

export default Navbar;
