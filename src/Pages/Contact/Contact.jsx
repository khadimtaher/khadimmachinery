import React, { useState, useRef, useEffect } from "react";
import styles from './Contact.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import emailjs from "emailjs-com";

// Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]} ${styles.show}`}>
      <span>{message}</span>
      <button onClick={onClose} className={styles.closeBtn} aria-label="Close">
        ×
      </button>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // For spinner + disable

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.phone.trim()) tempErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, "")))
      tempErrors.phone = "Phone must be 10 digits";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const closeToast = () => setToast(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true); // Show spinner + disable button

    emailjs
      .send("service_v7e5tc8", "template_ulkzmdj", formData, "DNX-eiIZoqEQ2B2k8")
      .then(() => {
        return emailjs.send(
          "service_v7e5tc8",
          "template_s1c0fsu",
          formData,
          "DNX-eiIZoqEQ2B2k8"
        );
      })
      .then(() => {
        setFormData({ name: "", email: "", phone: "", address: "", message: "" });
        setErrors({});
        showToast("Thank you! Your message has been sent successfully.", "success");
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        showToast("Failed to send message. Please try again.", "error");
      })
      .finally(() => {
        setIsSubmitting(false); // Hide spinner + enable button
      });
  };

  return (
    <div className={styles.contactPage}>
      {/* Toast */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <div className={styles.container}>
        {/* CONTACT INFO + FORM */}
        <section className={styles.contactSection}>
          <div className={styles.infoGrid}>
            {/* Info Cards */}
            <div className={`${styles.infoCard} ${styles.hover3d}`}>
              <div className={styles.iconWrapper}><FaPhone /></div>
              <h3>Call Us</h3>
              <p>+91 9561666568</p>
              <p>+91 8855965998</p>
            </div>


            <div className={`${styles.infoCard} ${styles.hover3d}`}>
              <div className={styles.iconWrapper}><FaMapMarkerAlt /></div>
              <h3>Visit Us</h3>
              <p>Opposite Terna Colony, Bidar Road Nilanga</p>
              <p>Nilanga Dist Latur, 413521</p>
            </div>

            <div className={`${styles.infoCard} ${styles.hover3d}`}>
              <div className={styles.iconWrapper}><FaClock /></div>
              <h3>Working Hours</h3>
               <p>Monday – Sunday: <strong>9:00 AM – 10:00 PM</strong></p>
              
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Send us a Message</h2>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? styles.error : ""}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.error : ""}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? styles.error : ""}
                />
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? styles.error : ""}
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              {/* SUBMIT BUTTON WITH SPINNER */}
              <button
                type="submit"
                className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ""}`}
                disabled={isSubmitting}
              >
                <div className={styles.spinner}></div>
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </section>

        {/* GOOGLE MAP */}
 <section className={styles.mapSection}>
  <div className={styles.mapWrapper}>
    <iframe
      title="RepairHub Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5362.437427050427!2d76.75065110217268!3d18.126292392129898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf6dd69b7a908f%3A0xd8afbcd2b80550bf!2sKhadim%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1763554946122!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border:  0}}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
    {/* 3 links call, whatsapp, location  */}
   
</section>

      </div>
    </div>
  );
};

export default Contact;