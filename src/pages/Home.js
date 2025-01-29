import React from "react";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/home/hero/Hero";
import Solutions from "../components/home/solutions/Solutions";
import Stacks from "../components/home/stacks/Stacks";
import HomeRegister from "../components/home/home-register/HomeRegister";

function Home() {
  return (
    <>
     <NavBar />
     <Hero />
     <Solutions />
     <Stacks />
     <HomeRegister />
     <Footer />
    </>
  )
}

export default Home