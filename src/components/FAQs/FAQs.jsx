import React, { useState } from "react";
import styles from "./FAQs.module.css";

const faqData = [
  {
    question: "What types of pumps and generators do you repair?",
    answer:
      "We repair all types of pumps and generators including submersible, Kirloskar, Mahindra, and water dam generators. Both industrial and domestic repairs are handled by our skilled team.",
  },
  {
    question: "Do you provide on-site repair services?",
    answer:
      "Yes, our technicians can visit your site for inspection and repair. We also offer pick-up and delivery options for larger equipment.",
  },
  {
    question: "How long does a typical repair take?",
    answer:
      "Most small motor and pump repairs are completed within 24 to 48 hours. For heavy or custom repairs, we provide a clear timeline after inspection.",
  },
  {
    question: "Do you offer maintenance contracts for industries?",
    answer:
      "Yes, we offer annual maintenance contracts (AMC) for factories, water dams, and commercial setups to ensure smooth operation of all machinery.",
  },
  {
    question: "How can I contact you for emergency repair?",
    answer:
      "You can reach us directly through our contact number or by filling the form on our Contact page. We provide emergency assistance for critical breakdowns.",
  },
];

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      <p className={styles.subtext}>
        Find answers to the most common queries about our repair and maintenance services.
      </p>

      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <div className={styles.question} onClick={() => toggleFAQ(index)}>
              <h4>{item.question}</h4>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={styles.answer}
              style={{
                maxHeight: activeIndex === index ? "300px" : "0px",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;
