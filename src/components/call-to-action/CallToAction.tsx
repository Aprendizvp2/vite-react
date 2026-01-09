import React from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value = '', suffix = '', duration = 2 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const CallToAction = () => {
  const stats = [
    { label: "Années d'expérience internationale", value: "15", suffix: "+" },
    { label: "Personnes managées", value: "180", suffix: "+" },
    { label: "Collaborateurs développés", value: "37", suffix: "+" },
    { label: "Continents", value: "4", suffix: "" }
  ];

  const companies = [
    { name: "GKN PLC", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/GKN_Automotive_Logo_2021.png" },
    { name: "Cartier", logo: "https://www.cartier.com/dam/car/pdp-assets/cartier-logo.svg" },
    { name: "SCHOTT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Schott_AG_logo.svg/2560px-Schott_AG_logo.svg.png" },
    { name: "Rolex", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Logo_da_Rolex.png" },
    { name: "Ceramaret", logo: "https://arcm.ch/wp-content/uploads/2022/09/ceramaret.jpg" }
  ];

  return (
    <section className="py-24 bg-[#1A237E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Résultats Mesurables, Transformations Durables
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une expertise forgée sur le terrain auprès des leaders mondiaux de l'industrie.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-xl lg:text-4xl font-bold text-[#FF6F00] mb-2 font-mono">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm lg:text-base font-medium text-gray-300 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logos Grid */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
            Ils nous ont fait confiance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                className="w-full flex items-center justify-center"
              >
                <div className="h-20 w-full flex items-center justify-center rounded-lg bg-white p-4">
                  <img className='w-28' src={company.logo} alt="company" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
