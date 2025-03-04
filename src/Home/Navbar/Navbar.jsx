import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import logo from "/farseit.svg";

const sections = ["home", "about", "services", "projects", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home"; 

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-700 py-3 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <section className="flex max-w-7xl mx-auto justify-between items-center px-4">
        {/* Logo */}
        <img className="h-16 -mt-4" src={logo} alt="Logo" />

        {/* Navigation */}
        <div>
          <ul className="flex lg:gap-x-5 bg-gray-600 px-5 py-3 rounded-full text-lg font-bold">
            {sections.map((section, index) => (
              <li key={index}>
                <a
                  href={`#${section}`}
                  className={`relative px-3 py-1 transition-all duration-300 ease-in-out
                  ${activeSection === section ? "text-white" : "text-gray-300"} group`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span
                    className={`absolute left-0 bottom-0 h-1 w-0 bg-gray-400 transition-all duration-300 ease-in-out 
                    ${activeSection === section ? "w-full" : "group-hover:w-full"}`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex text-2xl lg:gap-x-5">
          <FaFacebook className="hover:cursor-pointer hover:text-blue-400 duration-150 ease-in-out" />
          <FaTwitter className="hover:cursor-pointer hover:text-blue-400 duration-150 ease-in-out" />
          <IoLogoInstagram className="hover:cursor-pointer hover:text-blue-400 duration-150 ease-in-out" />
          <FaLinkedin className="hover:cursor-pointer hover:text-blue-400 duration-150 ease-in-out" />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
