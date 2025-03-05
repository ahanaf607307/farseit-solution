import React from "react";
import image1 from "../../assets/cardImage/1.png";
import image2 from "../../assets/cardImage/2.png";
import image3 from "../../assets/cardImage/3.png";
import image4 from "../../assets/cardImage/4.png";
import Card from "./Card";

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-white text-5xl text-center font-semibold">
        Our Featured Solutions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-10">
        <Card
          cardImage={image1}
          cardTitle={"Innovative Solutions, Tailored for You"}
          cardDesc={
            "At farseIT, we thrive on innovation. Our team of experts stays at the forefront of technology to deliver web solutions that not only meet today standards but anticipate tomorrow needs. We tailor our solutions to your unique requirements, ensuring your digital presence is as distinctive as your business."
          }
        />
        <Card
          cardImage={image2}
          cardTitle={"Seamless E-Commerce Experiences"}
          cardDesc={
            "For e-commerce ventures, a strong online presence is paramount. farseIT crafts powerful, user-friendly e-commerce platforms that go beyond transactions—they create memorable customer journeys. From secure payment gateways to personalized shopping experiences, we optimize every detail to drive your online success."
          }
        />
        <Card
          cardImage={image3}
          cardTitle={"Efficient Private Company Operations"}
          cardDesc={
            "Company OperationsIn the competitive landscape of private companies, efficiency is key. farseIT develops customized web applications that streamline internal processes, boost collaboration, and provide actionable insights. Experience seamless operations with our tailored solutions."
          }
        />
        <Card
          cardImage={image4}
          cardTitle={"Streamlined School Management"}
          cardDesc={
            "Educational institutions face unique challenges, and farseIT is here to simplify them. Our school management systems are designed to streamline administrative tasks, enhance communication, and elevate overall efficiency. Transform your institution with our intuitive and comprehensive solutions."
          }
        />
      </div>
    </div>
  );
};

export default Features;
