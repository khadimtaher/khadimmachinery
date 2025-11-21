import { useState, useEffect } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "mr", label: "मराठी" },        // ← Marathi added
  { code: "hi", label: "हिन्दी" },
  { code: "ur", label: "اردو" },
  { code: "te", label: "తెలుగు" },
  { code: "ta", label: "தமிழ்" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
];

export default function CustomLanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("English"); // ← Default English

  // ===== GOOGLE TRANSLATE SCRIPT LOAD (100% WORKING) =====
  useEffect(() => {
    // Global init function banao (Google ko yahi chahiye)
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,mr,hi,ur,te,ta,kn,ml,gu,pa",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Script sirf ek baar load ho
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // ===== LANGUAGE CHANGE (GUARANTEED WORKING) =====
  const changeLanguage = (code, label) => {
    const combo = document.querySelector(".goog-te-combo");
    if (!combo) {
      alert("Translate load ho raha hai... 2 second wait karein");
      return;
    }

    combo.value = code;
    combo.dispatchEvent(new Event("change", { bubbles: true }));

    // Extra force trigger (kabhi-kabhi zaroori hota hai)
    if (typeof combo.onchange === "function") combo.onchange();

    setActive(label);
    setOpen(false);
  };

  // ===== AUTO DETECT CURRENT LANGUAGE (jab page refresh ho) =====
  useEffect(() => {
    const interval = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo && combo.value && combo.value !== "" && combo.value !== "en") {
        const found = languages.find((l) => l.code === combo.value);
        if (found) {
          setActive(found.label);
          clearInterval(interval);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hidden div — Google isko target karta hai */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* PREMIUM DROPDOWN */}
      <div style={{ position: "relative", display: "inline-block" }}>
        <div
          onClick={() => setOpen(!open)}
          style={{
            padding: "10px 20px",
            background: "white",
            color: "#8a2be2",
            borderRadius: "16px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
            minWidth: "180px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 25px #892be27e",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "all 0.3s ease",
          }}
        >
          <span>{active}</span>
          <span
            style={{
              marginLeft: "10px",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              fontSize: "14px",
            }}
          >
            ▼
          </span>
        </div>

        {/* Dropdown Menu */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: "65px",
              left: 0,
              width: "100%",
              background: "rgba(20, 25, 40, 0.95)",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(15px)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              zIndex: 99999,
            }}
          >
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => changeLanguage(lang.code, lang.label)}
                style={{
                  padding: "7px 15px",
                  color: active === lang.label ? "#60a5fa" : "#e2e8f0",
                  background: active === lang.label ? "rgba(96, 165, 250, 0.15)" : "transparent",
                  cursor: "pointer",
                  fontWeight: active === lang.label ? "bold" : "500",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (active !== lang.label) {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== lang.label) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {lang.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}