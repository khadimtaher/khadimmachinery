import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Monoblock.module.css';
import banner from "./Imgs/banner.jpeg";
import img1 from "./Imgs/img1.png";
import img2 from "./Imgs/img2.png";
import img3 from "./Imgs/img3.png";
import img4 from "./Imgs/img4.png";

// Images
const bannerImg = banner;
import rewinding  from "../Monoblock/Imgs/rewinding.png";
import impeller from "../Monoblock/Imgs/impeller.png";
import bearing from "../Monoblock/Imgs/bearng.png";
import meter from "../Monoblock/Imgs/meter.png";
import installation from "../Monoblock/Imgs/install.png";



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



function Monoblock() {
  return (
    <>
      {/* SEO Meta */}
      <head>
        <title>Monoblock Pump Repair & Rewinding | Expert Service</title>
        <meta
          name="description"
          content="Professional monoblock pump repair, rewinding, impeller replacement & installation. 25+ years experience. Fast & reliable service. Book now!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="monoblock pump repair, monoblock rewinding, centrifugal pump service, water pump repair" />
      </head>

      {/* 1. HERO BANNER */}
      <section className={styles.hero}>
        <img src={bannerImg} alt="Monoblock pump repair workshop" className={styles.heroImg} loading="lazy" />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Monoblock Pump Repair & Rewinding</h1>
          <p>Expert Rewinding • Impeller Balancing • Mechanical Seal • Same-Day Testing</p>
          <Link to="/contact" className={styles.ctaBtn}>Get Free Quote</Link>
        </div>
      </section>

      {/* 2. REPAIR SERVICES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Monoblock Repair Services</h2>
          <div className={styles.servicesGrid}>
            {[
              { title: "Complete Motor Rewinding", desc: "100% copper wire, Class F insulation, varnish coating", img: rewinding },
              { title: "Impeller & Casing Repair", desc: "Balancing, wear ring replacement, cavitation fix", img: impeller },
              // { title: "Mechanical Seal Replacement", desc: "John Crane / Burgmann seals for zero leakage" },
              { title: "Bearing & Shaft Repair", desc: "SKF bearings, shaft straightening, coupling alignment", img: bearing },
              // { title: "Priming & Suction Repair", desc: "Foot valve, priming tank, suction pipe leak fix" },
              { title: "Pump Testing & Flow Trial", desc: "Full load test with pressure gauge & flow meter", img: meter },
              { title: "Monoblock Installation", desc: "Pipe fitting, base frame, starter panel setup", img: installation },
              // { title: "Overload & Dry Run Protection", desc: "Auto-cut relay, thermal protector installation" }
            ].map((service, i) => (
              <TiltCard key={i} className={styles.serviceCard}>
                {service.img && (
                <div className={styles.cardIcon}>
                  <img src={service.img} className={styles.iconImg} alt="icons" />
                </div>
)}
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REPAIR PROCESS – ZIGZAG LEFT-RIGHT */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Repair Process</h2>
          <div className={styles.zigzagGrid}>
            {[
              { step: "1", title: "Diagnosis", desc: "Electrical & hydraulic performance check", icon: "Search" },
              { step: "2", title: "Disassembly", desc: "Safe removal of impeller, casing & motor", icon: "Tools" },
              { step: "3", title: "Rewinding", desc: "New copper coils with proper turns", icon: "Coil" },
              { step: "4", title: "Assembly", desc: "Impeller balancing & seal fitting", icon: "Wrench" },
              { step: "5", title: "Testing", desc: "Flow rate, pressure & load test", icon: "Check" },
              { step: "6", title: "Delivery", desc: "Clean, packed & ready to install", icon: "Truck" }
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

      {/* 4. MONOBLOCK TYPES GALLERY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Monoblock Pumps We Repair</h2>
          <div className={styles.motorGallery}>
            {[
              { name: "Centrifugal Monoblock", use: "Domestic, irrigation", img: img4 },
              { name: "Self-Priming Monoblock",use: "Water tank filling", img: img2 },
              // { name: "Mini Monoblock", hp: "0.5–1 HP", use: "Home, garden", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { name: "High-Flow Monoblock",  use: "Agriculture, farms", img: img1 },
              { name: "Openwell Monoblock",   use: "Open wells, tanks", img: img3 },
              // { name: "Industrial Monoblock", hp: "5–20 HP", use: "Factories, buildings", img: "https://images.unsplash.com/photo-1581094288329-9f8d91705a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
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

      {/* 5. COMMON PROBLEMS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Common Monoblock Issues We Fix</h2>
          <div className={styles.faqGrid}>
            {[
              { q: "No water flow", a: "Water flow stops when the impeller gets clogged, the foot valve is stuck, or the pump loses priming. We clean, reset and properly prime the pump to restore flow." },
              { q: "Low pressure", a: "Low pressure is caused by a worn-out impeller, air lock, or suction pipe leakage. Our service includes checking all connections and restoring full pressure." },
              { q: "Motor humming but not starting", a: "A humming motor indicates a failed capacitor or a jammed impeller. We diagnose the cause and replace or free the stuck components immediately."},
              { q: "Overheating", a: "Overheating happens due to dry-run, overload, or failing bearings. Proper lubrication, load balancing, and seal inspection prevent future damage." },
              { q: "Noise & vibration", a: "Noise or vibration usually means an unbalanced impeller or bent shaft. We realign, balance, and replace faulty parts for smooth operation." },
              { q: "Leakage from seal", a: "Leakage occurs when the mechanical seal is worn or assembled incorrectly. We replace the seal and ensure perfect alignment to stop water seepage."}
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

      {/* 6. FAQs */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {[
              { q: "How long does monoblock repair take?", a: "Most repairs done in 24–48 hours." },
              { q: "Do you repair all brands?", a: "Yes — Kirloskar, Crompton, Texmo, CRI, V-Guard, etc." },
              { q: "What is the rewinding cost for 1 HP?", a: "₹1500–₹3000 based on damage & copper price." },
              { q: "Do you offer pickup?", a: "Yes! Free within 15 km." },
              { q: "How to prevent dry run?", a: "Install float switch or dry run protector." },
              { q: "Warranty on repair?", a: "6–12 months on rewinding, 3 months on parts." }
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
          <h2>Need Monoblock Pump Repair?</h2>
          <p>Get it fixed today — <strong>call or WhatsApp now!</strong></p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.ctaBtnPrimary}>Book Repair Now</Link>
            <a href="tel:+9195616 66568" className={styles.ctaBtnSecondary}>Call: +91 95616 66568</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Monoblock;