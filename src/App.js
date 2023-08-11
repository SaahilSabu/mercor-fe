import React, { useState, useEffect } from "react";
import Floater from "./components/Floater";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mobile from "./components/Mobile";
import Nav from "./components/Nav";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      {isMobile ? (
        <div className="cont-m bg-black">
          <Mobile />
        </div>
      ) : (
        <div className="cont overflow-y-hidden">
          <Floater />
          <Nav />
          <Hero />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
