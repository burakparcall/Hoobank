import { useState } from "react";
import { logo, close, menu } from "../assets/photos";
import { navLinks } from "../constants";
import classNames from "classnames";

export default function Navbar() {

    const [active, setActive] = useState("Home")
    const [toggle, setToggle] = useState(false)

    console.log(active)
    return (
        <nav className="py-[1.5rem] flex items-center justify-between ">
            <img src={logo} className="w-[124px] h-[32px]" />
            <ul className="flex justify-end items-center list-none sm:flex hidden">
                {navLinks.map((nav, index) => (
                    <li
                    key={nav.id}
                    className={classNames("font-poppins font-normal cursor-pointer text-[16px]", {
                        "text-white" : active == nav.title,
                        "text-dimWhite": active !== nav.title,
                        "mr-0": index == navLinks.length - 1,
                        "mr-10": index !== navLinks.length - 1
                    })}
                    onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                        
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                src={toggle ? close : menu}
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
                />
                
                <div
                className={classNames(" p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar", {
                    "hidden" : toggle == false,
                    "flex" : toggle == true
                })}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                            key={nav.id}
                            className={classNames("font-poppins font-normal cursor-pointer text-[16px]", {
                                "text-white" : active == nav.title,
                                "text-dimWhite": active !== nav.title,
                                "mb-0": index == navLinks.length - 1,
                                "mb-4": index !== navLinks.length - 1
                            })}
                            >
                                <a href={`${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}