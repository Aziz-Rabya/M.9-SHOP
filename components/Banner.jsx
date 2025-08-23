import React from "react";

const Banner = () => {
  return (
    <section className="w-full py-12 px-6 md:px-16 lg:px-32">
      <div className="relative rounded-2xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 p-6 md:p-10 shadow-lg min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
        
        {/* Left image pinned to left */}
        <img
          src="/images/jbl_soundbox_image.png"
          alt="JBL Soundbox"
          className="absolute left-6 bottom-5 w-32 md:w-48 lg:w-56 object-contain drop-shadow-md"
        />

        {/* Centered text + button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Level Up Your <br /> Gaming Experience
          </h2>
          <p className="text-gray-700 mb-5">
            From immersive sound to precise controls— <br />everything you need to win
          </p>
          <button className="group flex items-center bg-orange-600 text-white gap-2 px-6 py-2.5 font-medium shadow-md hover:bg-orange-700 hover:scale-105 transition-all cursor-pointer">
            Buy Now
            <span className="transform group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </button>
        </div>

        {/* Right image pinned to top-right */}
        <img
          src="/images/md_controller_image.png"
          alt="Gaming Controller"
          className="absolute top-0 right-0 w-28 md:w-40 lg:w-56 object-contain drop-shadow-md"
        />
      </div>
    </section>
  );
};

export default Banner;
