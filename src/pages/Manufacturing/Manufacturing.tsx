import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import manufacturing from "../../assets/manufacturing/manufacturing.png";
import manufacturingTwo from "../../assets/manufacturing/manufacturing-two.png";

const Manufacturing = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header with Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-primary-blue bg-white hover:bg-gray-100 font-medium px-6 py-3 rounded-full cursor-pointer shadow-lg transition-all duration-300 border border-gray-200 hover:shadow-xl"
          >
            <FaArrowLeft className="mr-3" />
            Back to Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary-blue mb-6">
              What is <span className="text-primary-orange">NeuroManufacturing™</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Bridging the gap between industrial excellence and cognitive science for sustainable transformation
            </p>
          </motion.div>

          {/* Main Content - First Section */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-blue/20 to-primary-orange/20 rounded-3xl blur-xl opacity-50"></div>
              <img 
                src={manufacturing} 
                alt="NeuroManufacturing Process" 
                className="relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            
            <motion.div variants={fadeInUp}>
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-primary-blue mb-4">
                  Solving the Industry Paradox
                </h2>
                <div className="space-y-4 text-justify">
                  <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-primary-blue">NeuroManufacturing</span> addresses a critical paradox in modern industry: despite significant investments in proven methodologies like Lean or Six Sigma, sustainable results remain elusive.
                  </p>
                  <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                    Our approach draws from cognitive and behavioral sciences to explain this phenomenon. It reveals that <span className="font-semibold text-primary-orange">human cognitive systems</span> not aligned with transformation objectives create invisible resistance that neutralizes improvement efforts over time.
                  </p>
                  <div className="bg-gradient-to-r from-primary-blue/10 to-primary-orange/10 p-6 rounded-xl border-l-4 border-primary-orange mt-6">
                    <p className="text-base sm:text-xl italic text-gray-700">
                      "Research reveals alarmingly high rates of Lean initiative discontinuity—<span className="font-bold text-primary-orange">60-90% of organizations</span> fail to sustain transformations beyond initial implementation phases."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

      

          {/* Main Content - Second Section */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl font-bold text-primary-blue mb-6">
                The Synergy of Science & Industry
              </h2>
              <div className="space-y-6 text-justify">
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed font-medium bg-gradient-to-r from-primary-blue/5 to-transparent p-4 rounded-xl">
                  <span className="text-primary-blue font-bold">NeuroManufacturing</span> combines industrial excellence with cognitive science to solve the key problem of transformation unsustainability in modern manufacturing.
                </p>
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                  While classical approaches focus primarily on processes, <span className="font-semibold text-primary-orange">NeuroManufacturing acts on the human mechanisms</span> that condition adoption, operational discipline, and continuity of results.
                </p>
                <div className="bg-gradient-to-r from-primary-blue to-primary-orange p-6 rounded-xl text-white mt-8">
                  <p className="text-base sm:text-xl italic font-medium">
                    «It's not simply about implementing Lean or Six Sigma tools. It's about understanding WHY problems persist despite awareness, and HOW to create changes that truly last over time.»
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="relative order-first lg:order-last">
              <div className="absolute -inset-4 bg-gradient-to-l from-primary-blue/20 to-primary-orange/20 rounded-3xl blur-xl opacity-50"></div>
              <img 
                src={manufacturingTwo} 
                alt="NeuroManufacturing Methodology" 
                className="relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Manufacturing;