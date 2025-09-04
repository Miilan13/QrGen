import React, { useState, useCallback } from "react";
import styles from "./Signup.module.css";

// Import particles for the background effect
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./particles-config"; // Make sure this path is correct

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error on new submission

    // --- Basic Validation ---
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // --- Submission Logic ---
    // In a real app, you would send this data to your backend API
    console.log("Creating account with:", { fullName, email, password });
    alert("Account created successfully! (Check console for data)");
    
    // Optionally clear fields after successful submission
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className={styles["signup-bg"]}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <div className={styles["signup-card"]} style={{ zIndex: 1 }}>
        <h1 className={styles["signup-title"]}>Create Account</h1>
        <form onSubmit={handleSubmit} className={styles["signup-form"]}>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className={styles["signup-input"]}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className={styles["signup-input"]}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={styles["signup-input"]}
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className={styles["signup-input"]}
          />

          {error && <p className={styles["error-message"]}>{error}</p>}
          
          <button type="submit" className={styles["signup-btn"]}>
            Sign Up
          </button>
        </form>
        <div className={styles["signup-links"]}>
            <a href="/login" className={styles["signup-link"]}>Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;