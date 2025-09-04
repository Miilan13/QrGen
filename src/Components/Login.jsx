import React, { useState, useCallback } from "react";
import styles from "./Login.module.css";

// Import particles for the background effect
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./particles-config"; // Assuming this is in the same folder

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    // In a real app, you would handle authentication here
    console.log("Logging in with:", { email, password });
    alert("Login Successful! (Check console for data)");
  };

  return (
    <div className={styles["login-bg"]}>
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
      <div className={styles["login-card"]} style={{ zIndex: 1 }}>
        <h1 className={styles["login-title"]}>Welcome Back</h1>
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className={styles["login-input"]}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={styles["login-input"]}
            required
          />
          <button type="submit" className={styles["login-btn"]}>
            Login
          </button>
        </form>
        <div className={styles["login-links"]}>
            <a href="#forgot" className={styles["login-link"]}>Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;