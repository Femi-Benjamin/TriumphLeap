import { useState } from "react";
import { Plus } from "lucide-react";

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
          <div
            className="w-full aspect-[21/12] md:aspect-[16/9] rounded-3xl overflow-hidden group relative shadow-[0_0_50px_rgba(168,85,247,0.15)]"
            style={{
              background: "linear-gradient(to top, #4C12BF, #FFFFFF)",
              padding: "3px",
            }}
          >
            <div className="w-full h-full bg-black rounded-3xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3IHXNbRLZRo?si=TZh5EB_xXnK4Nnsx&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
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
