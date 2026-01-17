import { useState } from "react";
import { Plus } from "lucide-react";

// Using lucide-react for icons

const AccordionItem = ({
  title,
  isOpen,
  onClick,
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-700/50">
      <button
        className="w-full py-6 flex items-center justify-between text-left group hover:bg-white/5 transition-colors px-2"
        onClick={onClick}
      >
        <span className="text-xl font-medium text-gray-200 group-hover:text-white">
          {title}
        </span>
        <Plus
          className={`w-6 h-6 text-white transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 text-gray-400 text-base">
          {/* Placeholder content for accordion */}
          Detailed description of {title} services and capabilities. We deliver
          high quality results tailored to your needs.
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#000000] to-[#160043] py-24 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-[#FFCF4D]"></div>
          <span className="text-[#FFCF4D] font-bold tracking-widest md:text-md text-sm uppercase">
            Our Expertise
          </span>
        </div>

        <h2 className="text-3xl md:text-6xl font-black text-white mb-16 tracking-tight md:text-left text-center">
          Comprehensive marketing solutions for growth
        </h2>

        {/* Main Content Area - Vertical Stack */}
        <div className="flex flex-col gap-10 mb-24">
          {/* Large Video Placeholder */}
          <div className="w-full aspect-[16/7] bg-black border border-purple-500/50 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden group">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>

            {/* Content Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Optional: Add a play button or placeholder icon here if desired */}
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          {/* Service List */}
          <div className="w-full">
            <AccordionItem
              title="Video Edits"
              isOpen={openIndex === 0}
              onClick={() => toggleAccordion(0)}
            />
            <AccordionItem
              title="Motion Graphics and Explainer Videos"
              isOpen={openIndex === 1}
              onClick={() => toggleAccordion(1)}
            />
            <AccordionItem
              title="3D Product Design and Animation"
              isOpen={openIndex === 2}
              onClick={() => toggleAccordion(2)}
            />
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-4">
          {/* Replicating the logos from image as text/shapes for now */}
          <div className="text-3xl font-bold font-sans tracking-tighter text-gray-400">
            /// make
          </div>
          <div className="text-3xl font-bold font-sans tracking-tighter text-gray-400">
            /// make
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-4xl font-bold">A</span>
            <span className="text-2xl font-semibold tracking-tight">Adobe</span>
          </div>
          <div className="text-3xl font-bold font-sans tracking-tighter text-gray-400">
            /// make
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-4xl font-bold">A</span>
            <span className="text-2xl font-semibold tracking-tight">Adobe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
