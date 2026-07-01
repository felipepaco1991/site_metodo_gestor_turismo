import React from "react";
import Navbar from "@/components/gestor/Navbar";
import HeroSection from "@/components/gestor/HeroSection";
import ProblemIntro from "@/components/gestor/ProblemIntro";
import PainPoints from "@/components/gestor/PainPoints";
import Solution from "@/components/gestor/Solution";
import HowItWorks from "@/components/gestor/HowItWorks";
import ProjectPhases from "@/components/gestor/ProjectPhases";
import ForWho from "@/components/gestor/ForWho";
import AboutUs from "@/components/gestor/AboutUs";
import Footer from "@/components/gestor/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemIntro />
      <PainPoints />
      <Solution />
      <HowItWorks />
      <ProjectPhases />
      <ForWho />
      <AboutUs />
      <Footer />
    </div>
  );
}