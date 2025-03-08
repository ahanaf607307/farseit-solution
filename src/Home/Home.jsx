import React from "react";
import Aboutus from "./Aboutus/Aboutus";
import AddBanner from "./AddBanner/AddBanner";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="h-screen flex items-center justify-center text-white text-4xl font-bold"
      >
        <Banner />
      </section>
      {/* about section */}
      <section
        id="about"
        className="min-h-[calc(100vh-400px)] flex items-center justify-center  text-white text-4xl font-bold"
      >
        <Aboutus />
      </section>
      <section
        id="services"
        className="flex min-h-[calc(100vh-100px)] items-center justify-center bg-gray-800 text-white text-4xl font-bold"
      >
       <Features/>
      </section>
      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-red-500 text-white text-4xl font-bold"
      >
        Projects
      </section>
      <section
        className="min-h-[calc(100vh-500px)] flex items-center justify-center bg-gray-800 text-white text-4xl font-bold"
      >
       <AddBanner/>
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
