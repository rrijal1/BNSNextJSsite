"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+9779841207231";
    const message = "Hello! I'm interested in Bloom Nepal School."; // Replace with your desired message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      className="fixed bottom-24 right-8 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </motion.button>
  );
};

export default WhatsAppButton;
