import { motion } from 'framer-motion';
import { Target, Cog, Brain } from 'lucide-react';

const Transformation = () => {
  const dimensions = [
    {
      icon: Target,
      title: 'Strategic Clarity',
      description: 'Define clear objectives and align your entire organization toward common goals. We help you create a roadmap that connects vision to execution.',
      color: '#1A237E'
    },
    {
      icon: Cog,
      title: 'Operational Excellence',
      description: 'Optimize processes, eliminate waste, and build systems that deliver consistent, measurable results. Transform operations into competitive advantages.',
      color: '#FF6F00'
    },
    {
      icon: Brain,
      title: 'Cognitive Preparation',
      description: 'Develop the mindset, culture, and capabilities needed for sustained change. Prepare your people to embrace and drive continuous improvement.',
      color: '#37474F'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#1A237E] mb-6">
            The Three Dimensions of Transformation
          </h2>
          <p className="text-lg sm:text-xl text-[#37474F] max-w-3xl mx-auto leading-relaxed">
            Our proven methodology addresses the complete spectrum of manufacturing excellence, ensuring sustainable results that last.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dimensions.map((dimension, index) => (
            <motion.div
              key={dimension.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-t-4 hover:transform hover:scale-105"
                   style={{ borderColor: dimension.color }}>
                <div className="mb-6 inline-block p-4 rounded-xl bg-opacity-10 transition-all duration-300"
                     style={{ backgroundColor: `${dimension.color}20` }}>
                  <dimension.icon size={40} style={{ color: dimension.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: dimension.color }}>
                  {dimension.title}
                </h3>
                <p className="text-[#37474F] leading-relaxed">
                  {dimension.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-br from-[#1A237E] to-[#283593] rounded-2xl p-12 text-center"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Why All Three Dimensions Matter
          </h3>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
            True transformation requires more than just fixing processes. It demands strategic alignment, operational rigor, and human readiness working in harmony. Our integrated approach ensures your manufacturing operation achieves sustainable excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformation;
