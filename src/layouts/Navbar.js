import React, { useState } from "react";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { RiPieChart2Line } from "react-icons/ri";
import { FaPlusSquare, FaBatteryEmpty, FaBatteryHalf, FaBatteryFull, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const Menus = [
        { title: "Dashboard", icon: <RiPieChart2Line></RiPieChart2Line> },
        { title: "Add", icon: <FaPlusSquare></FaPlusSquare> },
        { title: "Pendings", icon: <FaBatteryEmpty></FaBatteryEmpty> },
        { title: "Developing", icon: <FaBatteryHalf></FaBatteryHalf> },
        { title: "Finished", icon: <FaBatteryFull></FaBatteryFull> },
        { title: "Profile", icon: <FaUserCircle></FaUserCircle>,
            submenu: true,
            submenuItems: [
                { title: "Info" },
                { title: "Settings" },
                { title: "Logout" }
            ]
        }
    ];

    return(
        <nav className={`bg-dark-purple duration-300 h-screen p-5 pt-8 relative ${ open ? "w-72" : "w-20" }`}>
            <BsArrowLeftShort
                onClick={() => setOpen(!open)}
                className={`absolute bg-white border border-dark-purple cursor-pointer ${!open && "rotate-180"} -right-3 rounded-full text-dark-purple text-3xl top-9`}></BsArrowLeftShort>
            <div className={`inline-flex`}>
                <AiOutlineBars
                    className={`bg-slate-200 block cursor-pointer float-left mr-2 rounded text-4xl`}
                ></AiOutlineBars>
                <h1 className={`font-medium duration-300 origin-left ${!open && "scale-0"} text-white text-2xl`}>Tasks</h1>
            </div>

            <ul className={`pt-2`}>
                { Menus.map((menu, index) => (
                    <>
                        <li key={index} className={`cursor-pointer flex gap-x-4 hover:bg-light-white items-center mt-2 p-2 rounded-md text-gray-300 text-sm`}>
                            <span className={`block float-left text-2xl`}>
                                {menu.icon ? menu.icon : <RiPieChart2Line></RiPieChart2Line>}
                            </span>
                            <span className={`duration-200 flex-1 font-medium ${!open && "scale-0"} text-base`}>{ menu.title }</span>
                            { menu.submenu && open && (
                                <BsChevronDown
                                    classname={`${ submenuOpen && "rotate-180" }`}
                                    onClick={() => setSubmenuOpen(!submenuOpen)}
                                ></BsChevronDown>
                            )}
                        </li>
                        {menu.submenu && submenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <li key={index} className={`cursor-pointer flex gap-x-4 hover:bg-light-white items-center mt-2 p-2 px-5 rounded-md text-gray-300 text-sm`}>
                                        {submenuItem.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )) }
            </ul>
        </nav>
    )
}

export default Navbar;