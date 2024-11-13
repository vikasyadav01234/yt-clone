import React from 'react';
import {AiOutlineMenu} from "react-icons/ai";

function Navbar(){
    return (
        <div className="flex justify-between px-6 py-2">
            <div className="border border-black">
                <AiOutlineMenu/>
            </div>
            <div className="border border-black">
                2
            </div>
            <div className="border border-black">
                3
            </div>
        </div>
    )
}
export default Navbar;