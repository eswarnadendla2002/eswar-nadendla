import React, { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Hero from "./components/Main/hero";
import About from "./components/About/about";
import Skillsgrid from "./components/skills_grid/skills_grid";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import { ImUpload2 } from "react-icons/im";

const Page = () => {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrollVisible(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skillsgrid />
      <Projects />
      <Contact />
      <Footer />

      {scrollVisible && (
        <div
          style={{
            position: "fixed",
            padding: "1rem 2rem",
            fontSize: "30px",
            bottom: "40px",
            right: "40px",
            borderRadius: "60%",
         
            color: "#ea580c",
            textAlign: "center",
            cursor: "pointer",
            // boxShadow:
            //   'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
            transition: "background-color 7s ease-in-out",
          }}
          onClick={scrollToTop}
        >
          <ImUpload2 />
        </div>
      )}
    </>
  );
};

export default Page;
