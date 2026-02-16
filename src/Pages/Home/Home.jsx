import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

// Images
import topLeftImg from "../../Images/generator.png";
import topRightImg from "../../Images/submersible.png";
import bottomLeftImg from "../../Images/engine.png";
import bottomRightImg from "../../Images/motor.png";
import mainImg from "../../Images/shopImg.jpg";
import aboutImg from "../../Images/shopImg.jpg"; // Workshop image for About section
import AnimatedStats from "../../components/AnimatedStats/AnimatedStats";

// services img 
import pumpImg from "../../Images/submersible.png";
import generatorImg from "../../Images/S_generator.png"
import threadingImg from "../../Images/pipeThreading.png"
import engineRepair from "../../Images/enginerep.png"


// react icons 
import { FiTool } from "react-icons/fi";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQs from "../../components/FAQs/FAQs";
import ContactForm from "../../components/ContactForm/ContactForm";
import Videos from "../../components/Videos/Videos";

// home page slider banner images 
import pumpbanner from "../Home/imgs/pumpbanner.jpeg";
import genbanner from "../Home/imgs/genbanner.jpeg";
import toolsbanner from "../Home/imgs/toolsbanner.jpeg";

// circle section images 
import rewinding from '../Home/imgs/rewinding.jpg';
import pump from "../Home/imgs/pump.png";
import generator from "../Home/imgs/gene.png";
import engine from "../Home/imgs/ing.png";

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



