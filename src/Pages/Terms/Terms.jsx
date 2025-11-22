import React from "react";
import style from "./Terms.module.css";

function Terms() {
  return (
    <section className={style.terms}>
      <div className={style.container}>
        {/* Banner/Header */}
        <div className={style.header}>
          <h1 className={style.title}>Terms & Conditions</h1>
          <p className={style.lastUpdated}>Last Updated: 22 November 2025</p>
        </div>

        {/* Main Content */}
        <div className={style.content}>
          <section className={style.section}>
            <h2 className={style.sectionTitle}>1. Introduction</h2>
            <p className={style.text}>
              Welcome to <strong>Khadim Engineering Works</strong>. By accessing or using our
              website and services, you agree to comply with and be bound by the
              following Terms and Conditions. If you do not agree, please do not
              use our website.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>2. Services</h2>
            <p className={style.text}>
              We provide water pump repair, generator repair, pipe threading,
              welding, and related services. All service availability depends on
              technician schedule and location.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>3. Payments</h2>
            <p className={style.text}>
              Service charges may vary based on repair type, parts, and labour
              cost. Customers must verify and confirm charges before service
              begins. <strong>No refund</strong> will be provided once the service is completed.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>4. Warranty</h2>
            <p className={style.text}>
              Warranty on repair work depends on the type of service. Electrical
              or mechanical parts replaced during repair may come with separate
              manufacturer warranty where applicable.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>5. User Responsibilities</h2>
            <p className={style.text}>
              Users must provide accurate information, address, contact details,
              and confirm technician visit timings. Any miscommunication or wrong
              details may lead to service cancellation or extra charges.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>6. Appointments & Cancellations</h2>
            <p className={style.text}>
              For any cancellation, the user should notify at least <strong>1 hour</strong> before
              the scheduled visit. Emergency call-outs may include additional
              charges.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>7. Privacy Policy</h2>
            <p className={style.text}>
              We do not share any personal information with third parties. Contact
              details are used only for service and communication purposes.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>8. Limitation of Liability</h2>
            <p className={style.text}>
              We are not responsible for damages caused by external factors,
              improper usage, or pre-existing faults in machines or equipment.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>9. Changes to Terms</h2>
            <p className={style.text}>
              We reserve the right to update these Terms & Conditions anytime. It
              is the user’s responsibility to review them periodically.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>10. Contact Information</h2>
            <p className={style.text}>
              If you have any questions, feel free to contact us at:
              <br />
              <strong className={style.highlight}>Phone: +91 9561666568</strong>
              <br />
              <strong className={style.highlight}>Location: Khadim Engineering Works, Terna Colony Opposite Bidar Road, Nilanga</strong>
            </p>
          </section>
        </div>

        <div className={style.footerNote}>
          <p>Thank you for choosing Khadim Engineering Works!</p>
        </div>
      </div>
    </section>
  );
}

export default Terms;