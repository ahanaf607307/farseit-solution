import React from "react";
import addBanner from "../../assets/advatisment/addBanner.png";

const AddBanner = () => {
  return (
    <div className="md:flex gap-10 justify-between items-center bg-blue-950 p-5 md:p-10 rounded-md">
      <div className="w-8/12">
        <h1 className="text-4xl font-semibold text-blue-600">
          Ready to Start the Journey with Farse IT?
        </h1>
        <h1 className="text-5xl pt-3 font-semibold text-white/90">
          How can we help you?
        </h1>
      </div>
      <div className="4/12">
        <img src={addBanner} className="h-56" alt="addImage" />
      </div>
    </div>
  );
};

export default AddBanner;
