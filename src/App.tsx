import Hero from "@/pages/Hero";
import Expertise from "@/pages/Expertise";
import Proof from "@/pages/Proof";
import Testimonials from "@/pages/Testimonials";
import Footer from "@/components/Footer";
import Video2 from "@/components/Video2";
import Video1 from "@/components/Video1";
import Video3 from "@/components/Video3";
import Video4 from "@/components/Video4";
// import Pricing from "@/components/Pricing";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#1a0b2e] text-white overflow-x-hidden">
      <Hero />
      <Expertise />
      <Proof />
      <Video2 />
      <Video1 />
      <Video3 />
      <Video4 />
      <Testimonials />
      <Footer />
      {/* <Pricing /> */}
    </main>
  );
}

export default App;
