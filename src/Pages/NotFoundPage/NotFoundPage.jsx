import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import notfound from "./Imgs/notfound.png";
// Agar image public folder mein hai toh direct aise use karo
// ya import bhi kar sakte ho agar src folder mein hai

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Previous page pe le jayega
  };

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.content}>
        {/* 404 Image */}
        <img
          src={notfound} 
          alt="404 - Page Not Found"
          className={styles.errorImage}
        />

        {/* Text */}
        <h1 className={styles.title}>Oops! Page Not Found</h1>
        <p className={styles.description}>
         The requested page could not be located. Please check the URL or return to the homepage.
        </p>

        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <button onClick={goBack} className={styles.backBtn}>
            ← Go Back
          </button>

          <Link to="/" className={styles.homeBtn}>
            Go Home
          </Link>
        </div>
      </div>

      {/* Optional: Fun little animation */}
      <div className={styles.floatingShapes}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default NotFoundPage;