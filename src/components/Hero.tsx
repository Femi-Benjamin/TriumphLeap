const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background Gradient Effect */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] rounded-full bg-[radial-gradient(circle,rgba(76,29,149,0.8)_0%,rgba(26,11,46,1)_70%)] blur-3xl -z-10 pointer-events-none"></div>

      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
          I'm Triumph
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent mb-6">
          Video Editor & Motion Designer. Video Editor & Motion Designer. Editor
          & Motion Designer.
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-10 tracking-wide">
          6+ years of Experience to make sure your audience is always glued to
          their screeens
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-3 bg-[#FFCF4D] text-black font-bold rounded-lg hover:bg-[#ffe18f] transition-colors shadow-lg shadow-yellow-500/20">
            Let's Talk
          </button>
          <button className="px-8 py-3 bg-[#5B21B6] text-white font-bold rounded-lg hover:bg-[#6D28D9] transition-colors border border-purple-500/30">
            See our work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
