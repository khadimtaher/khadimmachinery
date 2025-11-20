import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import banner from "./Imgs/banner.jpeg";
import sideimg from "./Imgs/sideimg.jpeg";
import img from "./Imgs/img.jpeg";
// Lazy load images
const workshopImg = banner;
const toolsImg = 'https://images.unsplash.com/photo-1581092580500-4a7435e1f6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const technicianImg = img;

import Testimonials from "../../components/Testimonials/Testimonials";


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



function About() {
  return (
    <>
      {/* SEO Meta */}
      <head>
        <title>About Us | Motor Rewinding & Repair Experts | Submersible & Monoblock</title>
        <meta
          name="description"
          content="Trusted workshop for submersible, monoblock motor rewinding, generator & engine repair. Experienced technicians, genuine parts, fast service in your city."
        />
        <meta name="robots" content="index, follow" />
      </head>

      {/* 1. Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <img
          src={workshopImg}
          alt="Motor repair workshop with tools and machines"
          className={styles.heroImg}
          loading="lazy"
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Our Workshop</h1>
          <p className={styles.heroSubtitle}>
            Trusted Experts in Motor Rewinding & Repair Services
          </p>
        </div>
      </section>

      {/* 2. About Overview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <h2>20+ Years of Excellence in Motor Repair</h2>
              <p>
                Established in <strong>1998</strong>, we are a family-run workshop specializing in
                <strong> submersible & monoblock motor rewinding, generator maintenance, and engine overhaul</strong>.
                With decades of hands-on experience, we’ve earned the trust of thousands of households and businesses.
              </p>
              <p>
                Our mission is simple: <em>Fix it right, the first time.</em>
              </p>
            </div>
            <TiltCard className={styles.overviewImg}>
              <img src={sideimg} alt="Professional motor rewinding tools and equipment" loading="lazy" />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 3. Our Expertise */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Expertise</h2>
          <div className={styles.servicesGrid}>
            {[
              { title: "Submersible Motor Repair & Rewinding", desc: "Complete coil replacement, insulation testing & waterproof sealing" },
              { title: "Monoblock Pump Repair", desc: "Impeller balancing, bearing replacement & pressure optimization" },
              { title: "Domestic Water Motors", desc: "Fast home pump repair with same-day service option" },
              { title: "Generator Repair & Maintenance", desc: "Alternator rewinding, AVR repair & load testing" },
              { title: "Engine Overhaul & Servicing", desc: "Diesel/petrol engine rebuild, oil seals & gasket replacement" },
              // { title: "Pipe Threading & Fitting", desc: "Precision threading for GI, PVC & CPVC pipes" }
            ].map((service, i) => (
              <TiltCard key={i} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </TiltCard>
            ))}
          </div>
          <p className={styles.highlightText}>
            We use <strong>100% copper wire</strong>, <strong>high-grade insulation</strong>, and test every motor under full load before delivery.
          </p>
        </div>
      </section>


      {/* 5. Our Commitment */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <div className={styles.commitmentGrid}>
            <div>
              <h2>Our Commitment to You</h2>
              <p className={styles.paragraph}>
                We believe in <strong>honesty, safety, and reliability</strong>. Every motor that leaves our workshop is tested rigorously to ensure it performs like new.
              </p>
              <blockquote className={styles.quote}>
                “We don’t just repair motors — <strong>we treat every job like it’s for our own home.</strong>”
              </blockquote>
            </div>
            <TiltCard>
            <img src={img} alt="Experienced technician testing motor" loading="lazy" className={styles.commitmentImg} />

            </TiltCard>
          </div>
        </div>
      </section>

      {/* 6. Testimonials (Optional) */}
       <Testimonials/>

      {/* 7. Call to Action */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <h2>Ready to Fix Your Motor?</h2>
          <p>Get fast, reliable repair service from trusted experts.</p>
          <Link to="/contact" className={styles.ctaButton}>
            Book Your Service Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default About