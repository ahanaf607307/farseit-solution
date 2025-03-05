import { DiDotnet } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";


const Banner = () => {
  return (
  <div id="banner" className="w-full h-screen bg-gray-800" >
     <div   className=" w-full h-screen  flex flex-col justify-center items-center" >
     <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto  py-16 lg:py-24">

      <div className="lg:w-1/2 text-center lg:text-left space-y-5">
        <h1 className="text-5xl font-extrabold text-white/80">
          Farse <span className="text-blue-600">IT</span>
        </h1>
        <p className="text-3xl font-semibold text-white/80">
          Find a <span className="text-blue-500">Robust </span> Sustainable E-platform
        </p>
        <p className="text-lg text-white/800">
          Elevating Your Digital Experience!  <br />
          FarseIT's innovative web solutions. Specializing in web development, we offer expertise and a client-centric approach for businesses. 
          Partner with us for cutting-edge solutions in **e-commerce, school management,** and **private company operations.**
        </p>
      
      </div>

     
      <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">

  <div className="grid grid-cols-2 gap-6">
    

    <div className="w-24 h-24 flex items-center justify-center bg-blue-100 rounded-full shadow-md border border-blue-400">
      <FaReact className="text-blue-500 text-6xl animate-spin-slow" />
    </div>


    <div className="w-24 h-24 flex items-center justify-center bg-blue-300 rounded-full shadow-md border border-gray-800">
      <TbBrandNextjs className="text-blue-700 text-6xl" />
    </div>

 
    <div className="w-24 h-24 flex items-center justify-center bg-purple-100 rounded-full shadow-md border border-purple-500">
      <DiDotnet className="text-purple-600 text-6xl" />
    </div>


    <div className="w-24 h-24 flex items-center justify-center bg-blue-200 rounded-full shadow-md border border-blue-600">
      <SiPostgresql className="text-blue-700 text-6xl" />
    </div>

  </div>
</div>




    </section>

    {/* another div */}

<div >
 <div className="max-w-7xl mx-auto">
 <h1 className="text-lg text-white/80">
  We harness the essence of Web 3.0 and emerging technologies to architect inventive, intelligent, and sustainable web development solutions and services. As a leading IT service provider and software company, our forte lies in ideation, skillfully connecting the dots to shape a more advanced and audacious digital future.
  </h1>

  <div className="mt-7">
      {/* Button Group */}
      <div className="flex justify-between gap-4 w-full p-4 bg-gray-700 rounded-t-lg shadow-md">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full px-6 py-2 text-lg font-semibold text-white  border border-gray-300 rounded-lg shadow-sm ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
            } transition-all duration-300 ease-in-out`
          }
        >
          Frontend
        </NavLink>

        <NavLink
          to="/backend"
          className={({ isActive }) =>
            `w-full px-6 py-2 text-lg font-semibold text-white  border border-gray-300 rounded-lg shadow-sm ${
              isActive ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"
            } transition-all duration-300 ease-in-out`
          }
        >
          Backend
        </NavLink>

        <NavLink
          to="/database"
          className={({ isActive }) =>
            `w-full px-6 py-2 text-lg font-semibold text-white  border border-gray-300 rounded-lg shadow-sm ${
              isActive ? "bg-yellow-500 text-white" : "hover:bg-yellow-500 hover:text-white"
            } transition-all duration-300 ease-in-out`
          }
        >
          Database
        </NavLink>

        <NavLink
          to="/cms"
          className={({ isActive }) =>
            `w-full px-6 py-2 text-lg font-semibold text-white  border border-gray-300 rounded-lg shadow-sm ${
              isActive ? "bg-purple-500 text-white" : "hover:bg-purple-500 hover:text-white"
            } transition-all duration-300 ease-in-out`
          }
        >
          CMS
        </NavLink>

        <NavLink
          to="/tools"
          className={({ isActive }) =>
            `w-full px-6 py-2 text-lg font-semibold text-white  border border-gray-300 rounded-lg shadow-sm ${
              isActive ? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"
            } transition-all duration-300 ease-in-out`
          }
        >
          Tools
        </NavLink>
      </div>

      {/* Outlet Section */}
      <div className=" p-6 bg-gray-700 rounded-b-lg shadow-md">
        <Outlet />
      </div>
    </div>
 </div>
</div>
   </div>
  </div>
  );
};

export default Banner;
