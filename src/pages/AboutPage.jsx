import React from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

const AboutPage = () =>{
    return(
        <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <About />
      </div>
      <Footer />
    </div>
    )
}
export default AboutPage;