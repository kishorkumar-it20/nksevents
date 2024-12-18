import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Customization from "../components/Customization";

const CustomizationPage = () => {
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
        <Customization/>
      </div>
      <Footer />
    </div>
  );
};

export default CustomizationPage;
