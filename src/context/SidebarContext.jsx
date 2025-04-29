import { createContext, useEffect, useState } from "react"
import sidebarOptions from "../layouts/main-layout/sidebar/SidebarOptions";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {}

export const SidebarContext = createContext(INITIAL_STATE);

export const SidebarContextProvider = ({ children }) => {
    const [selected, setSelected] = useState(sidebarOptions[2])
    const [subSelected, setSubSelected] = useState(sidebarOptions[2].subheadings[0].name)
    const [open, setOpen] = useState(false);

    return (
        <SidebarContext.Provider
            value={{
                open, 
                setOpen,
                selected,
                setSelected,
                subSelected,
                setSubSelected
            }}
        >
            {children}
        </SidebarContext.Provider>
    )
}
