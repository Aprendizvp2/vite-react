import { Routes, Route } from "react-router-dom";
import CallToAction from "./components/call-to-action/CallToAction";
import FloatingButtons from "./components/floating-button/FloatingButton";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Approach from "./sections/approach/Approach";
import BrainLean from "./sections/brain-lean/BrainLean";
import Hero from "./sections/hero/Hero";
import Services from "./sections/services/Services";
import Transformation from "./sections/trasnformation/Transformation";
import Contact from "./sections/contact/Contact";
import Mission from "./sections/mission/Mission";
import Manufacturing from "./pages/Manufacturing/Manufacturing";
import Team from "./pages/Team/Team";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Mission />
      <Transformation />
      <Services />
      <Approach />
      <BrainLean />
      <CallToAction />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
