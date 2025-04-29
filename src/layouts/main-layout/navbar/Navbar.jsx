import { useContext } from "react";
import { SidebarContext } from "../../../context/SidebarContext";

const Navbar = () => {
    const { setOpen } = useContext(SidebarContext)
    return (
        <div className="flex h-[80px] bg-navbar-blue w-full">
            {/* Logo */}
            <div className="flex-1 my-auto px-2 pl-[25px] flex align-center gap-4">
                <div className="hidden mt-6 [@media(max-width:1000px)]:flex" onClick={() => { setOpen(prev => !prev) }}>
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                </div>
                <img className="h-18 w-35" src={'images/logo/Proptely logo png-01 1.png'} />
            </div>

            {/* Search Bar - Hidden on md and smaller */}
            <div className="flex-2 w-full max-w-xl my-auto hidden lg:block">
                <div className="flex items-center w-[72%] h-[20%] bg-white rounded-md px-3 py-[2px]">
                    <svg
                        className="w-5 h-5 text-gray-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
                        />
                    </svg>

                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Divider */}
            <div className="divider h-[70%] w-[0.5px] my-auto bg-gray-400 flex align-center justify-center"></div>

            {/* Settings + Bell Icons - Hidden on small screens */}
            <div className="flex-1 hidden sm:flex items-center mx-1">
                {/*"flex-1 flex align-center mx-0 my-auto mx-1 hidden sm:flex"*/}
                <div className="flex-1"></div>
                <div className="flex-1 flex flex-row gap-6">
                    <img src={'/images/navbar/settings.png'} className="h-4.5 w-4" />
                    <img src={'/images/navbar/bell.png'} className="h-4.5 w-4" />
                </div>
            </div>

            {/* Divider */}
            <div className="divider h-[70%] w-[0.5px] my-auto bg-gray-400 flex align-center justify-center"></div>

            {/* User Info */}
            <div className="flex-1 align-center my-auto">
                <div className="flex flex-row justify-end mx-2 mr-6 align-center my-2 gap-4">
                    <img src={'/images/navbar/Icon.png'} className="w-4 h-4 mt-4" />
                    <div className="flex flex-col align-center">
                        <p className="font-bold font-roboto text-[16px] font-semibold">Alex Johnson</p>
                        <p className="font-roboto text-sm font-normal">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;