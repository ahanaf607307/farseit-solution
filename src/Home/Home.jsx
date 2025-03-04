import React from "react";
import Aboutus from "./Aboutus/Aboutus";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="h-screen flex items-center justify-center text-white text-4xl font-bold"
      >
        <Banner />
      </section>
      <section
        id="about"
        className="min-h-[calc(100vh-400px)] flex items-center justify-center  text-white text-4xl font-bold"
      >
        <Aboutus />
      </section>
      <section
        id="services"
        className="h-screen flex items-center justify-center bg-yellow-500 text-white text-4xl font-bold"
      >
        Services
      </section>
      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-red-500 text-white text-4xl font-bold"
      >
        Projects
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-purple-500 text-white text-4xl font-bold"
      >
        Contact
      </section>
    </div>
  );
};

export default Home;
