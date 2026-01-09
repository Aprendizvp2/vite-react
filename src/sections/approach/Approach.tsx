import { motion } from 'framer-motion';
import { Search, Clipboard, Rocket, BarChart } from 'lucide-react';

const Approach = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Assessment',
      description: 'We begin with a comprehensive analysis of your current state, identifying opportunities, challenges, and conducting a specialized Diagnostic Neuropsychologique to understand team dynamics.',
      details: ['Current state analysis', 'Stakeholder interviews', 'Diagnostic Neuropsychologique', 'Baseline metrics']
    },
    {
      number: '02',
      icon: Clipboard,
      title: 'Strategic Planning',
      description: 'Develop a customized roadmap that aligns with your vision, addresses your unique challenges, and sets clear milestones for transformation.',
      details: ['Custom strategy development', 'Roadmap creation', 'Resource planning', 'Risk mitigation']
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Implementation & Execution',
      description: 'Deploy solutions with hands-on support, training your team, building capabilities, and ensuring smooth adoption of new processes.',
      details: ['Hands-on implementation', 'Team training', 'Process deployment', 'Change management']
    },
    {
      number: '04',
      icon: BarChart,
      title: 'Optimization & Sustainability',
      description: 'Monitor progress, refine systems, and embed continuous improvement practices to ensure lasting results and ongoing excellence.',
      details: ['Performance monitoring', 'Continuous improvement', 'Knowledge transfer', 'Sustainability planning']
    }
  ];

  return (
    <section id="approach" className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Agregar overflow-hidden al contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#1A237E] mb-6">
            Our Proven Approach
          </h2>
          <p className="text-lg sm:text-xl text-[#37474F] max-w-3xl mx-auto leading-relaxed">
            A systematic, results-driven methodology that delivers measurable transformation at every stage.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1A237E] via-[#FF6F00] to-[#37474F] transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }} /* Agregar margen negativo */
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 w-full ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    }`}>
                      <span className="text-5xl font-bold text-[#FF6F00] opacity-30">
                        {step.number}
                      </span>
                      <div className="p-3 rounded-xl bg-[#e4eaf0] bg-opacity-10">
                        <step.icon size={28} className="text-[#1A237E]" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A237E] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#37474F] mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 ${
                            index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 bg-[#FF6F00] rounded-full ${
                            index % 2 === 0 ? 'order-2' : 'order-1'
                          }`}></div>
                          <span className={`text-sm text-[#37474F] ${
                            index % 2 === 0 ? 'order-1' : 'order-2'
                          }`}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block w-16 h-16 rounded-full bg-white shadow-lg border-4 border-[#FF6F00] flex-shrink-0 z-10"></div>

                <div className="flex-1 lg:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#fcece4] bg-opacity-10 text-[#FF6F00] px-6 py-3 rounded-full border border-[#FF6F00] border-opacity-30">
            <span className="font-semibold">Ready to transform your operations?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;