import { motion } from "framer-motion";
import {
  Brain,
  Trophy,
  ShieldCheck,
  UserCheck,
  Share2,
  Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const BrainLean = () => {
  const navigate = useNavigate();

  const steps = [
    {
      letter: "B",
      title: "Barrières cognitives identifiées",
      icon: Brain,
      description:
        "Analyse des freins psychologiques et cognitifs qui bloquent l'adoption du changement.",
      color: "#1A237E",
    },
    {
      letter: "R",
      title: "Récompenses neuropsychologiques",
      icon: Trophy,
      description:
        "Conception de systèmes de gratification alignés sur les circuits de la récompense du cerveau.",
      color: "#FF6F00",
    },
    {
      letter: "A",
      title: "Ambiance psychologique",
      icon: ShieldCheck,
      description:
        "Création d'un environnement de sécurité psychologique favorisant la prise de risque et l'innovation.",
      color: "#37474F",
    },
    {
      letter: "I",
      title: "Interventions comportementales",
      icon: UserCheck,
      description:
        "Mise en place d'actions ciblées pour modifier les routines et ancrer les bonnes pratiques.",
      color: "#1A237E",
    },
    {
      letter: "N",
      title: "Nouveaux habitudes",
      icon: Share2,
      description:
        "Consolidation neurologique des nouveaux comportements pour assurer la pérennité des résultats.",
      color: "#FF6F00",
    },
  ];

  return (
    <section id="brain-lean" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-2 px-4 rounded-full bg-[#1A237E]/5 text-[#1A237E] font-bold text-sm mb-4 tracking-wide uppercase">
            Innovation Exclusive
          </div>
          <h2 className="text-xl md:text-4xl font-bold text-[#1A237E] mb-4">
            La Méthode BRAIN-LEAN™
          </h2>
          <p className="text-xl md:text-2xl font-medium text-[#FF6F00] max-w-4xl mx-auto">
            La Première Méthodologie qui Combine Neurosciences et Manufacturing
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-20 mb-20">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#1A237E] via-[#FF6F00] to-[#1A237E] transform -translate-y-1/2 opacity-20 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.letter}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center group"
              >
                {/* Icon Circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110 border-4 border-white"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon size={32} />
                  {/* Letter Badge */}
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center font-black text-sm"
                    style={{ borderColor: step.color, color: step.color }}
                  >
                    {step.letter}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-gray-50 rounded-xl p-6 text-center w-full h-full hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200">
                  <h3 className="font-bold text-lg text-[#1A237E] mb-3 h-14 flex items-center justify-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#37474F] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={() => navigate("/manufacturing")}
            className="inline-flex items-center gap-3 bg-[#1A237E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#283593] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            <Download size={30} className="group-hover:animate-bounce" />
            <span className="text-xs sm:text-base">
              Discover how to apply these Neurostrategiesto your Industrial
              Operations
            </span>
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Découvrez comment appliquer ces neuro-stratégies dans votre usine.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrainLean;
