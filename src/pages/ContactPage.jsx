import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
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
        <ContactForm/>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
