import { motion } from 'framer-motion';
import { Building2, LineChart, Users, Lightbulb, FileCheck, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Strategic Planning',
      description: 'Develop comprehensive manufacturing strategies aligned with business objectives and market demands.',
      features: ['Vision & Mission Development', 'Goal Setting & KPIs', 'Competitive Analysis']
    },
    {
      icon: LineChart,
      title: 'Process Optimization',
      description: 'Streamline operations, reduce waste, and maximize efficiency across your entire value chain.',
      features: ['Lean Manufacturing', 'Six Sigma Implementation', 'Value Stream Mapping']
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Build strong leadership teams capable of driving and sustaining operational excellence.',
      features: ['Executive Coaching', 'Team Building', 'Change Management']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Foster a culture of continuous improvement and innovation throughout your organization.',
      features: ['Innovation Workshops', 'Problem-Solving Training', 'Continuous Improvement']
    },
    {
      icon: FileCheck,
      title: 'Performance Management',
      description: 'Implement robust systems to measure, monitor, and improve manufacturing performance.',
      features: ['KPI Development', 'Dashboard Design', 'Performance Reviews']
    },
    {
      icon: Wrench,
      title: 'Operational Excellence',
      description: 'Transform your operations through proven methodologies and best practices.',
      features: ['TPM Implementation', 'Quality Systems', 'Safety Excellence']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#1A237E] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[#37474F] max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting solutions designed to elevate every aspect of your manufacturing operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 h-full border border-gray-200 hover:border-[#FF6F00]">
                <div className="mb-6 inline-block p-4 rounded-xl bg-[#fcece4] bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300">
                  <service.icon size={32} className="text-[#FF6F00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#37474F] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#37474F]">
                      <div className="w-1.5 h-1.5 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