function Home() {
  const cornersRef = useRef([]);
  const navigate = useNavigate();

  const cornerImages = [topLeftImg, topRightImg, bottomLeftImg, bottomRightImg];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY * 0.08, 35);
      const opacity = Math.max(1 - scrollY / 600, 0.6);

      cornersRef.current.forEach((el, i) => {
        if (!el) return;
        const dir = i % 2 === 0 ? -1 : 1;
        const x = dir * offset;
        const y = i < 2 ? -offset : offset;
        el.style.transform = `translate(${x}px, ${y}px) rotate(${dir * 6}deg)`;
        el.style.opacity = opacity;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // services sections 
  const services = [
    {
      img: pumpImg,
      title: "Pump Repair",
      desc: "Expert repair and maintenance for all types of water and submersible pumps, ensuring smooth and efficient operation.",
    },
    {
      img: generatorImg,
      title: "Generator Maintenance",
      desc: "Reliable service for generators used in industries and water dams, with precision fault diagnosis and quick repair.",
    },
      {
      img: engineRepair, // ✅ New service
      title: "Engine Repair",
      desc: "Comprehensive repair and servicing for all types of engines including Kirloskar, Mahindra, and other industrial models with guaranteed performance.",
    },
    {
      img: threadingImg,
      title: "Pipe Threading",
      desc: "Professional threading for industrial and domestic pipes using advanced threading machines and tools.",
    },
    
   
 
  ];

  // round circles section 
  const circleData = [
  {
    title: "Generators",
    image: generator,
  },
  {
    title: "Engine",
    image: engine,
  },
  {
    title: "Pumps",
    image: pump,
  },
  {
    title: "Repair & Rewinding",
    image: rewinding,
  },
];


const sliderData = [
{
  image: mainImg,
  title: "Innovating Solutions for Every Motor",
  desc: `Expert Repair, Rewinding & Maintenance
Motors • Pumps • Generators • Engines & More`
},
  {
    image: pumpbanner,
    title: "Reliable Pump Solutions",
    desc: "Precision servicing for centrifugal, submersible, booster & all industrial pumps."
  },
  {
    image: genbanner,
    title: "Uninterrupted Power with Generators",
    desc: "Diesel genset sales, installation, AMC & emergency breakdown support."
  },
  {
    image: toolsbanner,
    title: "Precision Engineering You Can Trust",
    desc: "State-of-the-art workshop with skilled technicians and modern tools."
  },
  // aur chahiye toh add kar sakte ho
];

const [currentIndex, setCurrentIndex] = useState(0);
const timerRef = useRef(null);

const goToNext = () => {
  setCurrentIndex((prev) => (prev + 1) % sliderData.length);
};

const goToPrev = () => {
  setCurrentIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
};

useEffect(() => {
  timerRef.current = setInterval(goToNext, 5500); // 5.5 seconds per slide
  return () => clearInterval(timerRef.current);
}, []);

// Pause on hover (optional but mast feel deta hai)
const handleMouseEnter = () => clearInterval(timerRef.current);
const handleMouseLeave = () => {
  timerRef.current = setInterval(goToNext, 5500);
};
  return (
    <>
   
<div 
  className={styles.sliderContainer}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <div className={styles.sliderWrapper}>
    {sliderData.map((slide, index) => (
      <div
        key={index}
        className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
      >
        <img 
          src={slide.image} 
          alt={slide.title} 
          className={styles.slideImage}
        />
        <div className={styles.slideOverlay}>
          <div className={styles.textContent}>
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Dots */}
  <div className={styles.dots}>
    {sliderData.map((_, i) => (
      <button
        key={i}
        className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
        onClick={() => setCurrentIndex(i)}
      />
    ))}
  </div>

  {/* Arrows (optional – chhote screen pe hide kar sakte ho) */}
  <button className={`${styles.arrow} ${styles.prevArrow}`} onClick={goToPrev}>←</button>
  <button className={`${styles.arrow} ${styles.nextArrow}`} onClick={goToNext}>→</button>
</div>

{/* images circles round section  */}

<section className={styles.servicesSection}>
  <h2 className={styles.sectionTitle}>Our Core Expertise</h2>
  
  <div className={styles.circlesContainer}>
    {circleData.map((item, index) => (
      <div key={index} className={styles.circleWrapper}>
        <div className={styles.outerCircle}>
          <div className={styles.innerCircle}>
            <img 
              src={item.image} 
              alt={item.title} 
              className={styles.circleImage} 
            />
          </div>
        </div>
        <p className={styles.circleLabel}>{item.title}</p>
      </div>
    ))}
  </div>
</section>


    {/* Short About Section */}
      <section className={styles.shortAbout}>
        <div className={styles.aboutText}>
          <h2>About Us</h2>
          <p className={styles.tagline}>
            Quality Repairs, Installations, and Services You Can Count On – Since 1997.
          </p>
          <p className={styles.description}>
           Khadim Engineering Works – Trusted Mechanical Solutions Since 1997
           Founded by Khadim Noor Pasha, Khadim Engineering Works has been providing reliable and high-quality mechanical services for over two decades. We specialize in water submersible pumps, feed-mounted motors, engines (all services and repairs), generators (repairs, used sales, and rental), pipe threading, installations, and much more. Our team of skilled technicians uses modern tools and techniques to ensure that every project is completed efficiently and to the highest standards. Customer satisfaction is at the heart of everything we do, making us a trusted choice for all mechanical needs.</p>

          <button
            className={styles.knowMoreBtn}
            onClick={() => navigate("/about")}
          >
            Know More <FiTool/>
          </button>
        </div>
       
        <div className={styles.aboutImage}>
         
          <img src={aboutImg} className={styles.aboutImg} alt="Workshop Scene" />
        </div>
      </section>

      {/* vision mission sections  */}

        <section className={styles.visionMissionSection}>
      <h2>Our Vision & Mission</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3>Vision</h3>
          <p>
            To be the most trusted and recognized name in mechanical repair and industrial services. We aim to set new benchmarks in precision engineering, customer satisfaction, and innovation, ensuring that every project we handle reflects quality, reliability, and expertise.
          </p>
        </div>
        <div className={styles.box}>
          <h3>Mission</h3>
          <p>
            Deliver reliable, affordable, and timely repair solutions across all mechanical and industrial equipment. Our mission is to empower clients with efficient, sustainable, and innovative services, using skilled technicians and modern technology to exceed expectations on every project.
          </p>
        </div>
      </div>
    </section>
      <AnimatedStats/>

      {/* services section  */}

      <section className={styles.servicesSection}>
      <h2>Our Services</h2>
      <p className={styles.intro}>
        Delivering reliable and high-quality mechanical solutions with expert craftsmanship.
      </p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <TiltCard key={index} className={styles.card}>
            <div className={styles.imageBox}>
              <img src={service.img} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </TiltCard>
        ))}
      </div>

      <button className={styles.viewMoreBtn} onClick={()=> navigate("/services")}>View All Services <FiTool/></button>
    </section>
     
     <Videos/>
    <Testimonials/>
    <FAQs/>
    <ContactForm/> 
    
    </>
  );
}

export default Home;
