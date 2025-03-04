import React from "react";
import { DiDotnet } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Tools = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Streamlined Development Cycles</h1>
      <h1 className="text-white text-sm mt-2 font-mono">
      We utilize industry-standard tools and automation to enhance collaboration, optimize processes, and ensure efficient development workflows.
      </h1>
      <section className="flex gap-x-5 mt-5 text-5xl">
      <VscVscode />
      <FaGithub />
      </section>
    </div>
  );
};

export default Tools;
