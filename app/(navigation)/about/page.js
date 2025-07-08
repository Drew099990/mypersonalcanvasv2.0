"use client"
import React, { useState, useEffect, useRef } from 'react';

const Page = () => {
  const [show, setShowScreen] = useState(false);
  const [powerON, setPowerON] = useState(false);
  const [role, setRole] = useState("vistor");
  const [filename,setFilename] = useState("")

  function on() {
    if (show === true) {
      setPowerON(false);
      setShowScreen(false);


    } else {
      setPowerON(!powerON);
      setShowScreen(false);
      setTimeout(() => {
        setPowerON(false);
        setShowScreen(true);
      }, 4000);
      
    
    }
  }


  useEffect(() => {
    
    const dropZone = document.getElementById("dropZone")

    const handleDragOver = (e) => {
      e.preventDefault();
    };
    const handleDrop = (e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      const source = document.getElementById(data);
      dropZone.appendChild(source);
       if (source.textContent == "reset"){
      document.location.reload()
    }
      setFilename(source.textContent)

   
    
    };
    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("drop", handleDrop);
  
  
  }
  , []);

  //make chips draggable
  const makeDraggable = (id) => ({
    id :id,
    draggable: true,
    onDragStart: (e) => {
      e.dataTransfer.setData("text/plain", id);
    },
  });

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center bg-[#d3d0d4] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2742%27%20height%3D%2744%27%20viewBox%3D%270%200%2042%2044%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20id%3D%27Page-1%27%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20id%3D%27brick-wall%27%20fill%3D%27%239C92AC%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M0%200h42v44H0V0zm1%201h40v20H1V1zM0%2023h20v20H0V23zm22%200h20v20H22V23z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
    <div className="fixed  p-5 bg-gray-200 text-gray-800 rounded-2xl border-gray-700 border-4 flex-col size-200 z-50 flex justify-center items-center min-[96rem]:hidden top-120  h-60 font-bold"> 
        
        <div className="border-l-2  p-1 text-balance bg-gray-300 rounded-br-2xl">this window is requesting fullscreen view  ----------------------(╯°□°）╯︵ ┻━┻, would you like to grant permisson? (❁´◡`❁)</div>
        <button onClick={()=>{ document.documentElement.requestFullscreen()}} className="hover:border-dotted border rounded hover:bg-gray-400 hover:text-white hover:border-black text-gray-600 mt-7 px-3 p-1">make full screen</button></div>
      
      <div className="w-[60vw] max-md:scale-50 z-30 shadow-2xl shadow-black/60 z-10 min-w-[65rem]  p-5 rounded-t-2xl h-[80vh] rounded-b-2xl from-[#2E2E2EFF] via-[#f2f2f2] to-[#2E2E2EFF] border-2 bg-gradient-to-t flex flex-col justify-center items-center">
        <div className="flex-4/5 z-10 flex flex-col  text-black p-30 border-black bg-[#368D57FF]/90 w-full mt-5 rounded-[30%] opacity-80 border-4">
          {powerON && (
            <div>
              <h1 className=" text-4xl text-center font-bold opacity-85 after:animate-dot tracking-widest animate-pulse">booting up</h1>
              <h1 className="text-3xl op text-center after:animate-dot2 opacity-70 mt-10"> _</h1>
              <h1 className="text-7xl ">.</h1>
            </div>
          )}
          {show && filename== "" && (
            <h1 className="text-yellow-100/50 font-bold  animate-hover w-full flex justify-center font-bold text-3xl">
              insert a chip block into slot below
            </h1>
          )}
            
              {show && filename== "discription" && (
            <h1 className="line-clamp text-yellow-100/50 font-sans font-bold  animate-hover w-full flex justify-center text-3xl">
           Sleepy panda is a platform /company ------------------------------༼ つ ◕_◕ ༽つ༼  focused on making creative software solutions that dont only fix your problems(⌐■_■) ,but ( •_•){">"}⌐■-■ makes you feel something while doing it ,welcome Home (●&apos;◡&apos;●) .</h1>
          )}
              {show && filename== "services" && (
            <h1 className=" text-yellow-100/50 font-sans font-bold  animate-hover w-full line-clamp flex justify-center  text-2xl">
            ¯\_(ツ)_/¯  So what do we offer ? we offer a large range of products from websites like this, mobile apps like wheres the link when you need it anyways you get the picture ,games and occasionally once a year on a summer night short form animated advertisement------------------------------ ༼ つ ◕_◕ ༽つanddddddd stuff .
            </h1>
          )}
              {show && filename== "vision" && (
            <h1 className="text-yellow-100/50 font-sans font-bold  animate-hover w-full flex justify-center font-in text-2xl">
              we simply  ༼ つ ◕_◕ ༽つ actually its actually just me yeaaaa my main goal is to make quality software that adds to one&#39;s wellbeing and overall i simply want to make software that makes people feel something and kick ass while doing it hopefully overtime we can touch more people (╯°□°）╯ with consent of cause (¬‿¬) .          </h1>
            
          )}
              {show && filename== "inspiration 4 design" && (
            <h1 className="text-yellow-100/50 font-bold  font-sans animate-hover w-full flex justify-center in text-3xl">
i was initial gonna showcase the pc model that inspired the design ༼ つ ◕_◕ ༽つbutttt we are low on staff (uses excuse to hide laziness (¬‿¬) check ☑) so maybe next time im off now thanks for reading
friend .            </h1>
          )}

           {show && filename== "descript dev edition ༼ つ ◕_◕ ༽つ" && (
            <h1 className="text-yellow-100/50 font-bold  font-sans animate-hover w-full flex justify-center font-bold text-3xl text-balance">
               i am a software engineer (❁´◡`❁) and full stack web developer  who focuses on bringing-------- ༼ つ ◕_◕ ༽つA unique create design factor to each of my projects , having been perfecting my craft for 2 years now gently adapting new lessons into(╯°□°）╯︵ ┻━┻ my workflow along the way .
            </h1>
          )}

           {show && filename== "skills" && (
            <h1 className="text-yellow-100/60 font-sans   animate-hover w-full flex justify-center font-bold text-[18.4px] text-balance ">
            ╰(*°▽°*)╯i primarily utilize javascript as my go to language, with backgrounds in python ,java ,dart ,Through working on a considerable number of projects, i have developed a decent level of proficiency in these langauges. Additionally i have experience with frameworks and libraries such as python(Django,pandas,pyautogui,shutil,os,...) dart(flutter) Javascript (react, --------------------༼ つ ◕_◕ ༽つnext js ,react native,...) (¬‿¬) soft skills anyone? alright here i go im good at time management ,im a faster learner and autodidact ,researching is my strong suit ,good with a team .</h1>
          )}

           {show && filename== "achivements" && (
            <h1 className="text-yellow-100/50 font-sans animate-hover w-full flex justify-center font-bold text-3xl">
༼ つ ◕_◕ ༽つ...hmmmm yeah about that give me a week or two (T_T)
            </h1>
          )}
        </div>
        <hr />
        <div className="flex-1/5  z-30">
          <div
            id="dropZone"
            
            className="w-50 bg-black/70 border-white/50 z-20 p-2 border-2 absolute bottom-20 right-100 h-8 overflow-hidden"
          >

          </div>
                      <button
              onClick={on}
              className="hover:opacity-95 max-[96rem]:hidden  size-15 ring-4 ring-neutral-700 text-white/40 border-black rounded-[50%] border-2 bg-black/60 absolute bottom-30 right-[295px]"
            >
              ⨀
            </button>
          <div className="w-140 rounded-2xl opacity-70 flex gap-4  border-2 text-white border-black bg-black/60 relative top-5 right-50 h-20 ">
            <h1 className="text-2xl font-bold text-gray-600 bg-clip-text bg-gradient-to-r from-gray-900 via-white to-gray-200 text-center flex justify-center items-center ml-40">
              my personal canvas v2
            </h1>
            
            {/* tiny shelf */}
            <div className="w-fit flex-col gap-4 text-transparent border-black rounded-t-2xl relative bottom-30 left-[42rem] h-fit bg-transparent bg-gradient-to-t ">
              <div
                {...makeDraggable("chip1")}
                className="text-black from-[#2E2E2EFF]  via-[#f2f2f2]   to-[#2E2E2EFF] border-2 bg-gradient-to-t mt-10 flex-1 border-2  px-3 my-2 h-8"
              >
                   {role === "vistor" ? "discription" : "descript dev edition ༼ つ ◕_◕ ༽つ"}
            </div>
              <div
                {...makeDraggable("chip2")}
                className="text-black from-[#2E2E2EFF] via-[#f2f2f2] to-[#2E2E2EFF] bg-gradient-to-t flex-1 border-2 px-3 my-2 h-8"
              >
                {role === "vistor" ? "services" : "skills"}
              </div>
              <div
                {...makeDraggable("chip3")}
                className="text-black from-[#2E2E2EFF] via-[#f2f2f2] to-[#2E2E2EFF] bg-gradient-to-t flex-1 border-2 px-3 my-2 w-45 h-8"
              >
                vision
              </div>
              <div
                {...makeDraggable("chip4")}
                className="text-black from-[#2E2E2EFF] via-[#f2f2f2] to-[#2E2E2EFF] bg-gradient-to-t flex-1 border-2 px-3 my-2 h-8 overflow-hidden tracking-tight"
              >
                {role !== "vistor" ? "achivements" : "inspiration 4 design"}
              </div>
                    <div 
                {...makeDraggable("chip5")}
                className="text-green-950 font-bold from-[#3b3a3a] via-[#f2f2f2] to-[#2E2E2EFF] bg-gradient-to-t flex-1 border-2 px-3 my-2 h-8 overflow-hidden tracking-tight"
              >
                
                {  "reset"}
              </div>
            </div>
          </div>
        </div>
        <div className=" left-35 max-[96rem]:hidden   bottom-[-15] border-l-8 border-t-8 rounded-[40%] rotate-270 text-transparent border-black text-[7rem] fixed ">f</div>
        <div className="border-b-12 max-[96rem]:hidden  border-t-2 left-20 opacity-75 overflow-hidden bottom-20 flex border-4 rounded-[40%] bg-black/90 bg-clip-border text-[8rem] fixed ">
          <button
            onClick={() => {
              setRole("vistor");
            }}
            className="text-xl  font-bold cursor-pointer p-1 border-r-4 opacity-86 hover:opacity-97 text-black from-[#2E2E2EFF] via-[#f2f2f2] to-[#2E2E2EFF] bg-gradient-to-r"
          >
            customer
          </button>
          <button
            onClick={() => {
              setRole("");
            }}
            className="text-xl font-bold cursor-pointer p-1 text-black from-[#A3A1A1FF] via-[#f2f2f2] to-[#2E2E2EFF] opacity-86 hover:opacity-97 bg-gradient-to-l"
          >
            dev
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;