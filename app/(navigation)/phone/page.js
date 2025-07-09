"use client"
import React, { useEffect } from 'react'
import { FaPage4, FaPhone, FaPowerOff } from 'react-icons/fa'
import { useState } from 'react'
import Image from 'next/image'
import img from "../../../public/sleepy.jpg"
const Sleepy = () => {
    
    const [isON,setISON] = useState(false)
    const button = ["1-about",2,"3-skills",4,"5-achive",6,7,"8-vision",9,]
    const [logo ,setLogo] = useState(false);
    const [message,setMessage] = useState("");

useEffect(()=>{
    if(isON && message == ""){
      setTimeout(()=>{  setLogo(true)}, 3000)
    }
})

function selector (e){
    const selected = e.target.textContent
 switch(selected){
    case "1-about":{
        setLogo(false)
        setMessage("about")
    }
        break;
    case "3-skills":{
        setLogo(false)
        setMessage("skills")};
        break;
    case "5-achive":{
        setLogo(false)
        setMessage("achive")};
        break;
    case "8-vision":{
        setLogo(false)
        setMessage("vision")};
        break;
    default:"";    
 }
}


    
    return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center bg-[#d3d0d4] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2742%27%20height%3D%2744%27%20viewBox%3D%270%200%2042%2044%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20id%3D%27Page-1%27%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20id%3D%27brick-wall%27%20fill%3D%27%239C92AC%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M0%200h42v44H0V0zm1%201h40v20H1V1zM0%2023h20v20H0V23zm22%200h20v20H22V23z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">

        <div className='flex flex-col justify-start items-center h-[80vh] from-black via-black/20 to-black/90 bg-gradient-to-b w-70 p-2 rounded-2xl overflow-hidden '>
d
            <div className="bg-yellow-200 flex-3/5 flex flex-col rounded-2xl overflow-hidden m-2">

{ isON?  <div className='h-[80%] bg-gray-300 w-60 size-50 flex justify-center items-center '>
   {logo == true && <div><Image className='size-fit rounded-2xl' alt='sleepy panda company logo on phone' src={img}></Image>
 </div>  }<div className='text-black'>
    {message == "about" && <p className='flex justify-center items-center p-2'>i am a full stack web and game developer who focuses on bringing a unique creative feel to every project ,with 2 years experience perfecting and adapting new lessons along tthe way </p>}
    {message == "skills" && <p className='flex justify-center items-center p-2'>
       i_mainly_utilze () {"{ if (main language) ༼ つ ◕_◕ ༽つ{javascript == "+"'react,next js'}   else         { python = 'django,pyautogui,kivy'; dart == 'flutter'; lua = 'love2d'; java = '';}}"}
        </p>}
    {message == "achive" && <p className='flex justify-center items-center p-2'> 1) ༼ つ ◕_◕ ༽つHCIA artificial intelligence certificate
        2) ------------༼ つ ◕_◕ ༽つkaggle intro to deep learning certificate</p>}
    {message == "vision" && <p className='flex justify-center items-center p-2 text-[12px]'> we simply  ༼ つ ◕_◕ ༽つ actually its actually just me yeaaaa my main goal is to make quality software that adds to one&#39;s wellbeing and overall i simply want to make software that makes people feel something and kick ass while doing it hopefully overtime we can touch more people (╯°□°）╯ with consent of cause (¬‿¬) .   </p>}
 </div>
 
 
 
 
 
 
 
 
 
 
 </div>:  <div className='h-[80%] bg-black/98 w-60 size-50 '>d</div>}
                <div className='h-[20%] bg-blue-300 flex justify-center items-center font-extrabold bg-gray-800/30 '>SleepyPanda</div>
                
                </div>
            <div className="bg-[#222222] h- flex-2/5 w-60">
            <div className='flex rounded-2xl overflow-hidden'>
                <a href='tel:+260777290515' className='flex-1 hover:bg-black/20 overflow-hidden rounded-2xl rounded flex justify-center items-center '><FaPhone></FaPhone></a>
                <button className='flex-1 hover:bg-black/20 size-10 border border-gray-600 rounded ring-bla/ck/90 ring-4 m-1'></button>
                <button onClick={()=>{setISON(!isON)}} className='flex-1 hover:bg-black/20 flex justify-center items-center'><FaPowerOff></FaPowerOff></button>
            </div>
            <div className='h-[80%] grid grid-cols-3 bg-black w-60 size-20 '>
                {button.map((num,idx)=><button onClick={selector} key={idx} className='hover:opacity-70 bg-[#0D0D0DFF] m-1 rounded-xl text-white flex justify-center'>{num}</button>)}
            </div>
                <div className='h-[20%] bg-blue-300'>d</div>
                </div>
        </div>

    </div>
)}

export default Sleepy
