import React from 'react';

const About = () => {
  return (
    // --- Main background container, same as other pages ---
    <div className="min-h-screen bg-[#02042b] flex items-center justify-center py-12 px-6">
      
      {/* --- Content card with glassmorphism effect --- */}
      <div className="max-w-4xl w-full bg-slate-900/50 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 border border-blue-800">
        
        {/* --- Page Title --- */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          About Us
        </h1>
        
        {/* --- Introductory paragraph --- */}
        <p className="text-lg text-blue-200 text-center mb-8">
          We are dedicated to providing the best tools to bring your ideas to life. Our mission is to blend powerful technology with elegant design.
        </p>
        
        {/* --- A simple two-column section for more details --- */}
        <div className="mt-10 grid md:grid-cols-2 gap-8 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Our Vision</h2>
            <p>
              To create intuitive and accessible digital solutions that empower creators and businesses worldwide. We believe in simplicity and innovation, ensuring that our products are not only powerful but also a joy to use.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Our Technology</h2>
            <p>
              We leverage cutting-edge technologies like React, Node.js, and modern CSS frameworks to build fast, reliable, and scalable applications. Our commitment to quality drives us to stay ahead of the technology curve.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;