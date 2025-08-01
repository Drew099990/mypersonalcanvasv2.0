import React from 'react';
import Image from 'next/image';
import img from '../public/sleepy.jpg'; // Adjust the path as necessary
import img2 from "../public/menu .png"
import { CiCircleChevDown } from "react-icons/ci";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"
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
    status:false,
    
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
const Games = [
  {
    title: 'The Red Game',
    description:
      'is an action adventure platformer that is about a man who aims to take revenge on an evil organization that ...',
    mylink:"",  
    Features: [
      'shooting',
      'action',
      'platforms',
      "entertainment"
    ],
    img: img2,
    status:false}]

const Product_and_Services = () => {
  return (
    <div className="min-h-[90vh] scroll-smooth bg-[#242924] flex flex-col justify-center items-center bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2742%27%20height%3D%2744%27%20viewBox%3D%270%200%2042%2044%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20id%3D%27Page-1%27%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20id%3D%27brick-wall%27%20fill%3D%27%239C92AC%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M0%200h42v44H0V0zm1%201h40v20H1V1zM0%2023h20v20H0V23zm22%200h20v20H22V23z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
      {/* <div className="m-7 flex hidden max-md:scale-55 gap-2 bg-red-800/60 opacity-90 font-extrabold text-2xl text-amber-100 z-10 top-35 p-2 border-4 border-[#3f3e3e]">
        <a className='underline bg-red-800/50 hover:animate-bounce cursor-pointer text-green-200'href='#web'>Websites</a> &
        <a  className='underline bg-red-800/50  hover:animate-bounce cursor-pointer text-blue-200 scroll-smooth' href="#happy">games</a>
      </div> */}
       <Analytics/>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8563885250863599"
     crossorigin="anonymous"></script>
      <div className='text-green-200/60 text-3xl m-6 border-4 border-gray-700/80 font-extrabold font-sans bg-gray-500 p-2 rounded-xl  px-5 flex gap-2 max-md:scale-85 text-balance'><h1>Welcome</h1> <h1>to</h1> <h1 className='text-black/60'> Sleepy</h1> <h1 className="text-green-900/80">Panda</h1></div>

<Image src={img} alt='sleepy panda logo' className='size-40 rounded-2xl border-gray-600 border-4'></Image>


       <div id="web" className='flex my-10 gap-4' >
        <h1  className="text-blue-100  px-5 opacity-60 py-1  border-green border ring-4 rounded-xl  ring-gray-800  font-bold italic text-balance bg-gray-500 mt-5 ">Our Websites</h1>
       <h1 className='text-green-200 font-bold opacity-75'>or</h1>
        <Link href="#happy" className="text-green-100 flex gap-2 font-sans  px-5 opacity-80 py-1  border-green border ring-4 rounded-xl  ring-gray-800  font-bold italic text-balance bg-gray-500 mt-5  hover:scale-110 cursor-pointer">Our Games<div className='text-2xl animate-hover2 hover:scale-90 cursor-pointer opacity-70'><FaAngleDoubleDown /></div></Link>

       </div>
      <div className="grid max-md:m-4   md:grid-cols-2 gap-8 max-w-4xl mx-auto w-fit pb-10">
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
                <h2 className="text-xl font-sans opacity-90 font-bold text-green-200 underline underline-offset-4">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-200 mb-2 font-serif">{service.description}</p>
              <a className='flex gap-1' href={service.mylink}>check it out  --------------------------༼ つ ◕_◕ ༽つ<h1 className='hover:text-gray-400'>Here</h1></a>
              <h3 className="font-bold text-lg text-gray-100 mb-1">Features:</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {service.Features?.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4"> Status:{service.status == true?<h1 className='text-green-300'>Available For Use</h1>:<h1 className='text-red-300'>In Development</h1>}</div>
          </div>
        ))}
      </div>
       <div id="happy" className='flex gap-4 my-10' >
          <Link href="#web" className="text-green-100 flex gap-2 font-sans px-3 opacity-80 py-1  border-green border ring-4 rounded-xl  ring-gray-800  font-bold italic text-balance bg-gray-500 mt-5 hover:scale-110 cursor-pointer">Our Websites<div className='text-2xl animate-hover2 hover:scale-90 cursor-pointer opacity-70'><FaAngleDoubleUp /></div></Link>
               <h1 className='text-green-200 font-bold opacity-75'>or</h1>
        <h1  className="text-blue-100   opacity-60 py-1  border-green border ring-4 rounded-xl  ring-gray-800  font-bold italic text-balance bg-gray-500 mt-5 px-7">Our Games</h1>
      
       </div>
  <div className="grid max-md:m-4    amd:grid-cols-2 gap-8 max-w-4xl mx-auto w-fit pb-10">
        {Games.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#2E2E2EFF]/100 text-gray-300 flex border-[#948f8f] border-4 ring-4 ring-black min-h-[220px] min-w-fit rounded-2xl shadow-xl p-6 flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={service.img}
                  className="rounded-xl object-cover border border-gray-700 animate-r1 "
                  width={60}
                  height={60}
                  alt={service.title}
                />
                <h2 className="text-xl font-serif font-bold text-green-200 opacity-80 underline underline-offset-4">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-200 mb-2 font-sans">{service.description}</p>
              <a className='flex gap-1' href={service.mylink}>check it out  --------------------------༼ つ ◕_◕ ༽つ<h1 className='hover:text-gray-400 '>Here</h1></a>
              <h3 className="font-bold text-lg text-gray-100 mb-1">Features:</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {service.Features?.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4"> Status:{service.status == true?<h1 className='text-green-300'>Available For Use</h1>:<h1 className='text-red-300'>In Development</h1>}</div>
          </div>
        ))}
      </div>

  
    </div>
  );
};

export default Product_and_Services;
