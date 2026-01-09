import { motion } from "framer-motion";

import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import logo from "../../assets/logo/logo-manufacturing.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiLinkedin, href: "#", name: "LinkedIn" },
    { icon: FiTwitter, href: "#", name: "Twitter" },
    { icon: FiFacebook, href: "#", name: "Facebook" },
  ];

  return (
    <footer className="bg-[#1A237E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-12 w-full py-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                className="w-60"
                src={logo}
                alt="NeuroManufacturing Institut"
              />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed my-6 max-w-xl">
                Transforming manufacturing operations through strategic clarity,
                operational excellence, and cognitive preparation.
              </p>
            </motion.div>
          </div>
          <div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-3 bg-[#2c3c94] bg-opacity-10 rounded-lg hover:bg-[#FF6F00] transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white border-opacity-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Neuromanufacturing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
