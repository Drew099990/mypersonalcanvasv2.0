
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const Menu = () => {
  return (
 <div className="flex gap-5 h-7 max-[55rem]:hidden ">
            <a href="/about" className="font-bold  border-x-2 px-1 leading-tight bg-gradient-to-r from-gray-500 hover:opacity-65  opacity-30 " >About</a>
            <a href="/PaS" className="font-bold  border-x-2 px-1 leading-tight bg-gradient-to-r from-gray-500 hover:opacity-65 opacity-30 to-[#474a47]" >Products and services</a>
            <a href="/blog" className="font-bold  border-x-2 px-1 leading-tight bg-gradient-to-r from-gray-500 hover:opacity-65 opacity-30 to-[#474a47]" >blog</a> 
            <a href="https://wa.me/+260777290515" className="font-bold  border-2 px-1 leading-tight  opacity-50 bg-gradient-to-r from-green-900 to-[#474a47] hover:opacity-65 flex items-center gap-1" >instant access <FaWhatsapp size={18} /></a>
          </div>  
  )
}

export default Menu