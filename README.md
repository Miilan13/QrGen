
# QR Code Generator Web App

A modern, animated, and fully responsive QR code generator built with React, Vite, and Tailwind CSS. Features a world-class dark blue UI, animated particle backgrounds, and beautiful glassmorphism cards. Includes registration, template selection, billing, and PDF/print functionality (MERN backend planned).

## Features
- Generate QR codes for text, links, or uploaded files
- Download QR codes as SVG
- Animated dark blue background with particles
- Beautiful glassmorphism card layout
- Responsive design for all devices
- Modern macOS-style dropdowns and buttons
- Pricing page with dark blue theme
- Fixed navbar and custom footer
- Built with React, Vite, Tailwind CSS
- (Planned) Full MERN backend for registration, billing, and PDF/print

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```

### Folder Structure
```
Qr/
├── src/
│   ├── Components/
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   ├── Pricing.jsx
│   │   ├── Pricing.module.css
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── particles-config.js
│   │   └── ...
│   ├── App.jsx
│   ├── App.css
│   └── ...
├── package.json
└── README.md
```

## Customization
- All colors and UI elements use only blue and dark blue tones for a consistent theme.
- Easily update particle background via `particles-config.js`.
- Add backend features in the MERN stack as needed. 
