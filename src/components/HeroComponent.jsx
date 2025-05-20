import React from "react";

function HeroComponent() {
    return (
        <div className=' bg-sky-100 w-full min-h-50'>
      <div className='pt-2 flex flex-col sm:max-w-lg items-center pl-4 pr-6 ml-4 md:mx-auto'>
        <h1 className='font-extrabold text-lg font-inter text-gray-700 mt-2 sm:text-3xl sm:mt-4'>Smart Digital Solutions</h1>
        <p className='font-medium text-sm text-gray-700 font-inter sm:text-lg mt-0.5 md:mt-2'>
          We design beautiful websites and get them seen with smart SEO.
          No jargon, no fluff—just real solutions that work.
          Build it. Rank it. Grow it.
        </p>
      </div>
    </div>
    )
}

export default HeroComponent