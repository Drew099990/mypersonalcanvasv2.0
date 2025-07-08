
import Image from "next/image";
import img from "../public/sleepy.jpg"; // Adjust the path as necessary
import Link from "next/link";

export default function Home() {
  return (
    <div>
      
   
      <div
        className="bg-[#242924] flex flex-col justify-center items-center  max-md:min-h-[75vh] min-md:min-h-[84vh] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2742%27%20height%3D%2744%27%20viewBox%3D%270%200%2042%2044%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20id%3D%27Page-1%27%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20id%3D%27brick-wall%27%20fill%3D%27%239C92AC%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M0%200h42v44H0V0zm1%201h40v20H1V1zM0%2023h20v20H0V23zm22%200h20v20H22V23z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
      />

   <div>
       <h1 className="fixed max-md:scale-80 bottom-0 max-sm:bottom-[-20] h-60 max-md:bg-[#1a1919] min-md:bg-black/80 right-10 text-green-600/30 max-md:opacity-100 min-md:opacity-80 rounded-b-2xl tracking-wider text-6xl z-50">
        /
      </h1>
      <Image
        className="fixed z-60 max-md:scale-90 border rounded-2xl max-sm:bottom-40 min-sm:bottom-50 right-4 opacity-85 text-6xl"
        src={img}
        width={70}
        height={70}
        alt="Sleepy Panda Logo"
      />

   </div>
      <h1 className="fixed max-sm:top-30 min-sm:top-60 max-md:scale-60  left-10 text-green-600/40 rotate-290 bg-amber-950/40 tracking-wider text-6xl font-serif">
        my
      </h1>
      <h1
        className="fixed min-sm:top-130 max-sm:bottom-15 max-sm:left-10 min-sm:left-50 max-md:scale-60 text-green-600/30 rotate-10 tracking-wider text-[6rem]"
        style={{ fontFamily: "cursive" }}
      >
        personal
      </h1>
      <h1 className="fixed top-60 right-40 max-md:scale-80 text-yellow-600/30 rotate-60 italic font-bold tracking-wider text-7xl">
        canvas
      </h1>

      <div className="w-screen flex justify-center items-start">
        <h1 className="fixed max-md:scale-50 bg-red-800/60 font-extrabold text-2xl text-amber-50 z-10 max-sm:top-28 min-sm:top-35 p-2 border-4 border-[#3f3e3e]">
          get in touch
        </h1>

        <div className="bg-[#2E2E2EFF]/100 max-md:scale-70 max-md:flex-col-reverse max-md:h-fit text-gray-300 flex border-[#948f8f] border-4 ring-4 ring-black min-w-fit fixed max-md:top-[80px] min-md:top-[220px]">

          <div className="flex-1/3  gap-y-4 py-5 justify-baseline items-start p-4 font-bold  flex flex-col">
          
          <h1 className="underline underline-offset-8">contact info</h1>
         <a className=" mt-3 cursor-pointer text-[11px]" href="tel: +260777290515">founder: Andrew muyunda</a>
        
        <a className="   cursor-pointer text-[11px]" href="mailto: andrewmmuyunda777@gmail.com">email : andrewmmuyunda777@gmail.com</a>
         <a className="cursor-pointer text-[11px]" href="tel: +260777290515">tel :  +260777290515</a>
         <a className="cursor-pointer text-[11px]" href="mailto: andrewmmuyunda777@gmail.com">page : andrewmmuyunda777@gmail.com</a>
           <a className="cursor-none text-[11px]" >location : Kitwe , Zambia</a>
        </div>
          
          <div className="bg-[#D2D0D0FF] p-3  text-black/90 flex flex-col justify-center items-center  flex-2/3 min-w-fit overflow-hidden">
            <Link href="/" className="flex max-md:px-2 min-md:invisible z-20 max-md:scale-90 max-md:opacity-90 max-md:border border-gray-400 items-center gap-3 bg-[#D2D0D0FF] w-fit rounded-2xl my-5 px-2">
            <Image className="rounded-[50%]" src={img} width={30} height={30} alt="Sleepy Panda Logo" />
            <div>
              <h1 className="font-bold max-md:scale-75  leading-tight">sleepy</h1>
              <h1 className="font-bold max-md:scale-75 leading-tight  font-sans  text-green-800">panda</h1>
            </div>
          </Link>
          <form className="p-4 min-md:py-10 max-md:py-0 flex flex-col gap-4"> 
           
           <h1 className="text-center underline font-bold opacity-85 ">leave a message</h1>
           <div className="flex"> <label>your Name :</label>
            <input type="text" className=" h-10 m border-b-2 px-4 w-25"></input>
             <label>Email :</label>
            <input type="email" required className="border-b-2  h-10 mt-5 px-4"></input>
            </div>
          <div>   <label>Message : <input type="text" required className=" h-10 px-4 mt-5 border-b-2"></input>
   </label></div>
            
          <div className="flex font-extrabold  justify-center items-center">  <input type="submit" className=" w-fit mt-8 border-y-2 px-2 opacity-85 hover:border-4"></input>
           </div>  </form>
          
          </div>
        </div>
      </div>
    </div>
  );
}
