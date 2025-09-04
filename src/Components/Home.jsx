import React, { useState, useRef, useCallback } from "react";
import QRCode from "react-qr-code";
import styles from "./Home.module.css";

// Imports for the particle background
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./particles-config";

const Home = () => {
  const [inputType, setInputType] = useState("text");
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [error, setError] = useState(""); // State for handling user-friendly errors
  const qrRef = useRef();

  // A safe maximum length for QR code data to prevent crashes
  const MAX_QR_LENGTH = 2000;

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        // FIX: Validate the length of the file content
        if (fileContent.length > MAX_QR_LENGTH) {
          setError(`File content is too long! Maximum ${MAX_QR_LENGTH} characters allowed.`);
          setInputValue(""); // Clear the invalid input
        } else {
          setInputValue(fileContent);
          setError(""); // Clear any previous errors
        }
      };
      reader.readAsText(file);
    }
  };

  const handleGenerateQR = () => {
    setError(""); // Clear previous errors first

    if (!inputValue) {
      setError("Please enter some text or upload a file first!");
      return;
    }

    // FIX: Validate the length of the input before generating the QR code
    if (inputValue.length > MAX_QR_LENGTH) {
      setError(`Input is too long! Maximum ${MAX_QR_LENGTH} characters allowed.`);
      return;
    }

    setQrValue(inputValue);
  };

  const handleDownload = () => {
    const svg = qrRef.current.querySelector("svg");
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  // Helper function to clear state when changing input type
  const handleTypeChange = (e) => {
    setInputType(e.target.value);
    setInputValue("");
    setQrValue("");
    setError("");
  }
  
  // Helper function to handle text input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (error) {
      setError(""); // Clear error as user types
    }
  }

  return (
    <div className={styles["home-bg"]}>
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

      <div className={styles["home-card"]} style={{ zIndex: 1 }}>
        <h1 className={styles["home-title"]}>QR Code Generator</h1>

        {/* --- NEWLY ADDED SUBTITLE --- */}
        <p className={styles["home-subtitle"]}>
          Create unlimited QR codes for free. No account needed.
        </p>
        {/* --- END OF NEW SUBTITLE --- */}

        <select
          value={inputType}
          onChange={handleTypeChange}
          className={styles["home-select"]}
        >
          <option value="text">Plain Text</option>
          <option value="link">Link (URL)</option>
          <option value="file">File Upload (.txt)</option>
        </select>

        {inputType === "file" ? (
          <input
            type="file"
            accept=".txt"
            // Add a key to reset the input when the type changes
            key={inputType}
            onChange={handleFileChange}
            className={styles["home-input"]}
          />
        ) : (
          <input
            type={inputType === "link" ? "url" : "text"}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={
              inputType === "link" ? "https://example.com" : "Enter text to encode"
            }
            className={styles["home-input"]}
          />
        )}

        {/* Display the error message in the UI */}
        {error && <p style={{ color: "#ff8a80", marginTop: '0.5rem', marginBottom: '0.5rem' }}>{error}</p>}

        <button onClick={handleGenerateQR} className={styles["home-btn"]}>
          Generate QR
        </button>

        {qrValue && (
          <div className={styles["qr-section"]} ref={qrRef}>
            <div
              style={{
                background: "white",
                padding: "16px",
                borderRadius: "10px",
              }}
            >
              <QRCode value={qrValue} size={180} />
            </div>
            <button
              onClick={handleDownload}
              className={styles["qr-download-btn"]}
            >
              Download SVG
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
