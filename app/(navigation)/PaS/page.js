
import React from 'react';
import Image from 'next/image';
import img from '../../../public/sleepy.jpg';

const services = [
  {
    title: 'Web Development',
    description:
      'We build modern, responsive, and scalable web applications tailored to your business needs. Our expertise covers everything from landing pages to complex web platforms.',
    examples: [
      'Portfolio Website',
      'E-commerce Platform',
      'Company Landing Page',
    ],
    img: img,
  },
  {
    title: 'Web Development',
    description:
      'We build modern, responsive, and scalable web applications tailored to your business needs. Our expertise covers everything from landing pages to complex web platforms.',
    examples: [
      'Portfolio Website',
      'E-commerce Platform',
      'Company Landing Page',
    ],
    img: img,
  },
  {
    title: 'Web Development',
    description:
      'We build modern, responsive, and scalable web applications tailored to your business needs. Our expertise covers everything from landing pages to complex web platforms.',
    examples: [
      'Portfolio Website',
      'E-commerce Platform',
      'Company Landing Page',
    ],
    img: img,
  },
];

const Product_and_Services = () => {
  return (
    <div className="min-h-[90vh] grid grid-cols-2 bg-gray-300 max-md:grid-cols-1 gap-10 items-start p-10">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row gap-6 bg-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-200 relative min-h-[200px] overflow-hidden"
        >
          <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-green-200 to-green-400 rounded-xl w-32 h-32 shadow-md">
            <Image
              src={service.img}
              className="rounded-xl object-cover"
              width={90}
              height={90}
              alt={service.title}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center bg-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              {service.description}
            </p>
            <div className="mt-2">
              <h3 className="font-bold text-lg text-gray-700 mb-1">Details:</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {service.examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Product_and_Services;