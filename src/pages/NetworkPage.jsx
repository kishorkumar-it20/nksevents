import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import NetworkEvents from "../components/Network";

const NetworkPage = () => {
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
        <NetworkEvents/>
      </div>
      <Footer />
    </div>
  );
};

export default NetworkPage;
