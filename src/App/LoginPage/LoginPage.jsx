import { useState } from "react";
import ForgotPasswordModal from "../ForgotPassword/ForgotPassword";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Validation states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Email validation
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email zaruri hai";
    if (!emailRegex.test(value)) return "Sahi email daalein";
    return "";
  };

  // Password validation
  const validatePassword = (value) => {
    if (!value) return "Password zaruri hai";
    if (value.length < 6) return "Password kam se kam 6 characters ka hona chahiye";
    return "";
  };

 const handleLogin = async (e) => {
  e.preventDefault();
  setEmailError("");
  setPasswordError("");
  setError("");
  setLoading(true);

  try {
    const res = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim(),      // ← email bhej rahe hain
        password: password
      }),
    });

    const data = await res.json();

    // YEH GALTI THI — custom serializer mein "detail" nahi hota!
    if (!res.ok) {
      // Ab error message serializer se directly aayega
      throw new Error(data.message || data.detail || "Login failed");
    }

    // Success: token + user info already aaya hai
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);

    // Ab user info alag se fetch karne ki zarurat nahi!
    // Kyunki humara custom serializer already user data bhej raha hai
    const userData = data.user;

    if (userData.is_staff || userData.is_superuser) {
      window.location.href = "/dashboard";
    } else {
      setError("Only Admin allowed hai!");
      localStorage.clear();
    }

  } catch (err) {
    setError(err.message || "Email ya password galat hai");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <div className={styles.container}>
        <div className={styles.glassCard}>
          {/* Logo + Title */}
          <div className={styles.header}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>A</div>
            </div>
            <h1 className={styles.title}>Admin Portal</h1>
            <p className={styles.subtitle}>Secure Access • Super Admin Only</p>
          </div>

          <form onSubmit={handleLogin} className={styles.form}>
            {/* Email Field */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className={`${styles.input} ${emailError ? styles.inputError : ""}`}
                placeholder="admin@company.com"
                autoComplete="off"
              />
              {emailError && <p className={styles.fieldError}>{emailError}</p>}
            </div>

            {/* Password Field */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError("");
                }}
                className={`${styles.input} ${passwordError ? styles.inputError : ""}`}
                placeholder="Minimum 6 characters"
              />
              {passwordError && <p className={styles.fieldError}>{passwordError}</p>}
            </div>

            {/* Server Error */}
            {error && (
              <div className={styles.serverError}>
                <span>{error}</span>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={styles.loginBtn}
            >
              {loading ? (
                <span className={styles.loader}></span>
              ) : (
                "Login as Admin"
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className={styles.forgotLink}
            >
              Password bhool gaye?
            </button>
          </form>

          <p className={styles.footerText}>
            © 2025 AdminPro • Protected Access
          </p>
        </div>
      </div>

      {showModal && <ForgotPasswordModal onClose={() => setShowModal(false)} />}
    </>
  );
}