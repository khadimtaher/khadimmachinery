import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import style from "./ContactForm.module.css";
import addressImg from "../../Images/addressImg.jpeg";


// react icons 
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

// Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${style.toast} ${style[type]} ${style.show}`}>
      <span>{message}</span>
      <button onClick={onClose} className={style.closeBtn} aria-label="Close">
        ×
      </button>
    </div>
  );
};


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
      className={`${style.hover3d} ${className}`}
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


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const isSubmittingRef = useRef(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on typing
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
    if (!validate()) return;

    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;

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
        isSubmittingRef.current = false;
      });
  };

  return (
    <>
      <section className={style.contactSectionContainer}>
     <div className={style.leftSide}>
      <TiltCard>

  <img src={addressImg} alt="Workshop" className={style.contactImage} />
      </TiltCard>
  <div className={style.addressBox}>
    <h3>Our Address</h3>
    <p>Khadim Engineering Works</p>
    <p>Terna Colony Opposit, Bidar Road, TQ Nilanga Dist Latur</p>
    <p>Nilanga, Maharashtra, 413521</p>
    <p>Phone: +91 9561666568</p>
    <p>Phone: +91 8855965998</p>     
 

  {/* Social Media & Actions */}
  <div className={style.socialActions}>
    <a
      href="https://wa.me/919561666568"
      target="_blank"
      rel="noopener noreferrer"
      className={style.socialBtn}
    >
      <FaWhatsapp  className={style.icon}/>
    </a>

    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={style.socialBtn}
    >
     <FaInstagram  className={style.icon}/>
    </a>

    <a href="tel:+919561666568" className={style.socialBtn}>
      <FaPhone className={style.icon}/>
    </a>

    <a
      href="https://www.google.com/maps/search/?api=1&query=Terna+Colony+Opposit+Bidar+Road+Nilanga+Latur"
      target="_blank"
      rel="noopener noreferrer"
      className={style.socialBtn1}
    >
      <GoLocation className={style.icon}/> Get Location
    </a>
  </div>
</div>
 </div>
    

        <div className={style.rightSide}>
          <h2 className={style.heading}>Contact Us</h2>
          <p className={style.intro}>
            We’d love to hear from you — reach out with your queries or service requests.
          </p>

          <form onSubmit={handleSubmit} className={style.contactForm} noValidate>
            <div className={style.formRow}>
              <div className={style.formGroup}>
                <label htmlFor="name">Name*</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? style.inputError : style.input}
                  placeholder="John Doe"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <span id="name-error" className={style.error} aria-live="polite">
                  {errors.name || "\u00A0"}
                </span>
              </div>

              <div className={style.formGroup}>
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? style.inputError : style.input}
                  placeholder="john@example.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <span id="email-error" className={style.error} aria-live="polite">
                  {errors.email || "\u00A0"}
                </span>
              </div>
            </div>

            <div className={style.formRow}>
              <div className={style.formGroup}>
                <label htmlFor="phone">Phone*</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? style.inputError : style.input}
                  placeholder="9876543210"
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                <span id="phone-error" className={style.error} aria-live="polite">
                  {errors.phone || "\u00A0"}
                </span>
              </div>

              <div className={style.formGroup}>
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={style.input}
                  placeholder="Optional"
                />
                <span className={style.error}>&nbsp;</span>
              </div>
            </div>

            <div className={style.formGroup}>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={
                  errors.message
                    ? `${style.textarea} ${style.inputError}`
                    : style.textarea
                }
                rows="4"
                placeholder="How can we help you?"
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <span id="message-error" className={style.error} aria-live="polite">
                {errors.message || "\u00A0"}
              </span>
            </div>

            <button
              type="submit"
              className={style.submitBtn}
              disabled={isSubmittingRef.current}
              aria-label={isSubmittingRef.current ? "Sending message" : "Send message"}
            >
              {isSubmittingRef.current ? (
                <>
                  <span className={style.spinner}></span> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}


      
    </>
  );
};

export default ContactSection;