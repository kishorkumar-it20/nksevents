import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import CorporateEvents from "../components/CorporateEvents";

const CorperatePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <CorporateEvents />
      </div>
      <Footer />
    </div>
  );
};

export default CorperatePage;
