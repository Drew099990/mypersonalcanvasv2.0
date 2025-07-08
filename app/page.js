
import Image from "next/image";
import img from "../public/sleepy.jpg"; // Adjust the path as necessary

export default function Home() {
  return (
    <div>
      
   
      <div
        className="bg-[#242924] flex flex-col justify-center items-center h-[50vh] min-h-[80vh] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2742%27%20height%3D%2744%27%20viewBox%3D%270%200%2042%2044%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20id%3D%27Page-1%27%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20id%3D%27brick-wall%27%20fill%3D%27%239C92AC%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M0%200h42v44H0V0zm1%201h40v20H1V1zM0%2023h20v20H0V23zm22%200h20v20H22V23z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
      />

      <h1 className="fixed bottom-0 h-60 bg-black/80 right-10 text-green-600/30 opacity-80 rounded-b-2xl tracking-wider text-6xl">
        /
      </h1>
      <Image
        className="fixed border rounded-2xl bottom-50 right-4 opacity-85 text-6xl"
        src={img}
        width={70}
        height={70}
        alt="Sleepy Panda Logo"
      />

      <h1 className="fixed top-60 left-10 text-green-600/40 rotate-290 bg-amber-950/40 tracking-wider text-6xl font-serif">
        my
      </h1>
      <h1
        className="fixed top-130 left-50 text-green-600/30 rotate-10 tracking-wider text-[6rem]"
        style={{ fontFamily: "cursive" }}
      >
        personal
      </h1>
      <h1 className="fixed top-60 right-40 text-yellow-600/30 rotate-60 italic font-bold tracking-wider text-7xl">
        canvas
      </h1>

      <div className="w-screen flex justify-center items-start">
        <h1 className="fixed bg-red-800/60 font-extrabold text-2xl text-amber-50 z-10 top-35 p-2 border-4 border-[#3f3e3e]">
          get in touch
        </h1>

        <div className="bg-[#2E2E2EFF]/100 max-md:scale-60 text-gray-300 flex border-[#948f8f] border-4 ring-4 ring-black h-[50vh] min-w-fit fixed top-[220px]">

          <div className="flex-1/3  gap-y-4 py-5 justify-baseline items-start p-4 font-bold  flex flex-col">
          
          <h1 className="underline underline-offset-8">contact info</h1>
         <></> <a className="  mt-3 cursor-pointer text-[11px]" href="mailto: andrewmmuyunda777@gmail.com">email : andrewmmuyunda777@gmail.com</a>
         <a className="cursor-pointer text-[11px]" href="tel: +260777290515">tel :  +260777290515</a>
         <a className="cursor-pointer text-[11px]" href="mailto: andrewmmuyunda777@gmail.com">page : andrewmmuyunda777@gmail.com</a>
           <a className="cursor-none text-[11px]" >location : Kitwe , Zambia</a>
        </div>
          
          <div className="bg-[#D2D0D0FF]  text-black/90 flex-2/3 min-w-fit overflow-hidden">
          <form className="p-4 py-10 flex flex-col gap-4"> 
           
           <h1 className="text-center underline font-bold opacity-85 ">leave a message</h1>
           <div className="flex"> <label>your Name :</label>
            <input type="text" className=" h-10 mt-5 border-b-2 px-4 w-25"></input>
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
