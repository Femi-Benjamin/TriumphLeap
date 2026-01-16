import { useState } from "react";
import { Plus } from "lucide-react";

// Using lucide-react for icons if available, otherwise will fallback to simple svg or use text
// Try to import icons, if not found I will replace with simple SVGs in valid code.

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
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 flex items-center justify-between text-left group hover:bg-white/5 transition-colors px-2"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-200 group-hover:text-white">
          {title}
        </span>
        <Plus
          className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="p-4 text-gray-400 text-sm">
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
    <section className="w-full bg-[#0a0510] py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-0.5 bg-[#FFCF4D]"></div>
          <span className="text-[#FFCF4D] font-bold tracking-wider text-sm uppercase">
            Our Expertise
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          Comprehensive marketing solutions for growth
        </h2>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Large Black Box (Placeholder) */}
          <div className="w-full aspect-video bg-black border border-gray-800 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent opacity-50"></div>
            {/* You would place the video or main image here */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
              [Visual Content Area]
            </div>
          </div>

          {/* Service List */}
          <div className="flex flex-col justify-center">
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
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Text fallbacks for logos if assets aren't ready, styled to look like the image */}
            <span className="text-2xl font-bold font-sans">make</span>
            <span className="text-2xl font-bold font-sans">make</span>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">A</span>{" "}
              <span className="text-2xl font-semibold">Adobe</span>
            </div>
            <span className="text-2xl font-bold font-sans">make</span>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">A</span>{" "}
              <span className="text-2xl font-semibold">Adobe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
