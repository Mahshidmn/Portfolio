import React, { useState } from "react";
import Nav from "@/components/Nav"
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";


const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
        <div>
          <MobileNav nav={ nav } closeNav={ closeNav } />
          <Nav openNav={ openNav } />
          <Hero />
          <div className="relative z-[30]">
            <About />
            <Services />
            <Skills />
            <Projects />
            <Footer />

          </div>

        </div>
    
    </div>
  )
}

export default HomePage;


