import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { i18n } = useTranslation();

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setNavbarBg(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setShowDropdown(false);
  };

  // Google translate init
 useEffect(() => {
  const addScript = () => {
    if (!window.google || !window.google.translate) return;
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi,mr,te,ur",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  const interval = setInterval(() => {
    if (window.google && window.google.translate) {
      addScript();
      clearInterval(interval);
    }
  }, 500);

  return () => clearInterval(interval);
}, []);


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
        
          <li className={styles.languageSelector}>
            <div id="google_translate_element"></div>
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
