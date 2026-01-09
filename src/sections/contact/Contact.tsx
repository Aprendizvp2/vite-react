import React, { useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "../../components/toast/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "🚧 Form submission not implemented yet",
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@neuromanufacturing.com",
      href: "mailto:contact@neuromanufacturing.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Manufacturing Ave, Industrial District",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16 px-2"
        >
          <h2 className="text-xl md:text-4xl font-bold text-[#1A237E] mb-4 md:mb-6">
            Let's Start Your Transformation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#37474F] max-w-3xl mx-auto leading-relaxed px-2">
            Ready to achieve operational excellence? Get in touch with our team
            of experts today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Columna izquierda - Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-gradient-to-br from-[#1A237E] to-[#283593] rounded-xl md:rounded-2xl p-8 xl:p-12 text-white h-full">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                We're here to help you transform your manufacturing operations.
                Reach out to discuss your challenges and discover how we can
                drive excellence together.
              </p>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 hover:text-black text-white group hover:bg-white hover:bg-opacity-10 p-3 sm:p-4 rounded-lg md:rounded-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 p-2 sm:p-3 bg-[#FF6F00] rounded-lg md:rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon
                        size={20}
                        className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base md:text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base break-words">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 md:mt-12 p-3 sm:p-4 bg-[#3c44a4] bg-opacity-10 rounded-lg md:rounded-xl backdrop-blur-sm border border-white border-opacity-20">
                <h4 className="font-semibold text-sm sm:text-base md:text-lg mb-2">
                  Office Hours
                </h4>
                <p className="text-gray-200 text-xs sm:text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-200 text-xs sm:text-sm">
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#1A237E] mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#1A237E] mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-[#1A237E] mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#1A237E] mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#1A237E] mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your manufacturing challenges and goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6F00] hover:bg-[#E65100] text-white py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
