import React from 'react';
import { DiDotnet } from 'react-icons/di';
import { FaPhp } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';

const Backend = () => {
    return (
        <div>
                   <h1 className='text-white text-xl'>Robust Back-End Solutions</h1>
                   <h1 className='text-white text-sm mt-2 font-mono'>Our back-end experts specialize in developing secure, scalable, and high-performance server-side applications tailored to your needs.</h1>
                   <section className='flex gap-x-5 mt-5 text-5xl'>
                    <DiDotnet/>
                    <FaPhp/>
                    <TbBrandCpp />
                    
                   </section>
                </div>
    );
};

export default Backend;