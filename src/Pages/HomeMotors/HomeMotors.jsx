import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeMotors.module.css';
import banner from "./Imgs/banner.jpeg";

import img1 from "./Imgs/img1.png";
import img2 from "./Imgs/img2.png";
import img3 from "./Imgs/img3.png";

// Hero Image
const bannerImg = banner;

import rewinding from "../HomeMotors/Imgs/rewinding.png";
import jetpump from "../HomeMotors/Imgs/jett.png";
import self from "../HomeMotors/Imgs/self.png";
import capacitor from "../HomeMotors/Imgs/capacitor.png";
import relay from "../HomeMotors/Imgs/relay.png";
import pipes from "../HomeMotors/Imgs/pipes.png";


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

function HomeMotors() {
  return (
    <>
      {/* SEO Meta */}
      <head>
        <title>Domestic Water Pump Repair | Home Motor Service</title>
        <meta
          name="description"
          content="Expert repair for home water pumps, mini motors, jet pumps, self-priming pumps. Fast, reliable & affordable. Free pickup. Book now!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="home water pump repair, domestic motor service, jet pump repair, mini motor rewinding, self priming pump fix" />
      </head>

      {/* 1. HERO BANNER */}
      <section className={styles.hero}>
        <img src={bannerImg} alt="Domestic water pump repair" className={styles.heroImg} loading="lazy" />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Domestic Water Pump Repair</h1>
          <p>Mini Motors • Jet Pumps • Self-Priming • Same-Day Service</p>
          <Link to="/contact" className={styles.ctaBtn}>Get Free Quote</Link>
        </div>
      </section>

      {/* 2. REPAIR SERVICES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Home Motor Repair Services</h2>
          <div className={styles.servicesGrid}>
            {[
              { title: "Mini Motor Rewinding", desc: "0.5–1 HP copper rewinding with insulation", img: rewinding },
              { title: "Jet Pump Repair", desc: "Nozzle, venturi, impeller & seal replacement", img: jetpump },
              { title: "Self-Priming Pump Fix", desc: "Priming issue, foot valve, air lock repair", img: self },
              { title: "Capacitor & Switch Repair", desc: "Start/run capacitor, pressure switch replacement", img: capacitor },
              { title: "Pipe & Tank Connection", desc: "Leak fixing, suction pipe, tank float setup", img: pipes },
              // { title: "Pressure Tank Repair", desc: "Diaphragm, air bladder, pressure gauge fix" },
              // { title: "Home Visit & Installation", desc: "On-site repair, pipe fitting, testing" },
              { title: "Dry Run Protection", desc: "Float switch, auto-cut relay installation", img: relay }
            ].map((service, i) => (
              <TiltCard key={i} className={styles.serviceCard}>
                {service.img && (
                <div className={styles.cardIcon}>
                <img src={service.img} className={styles.iconsImg} alt="icons" />
                </div>
)}
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REPAIR PROCESS – ZIGZAG */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Repair Process</h2>
          <div className={styles.zigzagGrid}>
            {[
              { step: "1", title: "Diagnosis", desc: "Check motor, capacitor, priming & pressure", icon: "Search" },
              { step: "2", title: "Disassembly", desc: "Safe removal of impeller & casing", icon: "Tools" },
              { step: "3", title: "Rewinding", desc: "New copper coil with proper turns", icon: "Coil" },
              { step: "4", title: "Assembly", desc: "Seal fitting, priming & balancing", icon: "Wrench" },
              { step: "5", title: "Testing", desc: "Water flow, pressure & load test", icon: "Check" },
              { step: "6", title: "Delivery", desc: "Clean, tested & ready to use", icon: "Truck" }
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

      {/* 4. PUMP TYPES GALLERY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Domestic Pumps We Repair</h2>
          <div className={styles.motorGallery}>
            {[
              // { name: "Mini Booster Pump", hp: "0.5 HP", use: "Home water supply", img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { name: "Jet Pump",  use: "Borewell to tank", img: img1 },
              { name: "Self-Priming Pump",  use: "Tank to home", img: img2 },
              { name: "Pressure Booster",  use: "Low pressure fix", img: img3 },
              // { name: "Shallow Well Pump", hp: "0.5–1 HP", use: "Open well", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              // { name: "Garden Pump", hp: "0.5 HP", use: "Lawn, plants", img: "https://images.unsplash.com/photo-1581094288329-9f8d91705a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
            ].map((pump, i) => (
              <TiltCard key={i} className={styles.motorCard}>
                <img src={pump.img} alt={pump.name} loading="lazy" />
                <div className={styles.motorInfo}>
                  <h3>{pump.name}</h3>
              
                  <p><strong>Use:</strong> {pump.use}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMON PROBLEMS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Common Home Pump Issues We Fix</h2>
          <div className={styles.faqGrid}>
            {[
              { q: "No water coming", a: "Priming lost or foot valve stuck — suction line taking air. Re-priming or valve cleaning fixes it." },
              { q: "Low water pressure", a: "Nozzle or pipes clogged, or impeller worn out. Cleaning or replacing worn parts restores pressure." },
              { q: "Pump not starting", a: "Capacitor failure, faulty switch, or jammed impeller. Motor inspection and part replacement needed." },
              { q: "Frequent on-off", a: "Pressure switch faulty or pressure tank air low. Adjusting switch or refilling tank solves it." },
              { q: "Noisy pump", a: "Worn bearings or loose impeller. Lubrication or bearing/impeller replacement stops the noise."},
              { q: "Water leak", a: "Damaged seal or cracked pump casing. Seal replacement or casing repair required." }
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
              { q: "How long does home pump repair take?", a: "Usually 4–24 hours. Same-day service available." },
              { q: "Do you repair all home pump brands?", a: "Yes — Crompton, Kirloskar, V-Guard, Usha, Havells, etc." },
              { q: "Cost of 0.5 HP rewinding?", a: "₹1200–₹2200 depending on damage." },
              { q: "Do you come to home?", a: "Yes! Free visit within 10 km." },
              { q: "How to prevent pump burn?", a: "Use stabilizer, avoid dry run, clean filter." },
              { q: "Warranty?", a: "3–6 months on repair, 1 month on parts." }
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
          <h2>Need Home Water Pump Repair?</h2>
          <p>Fix it today — <strong>call or WhatsApp now!</strong></p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.ctaBtnPrimary}>Book Now</Link>
            <a href="tel:+9195616 66568" className={styles.ctaBtnSecondary}>Call: +91 95616 66568</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeMotors;