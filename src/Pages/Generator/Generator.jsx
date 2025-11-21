
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Generator.module.css';
import banner from "../Generator/Imgs/banner.png"
import img1 from "../Generator/Imgs/img1.png";
import img2 from "../Generator/Imgs/img2.png";
import img3 from "../Generator/Imgs/img3.png";
import img4 from "../Generator/Imgs/img4.png";

// services imgs icons 
import rewinding from "../Generator/Imgs/dynamo.png"
import avr from "../Generator/Imgs/electricmeter.png";
import carburetor from "../Generator/Imgs/carburetor.png";
import engineoverhaul from "../Generator/Imgs/engineOverhaul.png";
import bearing from "../Generator/Imgs/bearing.png";
import oilfilter from "../Generator/Imgs/oilfilter.png";
import loadtest from "../Generator/Imgs/loadtest.png";
import worker from "../Generator/Imgs/worker.png";


// Hero Image
const bannerImg = banner;


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


function Generator() {
  return (
    <>
      {/* SEO Meta */}
      <head>
        <title>Generator Repair & Service | Diesel, Petrol, Silent</title>
        <meta
          name="description"
          content="Expert generator repair, servicing, rewinding, AVR, fuel system. Diesel, petrol, silent genset. 24/7 emergency service. Book now!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="generator repair, diesel generator service, petrol genset rewinding, silent generator maintenance, AVR repair" />
      </head>

      {/* 1. HERO BANNER */}
      <section className={styles.hero}>
        <img src={bannerImg} alt="Generator repair workshop" className={styles.heroImg} loading="lazy" />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Generator Repair & Service</h1>
          <p>Diesel • Petrol • Silent • AVR • Fuel System • 24/7 Emergency</p>
          <Link to="/contact" className={styles.ctaBtn}>Get Free Quote</Link>
        </div>
      </section>

      {/* 2. SERVICES */}
<section className={styles.section}>
 
  <div className={styles.container}>
    <h2 className={styles.sectionTitle}>Our Generator Services</h2>
    <div className={styles.servicesGrid}>
      {[
        { title: "Complete Rewinding", desc: "Stator & rotor rewinding with Class H insulation", img: rewinding },
        { title: "AVR & Control Panel", desc: "Automatic Voltage Regulator repair & replacement", img: avr},
        { title: "Fuel System Repair", desc: "Injector, pump, filter, carburetor cleaning", img: carburetor },
        { title: "Engine Overhaul", desc: "Piston, ring, valve, gasket replacement", img: engineoverhaul },
        { title: "Alternator Repair", desc: "Bearing, diode, exciter field repair", img: bearing },
        { title: "Oil & Filter Change", desc: "Engine oil, fuel filter, air filter service", img: oilfilter },
        { title: "Load Testing", desc: "Full load trial with resistive load bank", img: loadtest },
        { title: "On-Site Service", desc: "Emergency repair at your location", img: worker }
      ].map((service, i) => (
        <TiltCard key={i} className={styles.serviceCard}>
          {service.img && (
            <div className={styles.cardIcon}>
              <img src={service.img} className={styles.iconsImg} alt={service.title} />
            </div>
          )}
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </TiltCard>
      ))}
    </div>
  </div>

  {/* ✅ Dynamo Section Start */}
  <div className={styles.dynamoSection}>
    <h2 className={styles.sectionTitle}>Dynamo (Generator Power System)</h2>
    <p className={styles.dynamoIntro}>
      Dynamo generator ka ek important hissa hai jo mechanical energy ko electrical energy me convert karta hai.
      Ye system mainly <strong>DC current</strong> generate karta hai aur small to medium power generators me use hota hai.
    </p>

    <div className={styles.dynamoGrid}>
      {[
        {
          title: "Key Functions",
          points: [
            "⚡ Electricity Generation",
            "🔧 Voltage Regulation",
            "🧭 Magnetic Field System",
          ],
        },
        {
          title: "Common Issues We Repair",
          points: [
            "Brushes wear-out or carbon deposit problems",
            "Armature winding short circuits",
            "Bearing jam or vibration issues",
            "Overheating due to overload",
            "Low voltage or no output",
          ],
        },
        {
          title: "Our Services Include",
          points: [
            "Full Dynamo inspection and testing",
            "Winding rewinding service",
            "Bearing & brush replacement",
            "Load testing and calibration",
            "Cleaning and lubrication",
          ],
        },
      ].map((card, i) => (
        <TiltCard key={i} className={styles.dynamoCard}>
          <h3>{card.title}</h3>
          <ul>
            {card.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </TiltCard>
      ))}
    </div>
  </div>
  {/* ✅ Dynamo Section End */}
</section>


      {/* 3. PROCESS – ZIGZAG */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Repair Process</h2>
          <div className={styles.zigzagGrid}>
            {[
              { step: "1", title: "Diagnosis", desc: "Electrical & mechanical fault check", icon: "Search" },
              { step: "2", title: "Disassembly", desc: "Safe removal of alternator & engine parts", icon: "Tools" },
              { step: "3", title: "Rewinding", desc: "100% copper wire, varnish coating", icon: "Coil" },
              { step: "4", title: "Engine Repair", desc: "Fuel system, piston, valve service", icon: "Wrench" },
              { step: "5", title: "Testing", desc: "No-load & full-load trial", icon: "Gauge" },
              { step: "6", title: "Delivery", desc: "Clean, tested & ready to run", icon: "Truck" }
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

      {/* 4. GENERATOR TYPES GALLERY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Generators We Service</h2>
          <div className={styles.motorGallery}>
            {[
              { name: "Diesel Generator",  use: "Industrial, commercial", img: img1 },
              // { name: "Petrol Generator", kva: "1–5 KVA", use: "Home, small shops", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { name: "Silent Generator",  use: "Hospitals, hotels", img: img3 },
              { name: "Portable Genset",  use: "Events, camping", img: img4 },
              { name: "Inverter Generator", use: "Sensitive electronics", img: img2 },
              // { name: "Industrial DG Set", kva: "100–500 KVA", use: "Factories, data centers", img: "https://images.unsplash.com/photo-1581094288329-9f8d91705a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
            ].map((gen, i) => (
              <TiltCard key={i} className={styles.motorCard}>
                <img src={gen.img} alt={gen.name} loading="lazy" />
                <div className={styles.motorInfo}>
                  <h3>{gen.name}</h3>
                  {/* <p><strong>KVA:</strong> {gen.kva}</p> */}
                  <p><strong>Use:</strong> {gen.use}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMON PROBLEMS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Common Generator Issues We Fix</h2>
          <div className={styles.faqGrid}>
            {[
              { q: "Generator not starting", a: "Mostly due to a dead battery, fuel blockage, or starter motor failure. Basic electrical and fuel system checks fix the issue."  },
              { q: "Low voltage output", a: "Caused by faulty AVR, weak exciter, or loose terminals. Calibration or part replacement restores stable voltage."  },
              { q: "Engine overheating", a: "Happens when oil level is low or the radiator is clogged. Cleaning the cooling system and tightening the fan belt solves it." },
              { q: "High fuel consumption", a: "Dirty air filter, injector leakage, or overload increases fuel use. Cleaning filters and fixing injectors improves mileage." },
              { q: "Black smoke", a: "Usually comes from a choked air filter or faulty injector. Cleaning or tuning the fuel system clears the smoke." },
              { q: "Noisy operation", a: "Worn bearings, loose bolts, or a damaged silencer cause noise. Tightening and replacing worn parts reduces sound." }
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
              { q: "How long does generator repair take?", a: "4–48 hours depending on fault." },
              { q: "Do you repair all brands?", a: "Yes — Kirloskar, Cummins, Honda, Mahindra, etc." },
              { q: "Cost of 5 KVA rewinding?", a: "₹8000–₹15000 based on damage." },
              { q: "Do you offer AMC?", a: "Yes! Quarterly & half-yearly plans." },
              { q: "Emergency service?", a: "24/7 on-call technician." },
              { q: "Warranty?", a: "3–12 months on repair & parts." }
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
          <h2>Need Generator Repair?</h2>
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

export default Generator;