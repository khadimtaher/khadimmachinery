import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Submersible.module.css';
import banner from "./Imgs/banner.jpeg"
import img1 from "./Imgs/img1.png";
import img2 from "./Imgs/img2.png";
import img3 from "./Imgs/img3.png";
import img4 from "./Imgs/img4.png";


// Images
const bannerImg = banner;

import rewinding from "../Submersible/Imgs/rewinding.png";
import rotor from "../Submersible/Imgs/rotor.png";
import bearing from "../Submersible/Imgs/bearing.png";
import impeller from "../Submersible/Imgs/emplr.png";
import cable from "../Submersible/Imgs/wires.png";
import meter from "../Submersible/Imgs/meter.png";



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


function Submersible() {
  return (
    <>
      {/* SEO Meta */}
      <head>
        <title>Submersible Motor Repair & Rewinding | Expert Service</title>
        <meta
          name="description"
          content="Professional submersible motor repair, rewinding, pump testing & installation. 25+ years experience, genuine parts, fast service. Book now!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="submersible motor repair, submersible pump rewinding, borehole motor repair, water pump service" />
      </head>

      {/* 1. HERO BANNER */}
      <section className={styles.hero}>
        <img src={bannerImg} alt="Submersible motor repair workshop" className={styles.heroImg} loading="lazy" />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Submersible Motor Repair & Rewinding</h1>
          <p>Expert Diagnosis • Full Rewinding • Waterproof Sealing • Same-Day Testing</p>
          <Link to="/contact" className={styles.ctaBtn}>Get Free Quote</Link>
        </div>
      </section>

      {/* 2. REPAIR SERVICES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Submersible Repair Services</h2>
          <div className={styles.servicesGrid}>
            {[
              { title: "Complete Motor Rewinding", desc: "100% copper wire, Class F/H insulation, varnish coating", img: rewinding },
              { title: "Stator & Rotor Repair", desc: "Core loss testing, lamination repair, shaft straightening", img: rotor },
              { title: "Bearing Replacement", desc: "SKF/NTN sealed bearings for long life", img: bearing },
              { title: "Impeller & Diffuser Repair", desc: "Balancing, wear ring replacement, flow optimization", img: impeller },
              { title: "Cable Jointing & Splicing", desc: "Heat-shrink waterproof joints, submersible cable repair", img: cable },
              { title: "Pump Testing & Load Trial", desc: "Full load test in water tank before delivery", img: meter },
              // { title: "Borewell Pump Installation", desc: "Site visit, pipe fitting,83 starter panel setup" },
              // { title: "Dry Run & Overload Protection", desc: "Auto-cut relay installation for motor safety" }
            ].map((service, i) => (
              <TiltCard key={i} className={styles.serviceCard}>
                {service.img && (
                <div className={styles.cardIcon}>
                  <img src={service.img} className={styles.iconImg} alt="icon" />
                </div>
                )}
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

 {/* 3. REPAIR PROCESS – ZIGZAG LEFT-RIGHT CARDS */}
<section className={`${styles.section} ${styles.bgLight}`}>
  <div className={styles.container}>
    <h2 className={styles.sectionTitle}>Our Repair Process</h2>
    <div className={styles.zigzagGrid}>
      {[
        { step: "1", title: "Diagnosis", desc: "Full electrical & mechanical inspection", icon: "Search" },
        { step: "2", title: "Disassembly", desc: "Safe removal of all components", icon: "Tools" },
        { step: "3", title: "Rewinding", desc: "100% copper wire with precision turns", icon: "Coil" },
        { step: "4", title: "Assembly", desc: "Sealing, alignment & waterproofing", icon: "Wrench" },
        { step: "5", title: "Testing", desc: "48-hour full load water test", icon: "Check" },
        { step: "6", title: "Delivery", desc: "Clean, tested & ready to install", icon: "Truck" }
      ].map((item, i) => (
        <div
          key={i}
          className={`${styles.zigzagItem} ${i % 2 === 0 ? styles.zigzagLeft : styles.zigzagRight}`}
        >
          <TiltCard className={styles.zigzagCard}>
            <div className={styles.zigzagIcon}>
              <span>{item.icon}</span>
            </div>
            <div className={styles.zigzagContent}>
              <div className={styles.zigzagStep}>Step {item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </TiltCard>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. SUBMERSIBLE MOTOR TYPES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Submersible Motors We Repair</h2>
          <div className={styles.motorGallery}>
            {[
              { name: "Borewell Submersible Pump",  use: "Deep wells, agriculture", img: img1 },
              { name: "Openwell Submersible",  use: "Shallow wells, homes", img: img2 },
              // { name: "Mini Submersible (Jet Pump)", hp: "0.5–1 HP", use: "Domestic water supply", img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { name: "Solar Submersible Pump",  use: "Solar-powered irrigation", img: img3 },
              { name: "Stainless Steel Submersible",  use: "Industrial, corrosive water", img: img4 },
              // { name: "High-Head Submersible", hp: "3–20 HP", use: "High-rise buildings, mines", img: "https://images.unsplash.com/photo-1581094288329-9f8d91705a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
            ].map((motor, i) => (
              <TiltCard key={i} className={styles.motorCard}>
                <img src={motor.img} alt={motor.name} loading="lazy" />
                <div className={styles.motorInfo}>
                  <h3>{motor.name}</h3>
                 
                  <p><strong>Use:</strong> {motor.use}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMON PROBLEMS & SOLUTIONS – WITH + / – ICONS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Common Submersible Issues We Fix</h2>
          <div className={styles.faqGrid}>
            {[
              { q: "Motor not starting", a: "Motor usually fails to start due to a faulty capacitor, damaged starter, or broken winding. Our technician checks each part to restore smooth operation." },
              { q: "Low water pressure", a:  "Low pressure is caused by a clogged impeller, worn diffuser, or partial winding burn. We clean, repair, and recalibrate the motor for full output." },
              { q: "Burning smell", a: "A burning smell means the motor is overheating because of dry-run or overload. Immediate inspection prevents coil damage and costly repairs." },
              { q: "Frequent tripping", a: "Frequent MCB tripping happens due to earth leakage or cable short circuits. We identify the exact fault and repair the wiring or motor safely."},
              { q: "Noise & vibration", a: "Unusual noise or vibration indicates a bent shaft, loose impeller, or worn bearings. Our service includes alignment and bearing replacement." },
              { q: "Water in motor", a: "Water enters the motor when the mechanical seal or cable joint is damaged. We reseal the motor and waterproof all joints to prevent future leaks." }
            ].map((item, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span className={styles.faqQuestion}>{item.q}</span>
                  <span className={styles.faqToggle}>
                    <span className={styles.plus}>+</span>
                    <span className={styles.minus}>-</span>
                  </span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p><strong>Solution:</strong> {item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs – WITH + / – ICONS */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {[
              { q: "How long does submersible motor repair take?", a: "Most repairs are completed in 24–48 hours. Complex rewinding may take 2–3 days." },
              { q: "Do you provide warranty on repairs?", a: "Yes! We offer 6–12 months warranty on rewinding and 3 months on parts." },
              { q: "Can you repair any brand of submersible pump?", a: "Yes — Kirloskar, Crompton, Texmo, CRI, V-Guard, and all local brands." },
              { q: "What is the cost of rewinding a 1 HP submersible motor?", a: "Starts from ₹1800–₹3500 depending on HP, damage, and copper price." },
              { q: "Do you offer pickup & delivery?", a: "Yes! Free pickup within 15 km. Delivery charges apply beyond that." },
              { q: "How to prevent motor burn in summer?", a: "Install dry run protector, use proper starter, avoid low voltage." }
            ].map((faq, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span className={styles.faqQuestion}>{faq.q}</span>
                  <span className={styles.faqToggle}>
                    <span className={styles.plus}>+</span>
                    <span className={styles.minus}>-</span>
                  </span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Need Submersible Motor Repair?</h2>
          <p>Get it fixed today by experts — <strong>call or WhatsApp now!</strong></p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.ctaBtnPrimary}>Book Repair Now</Link>
            <a href="tel:+91 95616 66568" className={styles.ctaBtnSecondary}>Call: +91 95616 66568</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Submersible;