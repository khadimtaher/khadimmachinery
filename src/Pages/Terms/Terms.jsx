import React from "react";
import style from "./Terms.module.css";

function Terms() {
  return (
    <section className={style.terms}>
      <div className={style.container}>
        {/* Banner/Header */}
        <div className={style.header}>
          <h1 className={style.title}>Terms & Conditions</h1>
          <p className={style.lastUpdated}>Last Updated: 18 february 2026</p>
        </div>

        {/* Main Content */}
        <div className={style.content}>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>1. Introduction</h2>
            <p className={style.text}>
              Welcome to <strong>Khadim Engineering Works</strong>. By accessing or using our
              website and services, you agree to comply with these Terms & Conditions. 
              If you do not agree, please refrain from using our services.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>2. Services</h2>
            <p className={style.text}>
              We offer repair and maintenance services for water pumps, generators, 
              pipe threading, welding, and related equipment. Service availability 
              may vary based on technician schedules and location.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>3. Payments</h2>
            <p className={style.text}>
              Service charges depend on repair type, parts, and labour. Customers should 
              verify and approve costs before service begins. <strong>No refunds</strong> 
              are provided after completion of the service.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>4. Warranty</h2>
            <p className={style.text}>
              Warranty on repairs varies based on the service type. Any replaced parts may 
              have separate manufacturer warranties where applicable.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>5. User Responsibilities</h2>
            <p className={style.text}>
              Users must provide accurate information including address and contact details. 
              Confirm technician visit timings. Incorrect information may result in service 
              delays or additional charges.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>6. Appointments & Cancellations</h2>
            <p className={style.text}>
              Cancellations should be notified at least <strong>1 hour</strong> before the 
              scheduled visit. Emergency or same-day call-outs may incur additional charges.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>7. Privacy Policy</h2>
            <p className={style.text}>
              We do not share personal information with third parties. Contact information 
              is used solely for service coordination and communication purposes.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>8. Limitation of Liability</h2>
            <p className={style.text}>
              We are not responsible for damages caused by external factors, improper use, 
              or pre-existing faults in machines or equipment.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>9. Changes to Terms</h2>
            <p className={style.text}>
              We reserve the right to update these Terms & Conditions at any time. Users 
              are responsible for reviewing them periodically.
            </p>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>10. Contact Information</h2>
            <p className={style.text}>
              For any questions, contact us at:
              <br />
              <strong className={style.highlight}>Phone: +91 9561666568</strong>
              <br />
              <strong className={style.highlight}>
                Address: Khadim Engineering Works, Terna Colony Opposite Bidar Road, Nilanga
              </strong>
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
