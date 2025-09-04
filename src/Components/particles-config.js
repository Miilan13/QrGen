const particlesConfig = {
  background: {
    color: {
      value: "#02042b", // Match the main background
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#4a90e2", // Use the new blue accent color
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.15, // Slightly reduced opacity for a softer look
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1, // Slightly slower speed
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 4 },
    },
  },
  detectRetina: true,
};

export default particlesConfig;