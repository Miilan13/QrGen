import React from 'react';

const Footer = () => {
  return (
    // --- Footer styled with a semi-transparent, blurred background ---
    <footer className="bg-slate-900/70 backdrop-blur-sm text-white p-8 border-t border-blue-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* --- Column 1: Brand Info --- */}
        <div>
          <h3 className="text-xl font-bold mb-2">QR Forge</h3>
          <p className="text-gray-400 text-sm">
            Creating dynamic and beautiful QR codes with ease.
          </p>
        </div>
        
        {/* --- Column 2: Quick Links --- */}
        <div>
          <h3 className="text-xl font-bold mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-300 hover:text-blue-400 transition">About Us</a>
            </li>
            <li>
              <a href="/pricing" className="text-gray-300 hover:text-blue-400 transition">Pricing</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
            </li>
          </ul>
        </div>
        
        {/* --- Column 3: Social Media --- */}
        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://quiet-peony-ddcc5d.netlify.app/" className="text-gray-300 hover:text-blue-400 transition" target='_blank'>Portfolio</a>
            <a href="https://www.linkedin.com/in/solanki-milan-8a98b5213/" className="text-gray-300 hover:text-blue-400 transition" target='_blank'>LinkedIn</a>
            <a href="https://github.com/Miilan13" className="text-gray-300 hover:text-blue-400 transition" target='_blank'>GitHub</a>
          </div>
        </div>
      </div>
      
      {/* --- Bottom copyright section --- */}
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} QR Forge. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;