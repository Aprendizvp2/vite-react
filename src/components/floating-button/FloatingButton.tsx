import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const phoneNumber = "+41764125514";
  const whatsappMessage = encodeURIComponent(
    "Hello! I would like to get more information about NeuroManufacturing Institut."
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-2 right-2 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={openWhatsApp}
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Main Button */}
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg hover:shadow-xl transition-shadow">
            <FaWhatsapp className="w-7 h-7 text-white" />
          </div>

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-green-500"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </motion.div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-18 right-2 z-40"
          >
            <motion.button
              onClick={scrollToTop}
              className="flex items-center justify-center w-14 h-14 p-4 rounded-full bg-gradient-to-br from-[#222f8c] to-[#1a237e] shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp className="w-7 h-7 text-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
