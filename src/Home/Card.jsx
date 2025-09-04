import React from 'react';

const Card = () => {
  
            const cards = [
    {
      title: "About Everest",
      desc: "Learn about Everest and its commitment to innovative healthcare solutions.",
      img: 'https://i.ibb.co.com/hxLm0LHv/pic1.jpg',
    },
    {
      title: "About Resiliva",
      desc: "Resiliva (Resmetirom) – FDA-approved treatment for NASH with liver scarring.",
      img: 'https://i.ibb.co.com/LzBndf72/pic2.jpg',
    },
    {
      title: "Prescribing Information",
      desc: "Get access to the official prescribing information and resources.",
      img: 'https://i.ibb.co.com/nsSxfBBQ/pic3.jpg',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Explore More
        </h2>

        {/* Card Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.desc}</p>
                <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
            
       
};

export default Card;