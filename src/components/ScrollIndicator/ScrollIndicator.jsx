import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css"; // module CSS import

function ScrollIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.bar}
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </div>
  );
}

export default ScrollIndicator;
