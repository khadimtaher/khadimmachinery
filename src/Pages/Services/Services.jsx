import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';
import Testimonials from "../../components/Testimonials/Testimonials"
import { 
  FaTools, 
  FaCogs, 
  FaWater,  
  FaWrench,
  FaCheckCircle,
  FaTruck,
  FaHeadset,
  FaShieldAlt,
  FaClock,
  FaStar
} from 'react-icons/fa';

import gen from "../Services/Imgs/gen.png";

// services cards img 
import img1 from "./Imgs/img1.png";
import img2 from "./Imgs/img2.png";
import img3 from "./Imgs/img3.png";
import img4 from "./Imgs/img4.png";
import img5 from "./Imgs/img5.png";

const Services = () => {
  const services = [
    { id: 1, title: "Submersible Motor Repair & Rewinding", desc: "Expert repair and rewinding of all types of submersible motors with guaranteed performance.", img: img1, link: "/services/submersible" },
    { id: 2, title: "Monoblock Pump Repair & Rewinding", desc: "Complete overhaul and rewinding of monoblock pumps for homes and agriculture.", img: img2, link: "/services/monoblock" },
    { id: 3, title: "Domestic Water Pump Repair",  desc: "Fast repair for booster, jet, centrifugal & all domestic water pumps.", img: img3, link: "/services/home-motors" },
    { id: 4, title: "Engine Repair & Overhaul",  desc: "Complete engine repair, overhaul & maintenance for generators, tractors & heavy motors.", img: img4, link: "/services/engine" },
    { id: 5, title: "Generator Rewinding",  desc: "Complete generator alternator rewinding with high-grade copper and insulation for long-lasting performance.",  img: img5, link: "/services/generator" }
  ];

  const whyChoose = [
    { icon: <FaCheckCircle />, title: "100% Genuine Parts", desc: "We use only original spare parts" },
    // { icon: <FaTruck />, title: "Free Pickup & Delivery", desc: "In Gurugram & nearby areas" },
    { icon: <FaShieldAlt />, title: "6 Months Warranty", desc: "On every repair & rewinding" },
    { icon: <FaClock />, title: "Same Day Service", desc: "Most repairs done in 24 hours" },
    { icon: <FaHeadset />, title: "24x7 Support", desc: "Call or WhatsApp anytime" },
    { icon: <FaStar />, title: "500+ Happy Customers", desc: "Trusted since 1997" }
  ];

  const processSteps = [
    { step: "01", title: "Book Service", desc: "Call or WhatsApp us" },
    // { step: "02", title: "Free Pickup", desc: "We collect from your doorstep" },
    { step: "02", title: "Diagnosis & Quote", desc: "Transparent pricing" },
    { step: "03", title: "Repair & Testing", desc: "Done by experts" },
    { step: "04", title: "Delivery & Warranty", desc: "With 6 months guarantee" }
  ];




// 3D Card Component with Mouse Tilt
const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;

    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
    card.style.setProperty('--glow-opacity', '0.6');
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
    card.style.setProperty('--glow-opacity', '0');
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.hover3d} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--rotateX': '0deg',
        '--rotateY': '0deg',
        '--glow-opacity': '0'
      }}
    >
      {children}
    </div>
  );
};




  return (
    <div className={styles.allServicesPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1>Our All Services</h1>
          <p>Expert Motor, Pump & Generator Engine Repair and Sales Service in Nilanga</p>
        </div>
      </section>

      <div className={styles.container}>
        {/* 5 SERVICES */}
        <section className={styles.servicesSection}>
          <div className={styles.servicesGrid}>
            {services.map(service => (
              <TiltCard key={service.id} className={`${styles.serviceCard} ${styles.hover3d}`}>
                <div className={styles.cardImage}>
                  <img src={service.img} alt={service.title} loading="lazy" />
                  
                </div>
                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link to={service.link} className={styles.knowMoreBtn}>Know More →</Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

                {/* GENERATOR RENTAL – URGENT SECTION */}
        <section className={styles.generatorRental}>
          <div className={styles.rentalContent}>
            <div className={styles.rentalText}>
              <h2>Need Power Backup Urgently?</h2>
              <h3>We Provide Generator on Rent</h3>
           <ul>
             <li>5 KVA to 125 KVA Generators Available</li>
             <li>Instant Delivery within 2 Hours (up to 100 KM)</li>
             <li>24×7 Running Support | (Diesel Not Included)</li>
             <li>Best Rental Rates | No Hidden Charges</li>
            </ul>

              <p className={styles.urgentText}>Available Right Now – Limited Stock!</p>
              <div className={styles.rentalButtons}>
                <a href="tel:+919561666568" className={styles.rentalCall}>Call Now</a>
                <a href="https://wa.me/919561666568?text=Hi,%20I%20need%20Generator%20on%20Rent%20Urgently!" className={styles.rentalWhatsapp}>WhatsApp Now</a>
              </div>
            </div>
            <TiltCard className={styles.rentalImage}>
              <img src={gen} alt="Silent Generator on Rent" />
            </TiltCard>
          </div>
        </section>




        {/* WHY CHOOSE US */}
        <section className={styles.whyChoose}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <div className={styles.whyGrid}>
            {whyChoose.map((item, i) => (
              <TiltCard key={i} className={styles.whyCard}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className={styles.processSection}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.processGrid}>
            {processSteps.map((step, i) => (
              <TiltCard key={i} className={styles.processCard}>
                <div className={styles.stepNumber}>{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        
        <Testimonials/>

        {/* BRANDS */}
        <section className={styles.brandsSection}>
          <h2 className={styles.sectionTitle}>Brands We Service</h2>
          <div className={styles.brandsGrid}>
            {["Crompton", "Kirloskar", "Havells", "Usha", "V-Guard", "Texmo", "CRI", "Lubi"].map(brand => (
              <div key={brand} className={styles.brandLogo}>{brand}</div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.ctaContent}>
            <h2>Need Urgent Repair?</h2>
            <p>Call or WhatsApp us now – Same day service available!</p>
            <div className={styles.ctaButtons}>
              <a href="tel:+91 9561666568" className={styles.callBtn}>Call Now</a>
              <a href="https://wa.me/919561666568?text=Hi,%20I%20need%20pump%20repair" className={styles.whatsappBtn}>WhatsApp</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;