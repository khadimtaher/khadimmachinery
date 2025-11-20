import React from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loaderContainer}>
      {/* Floating Bubbles Background */}
      <div className={styles.bubbles}>
        {[...Array(12)].map((_, i) => (
          <span key={i} style={{ "--i": i + 1 }}></span>
        ))}
      </div>

      {/* Main KEW Text with Zoom + Glow */}
      <div className={styles.content}>
        <h1 className={styles.kewText}>KEW</h1>
       
      </div>
    </div>
  );
};

export default LoadingScreen;
