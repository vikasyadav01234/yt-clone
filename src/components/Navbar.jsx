import React from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import logo from "../assets/logo.png";
import {CiSearch} from "react-icons/ci";
import { IoMdMic } from 'react-icons/io';
function Navbar(){
    return (
        <div className="flex justify-between px-6 py-2">
            <div className="flex border border-black items-center space-x-4">
                <AiOutlineMenu className='text-xl cursor-pointer'/>
                <img src={logo} alt="" className="w-28 cursor-pointer"/>
            </div>
            <div className="border w-[35%] border-black flex">
                <div className='w-[100%] px-3 py-2 border rounded-l-full'>
                <input type="text" placeholder='Search' className="outline-none"/>
                </div>
                <CiSearch/>
                <IoMdMic className='text-sm cursor-pointer'/>
            </div>
            <div className="border border-black">
                3
            </div>
        </div>
    );
}
export default Navbar;