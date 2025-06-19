import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
//import background from '/hero_section_bg.png';

function HeroComponent() {
  const navigate = useNavigate();
  return (
    <div className="bg-[url(/hero_section_bg.jpg)] bg-no-repeat rounded-sm bg-cover bg-center bg-origin-padding md:w-full min-h-100 md:min-h-100">
      <div className="pt-2 flex flex-col sm:max-w-lg items-center pl-4 pr-6 ml-4 md:mx-auto">
        <h1 className="font-extrabold text-lg font-inter text-gray-900 mt-2 sm:text-3xl sm:mt-4">
          Smart Digital Solutions
        </h1>
        <p className="font-medium text-sm text-gray-850 font-inter sm:text-lg mt-0.5 md:mt-2">
          We design beautiful websites and get them seen with smart SEO. No
          jargon, no fluff—just real solutions that work. Build it. Rank it.
          Grow it.
        </p>
        <button className="bg-blue-900 rounded text-white min-h-10 p-4 mt-5 mb-6" onClick={()=>navigate('/contact')}>Free Consultation</button>
      </div>
    </div>
  );
}

export default HeroComponent;
