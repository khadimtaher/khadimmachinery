"use client";

import { useState } from "react";
import styles from "./ForgotPassword.module.css"

export default function ForgotPasswordModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/password-reset/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Password reset link bhej diya gaya!");
      } else {
        const data = await res.json();
        setMessage(data.email?.[0] || "Error ho gaya");
      }
    } catch {
      setMessage("Server se connect nahi ho paya");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Password Reset</h2>
        <p className={styles.modalText}>
          Apna email daalein, reset link bhej denge.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.modalInput}
            placeholder="admin@example.com"
            required
          />

          {message && (
            <div className={`${styles.message} ${message.includes("bhej") ? styles.success : styles.error}`}>
              {message}
            </div>
          )}

          <div className={styles.modalButtons}>
            <button type="button" onClick={onClose} className={styles.btnCancel}>
              Cancel
            </button>
            <button type="submit" disabled={loading} className={styles.btnSend}>
              {loading ? "Bhej rahe..." : "Link Bhejo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}