// AnimatedStats.jsx
import React, { useEffect, useState, useRef } from "react";
import styles from "./AnimatedStats.module.css";
import { FaTools } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa6";
import { FcDam } from "react-icons/fc";



const statsData = [
  { icon: <FaTools className={styles.AnimatedStatsIcons}/>, label: "Years Experience", value: 20 },
  { icon: <GoGear className={styles.AnimatedStatsIcons}/>, label: "Projects Completed", value: 1000 },
  { icon: <FaRegHandshake className={styles.AnimatedStatsIcons}/>, label: "Satisfied Clients", value: 500 },
  { icon: <FcDam className={styles.AnimatedStatsIcons}/>, label: "Dam Projects", value: 10 } // New stat added
];



function AnimatedStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("statsSection");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && !hasAnimated.current) {
        statsData.forEach((stat, index) => {
          let start = 0;
          const end = stat.value;
          const duration = 1500; // 1.5 seconds
          const increment = end / (duration / 30);

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(counter);
            }
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }, 30);
        });
        hasAnimated.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="statsSection" className={styles.statsContainer}>
      {statsData.map((stat, index) => (
        <div key={index} className={styles.statBox}>
          <span className={styles.icon}>{stat.icon}</span>
          <span className={styles.value}>
            {counts[index]}+
          </span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default AnimatedStats;
