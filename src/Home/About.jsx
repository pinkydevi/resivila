import React from 'react';
import aboutImg from '../../public/images/banner2.jpg'

const About = () => {
    return (
      <section className="bg-gray-50 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 md:items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            What is Resiliva?
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Resiliva (Resmetirom) is a generic version of Rezdiffra which is a
            thyroid hormone receptor beta (THR-β) agonist. By targeting THR-β, it
            promotes lipid metabolism in the liver, reducing hepatic fat
            accumulation and improving lipid profiles. It is the first and only
            FDA-approved treatment for NASH with liver scarring, along with diet
            and exercise.
          </p>
          <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-white text-sm font-medium shadow hover:bg-blue-700">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={aboutImg}
            alt="About Resiliva"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
    );
};

export default About;