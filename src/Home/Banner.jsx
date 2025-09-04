import React from 'react';
import bannerImg from '../../public/images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <section
      className="relative h-[60vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
     
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to Everest • Resilivia
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
          Trusted information, prescribing guidance, and resources for you.
        </p>
        <button className="mt-6 rounded-2xl bg-blue-500 px-6 py-3 text-white text-lg font-medium shadow hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </section>
        </div>
    );
};

export default Banner;