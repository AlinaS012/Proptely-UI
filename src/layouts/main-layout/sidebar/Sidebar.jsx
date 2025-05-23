import { useContext, useEffect } from "react";
import sidebarOptions from "./SidebarOptions";
import { SidebarContext } from "../../../context/SidebarContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()
    const { selected, setSelected, subSelected, setSubSelected, open, setOpen } = useContext(SidebarContext);

    return (<div className="relative h-full border-r-2 border-gray-100">
        <div className="hidden w-[220px] h-[150vh] [@media(min-width:1001px)]:flex  ">
            <div className="w-[30%] bg-navbar-blue  my-auto mt-[50px] mb-[50px] flex flex-col gap-2 py-[90px] align-center justify-around rounded-[10px]">
                {sidebarOptions.map((option, index) => (
                    <div
                        key={index}
                        className="flex justify-around py-2 relative"
                        onClick={() => setSelected(option)}
                        style={{ backgroundColor: selected.title === option.title ? '#B5DEF2' : 'transparent' }}
                    >
                        <img src={option.icon} className="w-4 h-4 flex justify-around" />
                        <div className={`w-[100%] absolute`} style={{
                            left: 60, top: 6, display: selected.title === option.title ? 'flex' : 'none', flexDirection: 'column'
                        }}>
                            <h2 className="text-dark-navy-blue font-roboto font-bold pl-4">{selected.title}</h2>
                            <div className={"mt-2"} >
                                {option.subheadings.map((heading, index) => (<>
                                    <div className="h-[27px] w-[180px] w-full pl-3.5 flex align-center justify-start py-1" style={{ width: 160, backgroundColor: heading.name === subSelected ? "#E7F3F9" : "transparent" }} onClick={() => { setSubSelected(heading.name); console.log(heading.link, "clikced"); navigate(`${heading.link}`) }}>
                                        <p key={index} className="text-[14px] ml-2">{heading.name}</p>
                                    </div>
                                </>))
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



        {
            open
            &&
            <div className="w-[200px] absolute z-30 h-[100vh] border-r border-gray-100 shadow bg-white" style={{ display: open ? "flex" : "none" }}>
                <div className="w-[30%] bg-navbar-blue  my-auto mt-[50px] mb-[50px] flex flex-col gap-2 py-[90px] align-center justify-around rounded-[10px]">

                    {sidebarOptions.map((option, index) => (
                        <div
                            key={index}
                            className="flex justify-around py-2 relative"
                            onClick={() => setSelected(option)}
                            style={{ backgroundColor: selected.title === option.title ? '#B5DEF2' : 'transparent' }}
                        >
                            <img src={option.icon} className="w-4 h-4 flex justify-around" />
                            <div className={`w-[100%] absolute`} style={{
                                left: 60, top: 6, display: selected.title === option.title ? 'flex' : 'none', flexDirection: 'column'
                            }}>
                                <h2 className="text-dark-navy-blue font-roboto font-bold pl-2">{selected.title}</h2>
                                <div className={"mt-2"} >
                                    {option.subheadings.map((heading, index) => (<>
                                        <div className="h-[27px] w-[180px] w-full pl-2 flex align-center justify-start py-1" style={{ width: 140, backgroundColor: heading.name === subSelected ? "#E7F3F9" : "transparent" }} onClick={() => { setSubSelected(heading.name); console.log(heading.link, "clikced"); navigate(`${heading.link}`) }}>
                                            <p key={index} className="text-[14px] ml-2">{heading.name}</p>
                                        </div>
                                    </>))
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        }
    </div >
    )
}

export default Sidebar;