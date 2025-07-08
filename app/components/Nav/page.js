
import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const Menu = () => {
  return (
 <div className="flex  gap-5 h-7 bordee max-[55rem]:scale-90 rounded-2xl px-4 p-1 border  border-gray-800 text-gray-300 ">
            <Link href="/about" className="font-bold  border-gray-600 border-x-2 px-1 leading-tight bg-gradient-to-r from-gray-500 hover:opacity-65  opacity-30 " >About</Link>
            <Link href="/PaS" className="font-bold  border-gray-600 border-x-2 px-1  leading-tight bg-gradient-to-r from-gray-500 hover:opacity-65 opacity-30 to-[#474a47]" >Inventory </Link>
            <Link href="/blog" className="font-bold  border-gray-600 border-x-2 px-1 leading-tight bg-gradient-to-r from-gray-500 hover:opacity-65 opacity-30 to-[#474a47]" >blog</Link> 
            <Link href="https://wa.me/+260777290515" className="font-bold  border-gray-600  border-x-2  px-2 leading-tight  opacity-50 bg-gradient-to-r from-green-900 to-[#474a47] scale-90 hover:opacity-65 flex items-center gap-1" >hire༼ つ ◕_◕ ༽つme<FaWhatsapp size={18} /></Link>
          </div>  
  )
}

export default Menu