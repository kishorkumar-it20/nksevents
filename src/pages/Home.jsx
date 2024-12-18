import React from "react";
import Navbar from "../components/navbar/Navbar";
import Intro from "../components/aboutnks/Intro";
import Services from "../components/aboutnks/Services";
import Eventsection from "../components/aboutnks/Eventsection";
import TeamSection from "../components/aboutnks/TeamSection";
import Testimonials from "../components/aboutnks/Testimonials";
import Footer from "../components/Footer";
import Clients from "../components/aboutnks/Clients";
import EventCarousel from "../components/aboutnks/EventCarousel";


const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Intro/>
            <Services/>
            <Eventsection/>
            <TeamSection/>
            <Clients/>
            <Testimonials/>
            <Footer/>
        </div>    
    )
}
export default Home;