import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";

function Sidebar(){

    const sidebarItems = [
      {
        id: 1,
        name: "Home",
        icon: <GoHome />,
      },
      {
        id: 2,
        name: "Shorts",
        icon: <SiYoutubeshorts />,
      },
      {
        id: 3,
        name: "Subscriptions",
        icon: <MdOutlineSubscriptions />,
      },
    ];
    return(
        <div className="px-6 w-[15%]">
            <div className="space-y-3 items-center">
                {sidebarItems.map((item)=>{
                    return (
                        <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                            <div className="text-xl cursor-pointer">{item.icon}</div>
                            <span className="cursor-pointer">{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Sidebar;