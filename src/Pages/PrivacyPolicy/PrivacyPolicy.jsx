import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <section className={styles.privacyPolicy}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: 22 November 2025</p>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            We value your privacy. This Privacy Policy explains what information we collect through our appointment and query form, how we use it, and how we keep it safe.
          </p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p>
              We only collect the information that you voluntarily submit through our appointment or query form, such as:
            </p>
            <ul className={styles.list}>
              <li>Name</li>
              <li>Phone number</li>
              <li>Your message or service query</li>
            </ul>
            <p>
              Apart from the form, we do not collect any additional personal information, cookies, or tracking data.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p>We use the information you submit strictly for:</p>
            <ul className={styles.list}>
              <li>Responding to your queries</li>
              <li>Confirming your service appointment</li>
              <li>Providing customer support</li>
            </ul>
            <p>
              We do <strong>not</strong> use your data for marketing or promotional activities.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Data Protection</h2>
            <p>
              We ensure that your submitted information is kept secure and is only accessed by authorized personnel for responding to service-related queries. We do not store data unnecessarily.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Third-Party Sharing</h2>
            <p>
              We do <strong>not</strong> sell, share, or trade your personal information with any third party. Your data stays completely safe and private.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Cookies</h2>
            <p>
              Our website does <strong>not</strong> use cookies, tracking tools, analytics, or any type of data monitoring system.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy if necessary. Any updates will be posted on this page with a revised date.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how your information is handled, you can contact us at:
              <br />
              <a href="mailto:privacy@mechanicalsite.com" className={styles.link}>
                privacy@mechanicalsite.com
              </a>
            </p>
          </div>
        </div>

        <div className={styles.footerNote}>
          <p>Thank you for trusting us with your information.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
