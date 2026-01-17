import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#000000] to-[#4C1D95] min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background Gradient Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] rounded-full bg-[radial-gradient(circle,rgba(76,29,149,0.8)_0%,rgba(26,11,46,1)_70%)] blur-3xl -z-10 pointer-events-none"
      ></motion.div>

      <div className="text-center max-w-4xl mx-auto z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tight mb-4"
        >
          I'm Triumph
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent mb-6"
        >
          Video Editor & Motion Designer.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm md:text-base text-gray-300 mb-10 tracking-wide"
        >
          6+ years of Experience to make sure your audience is always glued to
          their screeens
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#FFCF4D] text-black font-bold rounded-lg hover:bg-[#ffe18f] transition-colors shadow-lg shadow-yellow-500/20"
          >
            Let's Talk
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#5B21B6] text-white font-bold rounded-lg hover:bg-[#6D28D9] transition-colors border border-purple-500/30"
          >
            See our work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
