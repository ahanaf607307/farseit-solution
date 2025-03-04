import React from 'react';
import aboutImage from '../../assets/about/about.png';

const Aboutus = () => {
    return (
        <div className="w-full bg-gray-100 py-24">
        <div className=" px-3 md:px-10 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between gap-12">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                About Us
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                🚀 Elevate Your Digital Presence with farseIT! 🌐
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Discover innovation and expertise at the heart of farseIT's web
                development solutions. Tailored for your unique needs, we craft
                powerful e-commerce experiences, streamline school management, and
                optimize private company operations. At farseIT, we don’t just build
                websites; we shape unforgettable digital experiences that propel your
                success. Explore our portfolio and embark on a journey to transform
                your vision into a vibrant digital reality. Ready to elevate your
                online presence? Let’s connect and make it happen!
              </p>
            </div>
      
 
            <div className="lg:w-1/2">
              <img
                src={aboutImage} 
                alt="About Us"
                className="w-full h-full object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Aboutus;