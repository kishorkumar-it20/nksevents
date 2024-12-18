import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import EventDecoration from "../components/EventDecoration";

const EventDecorat = () => {
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
        <EventDecoration/>
      </div>
      <Footer />
    </div>
  );
};

export default EventDecorat;
