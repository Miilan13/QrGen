import React from "react";

const Contact = () => {
  return (
    // --- Added pt-28 to push content below fixed header ---
    <div className="min-h-screen bg-[#02042b] flex flex-col items-center justify-center py-4 px-2 pt-28">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Contact Us
        </h1>

        <form className="bg-slate-900/50 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-blue-800">
          {/* Name */}
          <div className="mb-6">
            <label className="block text-blue-200 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-slate-800 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-blue-200 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-slate-800 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-blue-200 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-slate-800 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4a90e2] text-white py-3 rounded-lg font-semibold hover:bg-[#2948ff] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
