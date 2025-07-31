import React from 'react';
import Image from 'next/image';
import img from '../../../public/sleepy.jpg';

const services = [
  {
    title: 'Studypal',
    description:
      'Is an Ai powered study tool that aids making studying as effiecient as possible with everything you need all in one place .',
    mylink:"",  
    Features: [
      'Specialized Ai tutor',
      'Scheduling feature',
      'Career path advice',
      "Interactive minigames"
    ],
    img: img,
    status:false
  },
    {
    title: 'Huddle',
    description:
      'Is a community based platform that aims to safe space for people to push and grow together and improve daily while offering them all the tools they will need on their journey .',
    mylink:"",  
    Features: [
      "Access to countless number of books to download or read",
      'Specialized Ai planner generator for workout,reading,medidation ... ',
      'Personal journal/dairy for personal thoughts',
      'Community blog ',
      "Recommended videos and audiobooks for you"
    ],
    img: img,
    status:false
  },
    
 {
    title: 'WorkAuto',
    description:
      'Is a platform that offers countless number of mini courses and challenges to aid in teaching you the fundamentals of automation using python,javacript,java and lua in a fun educational way ,Hey!!!! dont touch that lets automate it instead.',
    mylink:"",  
    Features: [
      "Fundamentals of the java,python,javascript and lua",
      'Countless fully packed courses ',
      'Automation idea generator',
      
    ],
    img: img,
    status:false
  },
       {
    title: 'myQuickCV',
    description:
      'is a website that aids you get your dream job by aiding you with the first steps on your path.',
    mylink:"",  
    Features: [
      'AI resume/cv generator',
      'AI resume/cv rating  ',
      'Career path advice',
      
    ],
    img: img,
    status:false
  },
 
];

const Product_and_Services = () => {
  return (
    <div className="min-h-[90vh] bg-[#242924] flex flex-col justify-center items-center bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2742%27%20height%3D%2744%27%20viewBox%3D%270%200%2042%2044%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20id%3D%27Page-1%27%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20id%3D%27brick-wall%27%20fill%3D%27%239C92AC%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M0%200h42v44H0V0zm1%201h40v20H1V1zM0%2023h20v20H0V23zm22%200h20v20H22V23z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
      <h1 className="m-7 max-md:scale-55 bg-red-800/60 font-extrabold text-2xl text-amber-50 z-10 top-35 p-2 border-4 border-[#3f3e3e]">
        Products & Services
      </h1>
      <div className="grid max-md:m-4  md:grid-cols-2 gap-8 max-w-4xl mx-auto w-fit pb-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#2E2E2EFF]/100 text-gray-300 flex border-[#948f8f] border-4 ring-4 ring-black min-h-[220px] min-w-fit rounded-2xl shadow-xl p-6 flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={service.img}
                  className="rounded-xl object-cover border border-gray-700"
                  width={60}
                  height={60}
                  alt={service.title}
                />
                <h2 className="text-xl font-bold text-green-200 underline underline-offset-4">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-200 mb-2">{service.description}</p>
              <a className='flex gap-1' href={service.mylink}>check it out  --------------------------༼ つ ◕_◕ ༽つ<h1 className='hover:text-gray-400'>Here</h1></a>
              <h3 className="font-bold text-lg text-gray-100 mb-1">Features:</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {service.Features?.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 ."> Status:{service.status == true?<h1 className='text-green-300'>Available For Use</h1>:<h1 className='text-red-300'>In Development</h1>}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_and_Services;