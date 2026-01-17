import Hero from "@/components/Hero";
import Expertise from "./components/Expertise";
import Proof from "./components/Proof";
import Testimonials from "./components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#1a0b2e] text-white overflow-x-hidden">
      <Hero />
      <Expertise />
      <Proof />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}

export default App;
