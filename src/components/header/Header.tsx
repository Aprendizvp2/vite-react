import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/logo/logo-manufacturing.png";
import LanguageSelectorModal from "../language-selector-modal/LanguageSelectorModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Approach",
    "Contact",
    "Get Started",
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 transition-all duration-300 bg-primary-blue py-3"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
            className="w-36 sm:w-52"
            src={logo}
            alt="NeuroManufacturing Institut"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 sm:gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-xs sm:text-base font-medium transition-colors text-white hover:text-[#eb6211]
                  ${
                    item === "Get Started"
                      ? "hover:text-white bg-primary-orange px-8 py-4 hover:bg-[#d45a0f] rounded-lg"
                      : ""
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Integración del LanguageSelectorModal */}
            <LanguageSelectorModal />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            {/* Language Selector para móvil */}
            <LanguageSelectorModal />

            <motion.button
              className="text-white"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-primary-blue/95 backdrop-blur-sm mt-4 rounded-lg"
            >
              <div className="flex flex-col space-y-2 py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className={`px-6 py-3 font-medium text-white hover:text-[#eb6211] transition-colors
                      ${
                        item === "Get Started"
                          ? "bg-primary-orange hover:bg-[#d45a0f] text-white rounded-lg mx-4 mt-2 text-center"
                          : "hover:bg-white/10"
                      }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
