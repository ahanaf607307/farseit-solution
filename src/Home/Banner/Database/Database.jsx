import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";

const Database = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Data Management Mastery</h1>
      <h1 className="text-white text-sm mt-2 font-mono">
      We leverage both relational and NoSQL databases to efficiently store, manage, and retrieve data for our clients applications.
      </h1>
      <section className="flex gap-x-5 mt-5 text-5xl">
        <SiMysql />
        <BiLogoPostgresql />
        <DiMongodb />
      </section>
    </div>
  );
};

export default Database;
