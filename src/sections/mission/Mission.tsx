import { motion } from "framer-motion";
import mission from "../../assets/mission/mission.png";

export default function Mission() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      {/* Agregado overflow-hidden al contenedor principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Columna izquierda - Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6 overflow-hidden"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-blue text-2xl md:text-4xl font-bold"
          >
            Our core mission
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-500 text-base text-justify italic w-full sm:w-4/5"
          >
            "Drive sustainable manufacturing transformation by removing the
            invisible systemic barriers to change, enabling a cycle of
            self-sustaining operational excellence."
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1A237E" // Ajusta según tu color primary-blue
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary-blue text-white px-8 py-4 rounded-lg w-full sm:w-3/5 font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            En savoir plus
          </motion.button>
        </motion.div>

        {/* Columna derecha - Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-2xl w-full h-auto object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
            src={mission}
            alt="mission"
          />
        </motion.div>
      </div>
    </div>
  );
}