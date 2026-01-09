/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import firstVideo from "../../assets/banner/Manufacturing Operational Excellence.mp4";
import seconVideo from "../../assets/banner/Neuroscience Meets Manufacturing.mp4";
import thirdVideo from "../../assets/banner/Empowering Global Leaders.mp4";
import { useTranslation } from "react-i18next";

// Definir el tipo para los slides
interface Slide {
  id: number;
  videoSrc: string;
  duration: number;
  title: string;
  description: string;
  intro: string;
  buttonText: string;
  buttonAction: "manufacturing" | "brain-lean" | "team";
}

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const navigate = useNavigate();

  // Lista de slides con videos locales y contenido específico
  const slides: Slide[] = [
    {
      id: 1,
      videoSrc: firstVideo,
      duration: 7000,
      title: t("TITLE_ONE"),
      description: t("DESCRIPTION_ONE"),
      intro: t("INTRO_ONE"),
      buttonText: t("BUTTON_TEXT_ONE"),
      buttonAction: "manufacturing",
    },
    {
      id: 2,
      videoSrc: seconVideo,
      duration: 7000,
      title: t("TITLE_TWO"),
      description: t("DESCRIPTION_TWO"),
      intro: t("INTRO_TWO"),
      buttonText: t("BUTTON_TEXT_TWO"),
      buttonAction: "brain-lean",
    },
    {
      id: 3,
      videoSrc: thirdVideo,
      duration: 7000,
      title: t("TITLE_THREE"),
      description: t("DESCRIPTION_THREE"),
      intro: t("INTRO_THREE"),
      buttonText: t("BUTTON_TEXT_THREE"),
      buttonAction: "team",
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slides[currentSlide].duration);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoRotating, slides]);

  // Cambiar slide manualmente
  const changeSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoRotating(false);

    setTimeout(() => {
      setIsAutoRotating(true);
    }, 30000);
  }, []);

  const nextSlide = useCallback(() => {
    changeSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, changeSlide, slides.length]);

  const prevSlide = useCallback(() => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, changeSlide, slides.length]);

  // Manejar clic en botones
  const handleButtonClick = (
    action: "manufacturing" | "brain-lean" | "team"
  ) => {
    switch (action) {
      case "manufacturing":
        navigate("/manufacturing");
        break;
      case "brain-lean": {
        // Scroll a la sección BrainLean
        const brainLeanSection = document.getElementById("brain-lean");
        if (brainLeanSection) {
          brainLeanSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
      case "team":
        navigate("/team");
        break;
    }
  };

  const currentContent = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Videos - Solo esto cambia */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl -m-4 z-0" />

      {/* Videos con transición */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            zIndex: index === currentSlide ? 1 : 0,
            display: index === currentSlide ? "block" : "none",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* Video local */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover"
              key={slide.id}
            >
              <source src={slide.videoSrc} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          </div>
        </motion.div>
      ))}

      {/* Content - DINÁMICO con cada slide */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <motion.h1
              className="text-2xl md:text-4xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {currentContent.title}
              <span className="text-2xl md:text-4xl block text-[#eb6211]">
                {currentSlide === 0
                  ? t("SUBTITLE_ONE")
                  : currentSlide === 1
                  ? t("SUBTITLE_TWO")
                  : t("SUBTITLE_THREE")}
              </span>
            </motion.h1>

            <motion.p
              className="text-sm md:text-xl text-white max-w-2xl font-bold italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              "{currentContent.description}"
            </motion.p>

            <motion.p
              className="text-sm sm:text-base text-white max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {currentContent.intro}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.button
                onClick={() => handleButtonClick(currentContent.buttonAction)}
                className="bg-transparent border-2 border-white text-white p-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentContent.buttonText}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Controles solo para cambiar videos */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4 z-30">

        {/* Controles de navegación */}
        <div className="flex items-center space-x-8">
          <motion.button
            onClick={prevSlide}
            className="text-white hover:text-[#eb6211] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Indicadores de slide */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#eb6211] w-8"
                    : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            className="text-white hover:text-[#eb6211] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Elementos decorativos (estáticos) */}
      <div className="absolute top-1/4 right-8 hidden lg:block z-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
          className="w-16 h-16 border border-[#eb6211]/30 rounded-lg flex items-center justify-center"
        >
          <svg
            className="w-8 h-8 text-[#eb6211]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 left-8 hidden lg:block z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-[#eb6211]/20 rounded-full"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#eb6211] rounded-full"></div>
        </motion.div>
      </div>

      {/* Conexiones neuronales animadas (estáticas) */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#eb6211] rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
