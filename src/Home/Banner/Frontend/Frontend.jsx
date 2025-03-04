import React from 'react';
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';

const Frontend = () => {
    return (
        <div>
           <h1 className='text-white text-xl'>Front-End Prowess</h1>
           <h1 className='text-white text-sm mt-2 font-mono'>Our skilled front-end team excels in building modern, responsive, and interactive user interfaces using the latest frameworks and best practices.</h1>
           <section className='flex gap-x-5 mt-5 text-5xl'>
            <FaHtml5/>
            <FaCss3/>
            <FaJs/>
            <FaReact/>
            <TbBrandNextjs/>
            <RiTailwindCssFill/>
            <FaBootstrap />
           </section>
        </div>
    );
};

export default Frontend;