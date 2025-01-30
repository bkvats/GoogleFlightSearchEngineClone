import React, {useEffect, useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiRollingSuitcase } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { ImHome2 } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setDummyCompVisibility } from "../store/dummyCompSlice";
import { IoMdCheckmark } from "react-icons/io";

export default function Header() {
    const dispatch = useDispatch();
    const [showThemeOption, setShowThemeOption] = useState(true);
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const navLinks = [
        {
            name: "Travel",
            icon: <GiRollingSuitcase />
        },
        {
            name: "Explore",
            icon: <MdOutlineTravelExplore />
        },
        {
            name: "Flights",
            icon: <GiCommercialAirplane />
        },
        {
            name: "Hotels",
            icon: <FaBed />
        },
        {
            name: "Vacation rentals",
            icon: <ImHome2 />
        }
    ];
    useEffect(() => {
        if (isDarkTheme) document.body.classList.add("dark");
        else document.body.classList.remove("dark");
    }, [isDarkTheme]);
    return (
        <header className="flex p-2 md:py-3 md:px-7 items-center justify-between border-b-1 border-b-slate-200 dark:bg-gray-900">
            <div className="flex items-center gap-4">
                <div className="flex gap-2 md:gap-5 items-center w-fit">
                    <button className="text-xl text-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 cursor-pointer rounded-full">
                        <GiHamburgerMenu />
                    </button>
                    <span>
                        <a href="/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="google_logo" width={70} className="mt-1" />
                        </a>
                    </span>
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-2">
                        {
                            navLinks.map(i => (
                                <li key={i.name}>
                                    <button className={`flex items-center gap-2 border-1 border-slate-200 w-fit py-2 px-3 rounded-full ${i.name === "Flights" ? "bg-blue-100" : "dark:hover:bg-gray-700"} cursor-pointer hover:bg-blue-100 `}
                                        onClick={() => {
                                            if (i.name !== "Flights") dispatch(setDummyCompVisibility(true));
                                        }}
                                    >
                                        <span className={`text-blue-700 ${i.name !== "Flights" && "dark:text-blue-200"}`}>{i.icon}</span>
                                        <span className={`text-smfont-medium ${i.name === "Flights" ? "text-blue-600" : "dark:text-white"}`}>{i.name}</span>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div className="flex items-center lg:gap-2 relative">
                <button className="text-gray-500 text-xl hover:bg-gray-100 p-2 cursor-pointer rounded-full dark:hover:bg-gray-700 dark:text-white" onClick={() => {setShowThemeOption(prev => !prev)}}>
                    <MdDarkMode />
                </button>
                <div className={`border-2 border-gray-200 dark:border-slate-700 bg-[whitesmoke] dark:bg-gray-900 w-52 h-42 absolute top-9 -left-42 flex flex-col gap-5 justify-center rounded-md shadow-2xl origin-top-right ${showThemeOption ? "scale-100" : "scale-0"} transition-scale duration-100`}>
                    <button className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white pl-5 py-4" onClick={() => {
                        setIsDarkTheme(false);
                        setShowThemeOption(false);
                    }}>
                        <span className={`text-xl ${isDarkTheme && "collapse"}`}><IoMdCheckmark /></span>
                        <span>Light theme</span>
                    </button>
                    <button className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 pl-5 py-4 dark:hover:bg-gray-700 dark:text-white" onClick={() => {
                        setIsDarkTheme(true);
                        setShowThemeOption(false);
                    }}>
                        <span className={`text-xl ${!isDarkTheme && "collapse"}`}><IoMdCheckmark /></span>
                        <span>Dark theme</span>
                    </button>
                </div>
                <button className="text-gray-500 text-xl hover:bg-gray-200 p-2 cursor-pointer rounded-full dark:hover:bg-gray-700 dark:text-white" onClick={() => { dispatch(setDummyCompVisibility(true)) }}>
                    <TbGridDots />
                </button>
                <button className="bg-blue-500 hover:shadow-xs ml-2 md:ml-4 hover:shadow-black hover:bg-blue-600 px-7 py-2 text-white rounded-md font-semibold cursor-pointer text-sm" onClick={() => { dispatch(setDummyCompVisibility(true)) }}>Sign in</button>
            </div>
        </header>
    )
}