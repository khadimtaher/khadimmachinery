import React, { useRef } from 'react';
import { Form, Link } from 'react-router-dom';
import styles from './Engine.module.css';
import banner from "../Engine/Imgs/banner.jpg";
import img1 from "../Engine/Imgs/img1.png";
import img2 from "../Engine/Imgs/img2.png";
import img3 from "../Engine/Imgs/img3.png";
import img4 from "../Engine/Imgs/img4.png";

const bannerImg = banner;

// service icons imgs 
import engineoverhaul from "../Engine/Imgs/engineOverhaul.png";
import piston from "../Engine/Imgs/piston.png";
import valve from "../Engine/Imgs/valve.png";
import crancshaft from "../Engine/Imgs/crankshaft.png";
import carburetor from "../Engine/Imgs/carburetor.png";
import timingbelt from "../Engine/Imgs/belttiming.png";
import oilfilter from  "../Engine/Imgs/oilfilter.png";
import compressor from "../Engine/Imgs/compressor.png"

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

function Engine() {
  return (
    <>
      {/* SEO Meta */}
      <head>
        <title>Engine Repair & Overhaul | Diesel, Petrol, CNG</title>
        <meta name="description" content="Expert engine repair, overhaul, piston, valve, fuel system. Diesel, petrol, CNG engines. 24/7 emergency. Book now!" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="engine repair, diesel engine overhaul, petrol engine service, piston ring replacement, valve grinding" />
      </head>

      {/* 1. HERO BANNER */}
      <section className={styles.hero}>
        <img src={bannerImg} alt="Engine repair workshop" className={styles.heroImg} loading="lazy" />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Engine Repair & Overhaul</h1>
          <p>Diesel • Petrol • Piston • Valve • Fuel System</p>
          <Link to="/contact" className={styles.ctaBtn}>Get Free Quote</Link>
        </div>
      </section>

      {/* 2. SERVICES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Engine Services</h2>
          <div className={styles.servicesGrid}>
            {[
              { title: "Complete Engine Overhaul", desc: "Full disassembly, cleaning, reassembly", img: engineoverhaul },
              { title: "Piston & Ring Replacement", desc: "Bore honing, new piston rings, gaskets", img:piston },
              { title: "Valve Grinding & Seat", desc: "Valve lapping, seat cutting, guide replacement", img: valve },
              { title: "Crankshaft Repair", desc: "Grinding, polishing, bearing replacement", img: crancshaft },
              { title: "Fuel System Service", desc: "Injector cleaning, pump repair, carburetor", img: carburetor },
              { title: "Timing Belt/Chain", desc: "Replacement with tensioner & guides", img: timingbelt },
              { title: "Oil Pump & Filter", desc: "Pressure test, cleaning, replacement", img:oilfilter },
              { title: "Engine Tuning", desc: "Compression test, ignition timing", img: compressor }
            ].map((service, i) => (
              <TiltCard key={i} className={styles.serviceCard}>
            {service.img && (
            <div className={styles.cardIcon}>
              <img src={service.img} className={styles.iconsImg}  alt={service.title} />
            </div>
          )}
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS – ZIGZAG */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Repair Process</h2>
          <div className={styles.zigzagGrid}>
            {[
              { step: "1", title: "Diagnosis", desc: "Compression, oil pressure, fault code check", icon: "Search" },
              { step: "2", title: "Disassembly", desc: "Remove head, piston, crank safely", icon: "Tools" },
              { step: "3", title: "Inspection", desc: "Measure wear, crack test, bore check", icon: "Magnifying Glass" },
              { step: "4", title: "Repair", desc: "Grinding, honing, new parts fitting", icon: "Wrench" },
              { step: "5", title: "Assembly", desc: "Torque specs, gasket, timing setup", icon: "Gear" },
              { step: "6", title: "Testing", desc: "Run-in, load test, leak check", icon: "Check" }
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

      {/* 4. ENGINE TYPES GALLERY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Engines We Repair</h2>
          <div className={styles.motorGallery}>
            {[
              { name: "Diesel Engine", type: "4-Stroke", use: "Trucks, generators", img: img1 },
              { name: "Diesel Engine", type: "2/4-Stroke", use: "Cars, bikes, pumps", img: img2 },
              { name: "Diesel Engine", type: "Converted", use: "Auto, taxis", img: img3 },
              { name: "Petrol Engine", type: "Diesel", use: "Boats, ships", img: img4 },
            ].map((eng, i) => (
              <TiltCard key={i} className={styles.motorCard}>
                <img src={eng.img} alt={eng.name} loading="lazy" />
                <div className={styles.motorInfo}>
                  <h3>{eng.name}</h3>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMON PROBLEMS & FAQs */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Common Engine Issues We Fix</h2>
          <div className={styles.faqGrid}>
            {[
              { q: "What kind of engines do you repair?", a: "We repair air‑cooled diesel engines used in industrial applications like pumps, compressors, and power units."  },
              { q: "Why do air‑cooled engines overheat?", a: "Overheating can be caused by clogged cooling fins, prolonged heavy load, or lack of air circulation. Our team checks and restores cooling efficiency." },
              { q: "What causes excessive smoke from engines?", a: "Smoke can be due to fuel injection issues, worn rings, or oil entering the combustion chamber. Immediate inspection is recommended."  },
              { q:  "Why does the engine make unusual noise?", a: "Abnormal sounds often point to worn bearings, loose parts, or misalignment. We diagnose and fix the root cause."  },
              { q: "Engine starts hard or slows down?", a: "This can be due to fuel delivery issues, weak battery/starter, or blocked filters. Our service includes full system inspection."  },
              { q: "How often should oil be changed?", a: "Oil change depends on usage hours and load. For industrial engines, we recommend professional inspection to decide the right interval." }
            
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

      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {[
              { q: "How long does engine overhaul take?", a: "2–4 days depending on damage." },
              { q: "Do you repair all engine types?", a: "Yes — we specialize in repairing all types of engines, including Kirloskar, Crompton, Lubi, and other popular brands." },
              { q: "How long does a 2-cylinder engine overhaul take?", a:  "The time required depends on the extent of damage and parts availability. Our team will assess and give an estimate before starting the work." },
              { q: "Do you offer pickup?", a: "No, we do not provide pickup or delivery services. Customers are requested to bring the engine or equipment to our shop for repair."},
              { q: "How to maintain engine?", a: "Regular oil change, clean filter, avoid overload." },
              { q: "What if my engine develops a fault after repair?", a: "Our team can inspect and repair it again. Charges will apply depending on the type of issue." }
            
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
          <h2>Need Engine Repair?</h2>
          <p>Fix it today — <strong>call or Book now!</strong></p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.ctaBtnPrimary}>Book Now</Link>
            <a href="tel:+9195616 66568" className={styles.ctaBtnSecondary}>Call: +91 95616 66568</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Engine;