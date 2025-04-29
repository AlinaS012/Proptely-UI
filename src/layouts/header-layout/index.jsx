import Navbar from "./navbar/Navbar";

const HeaderLayout = ({ children }) => {
    return (
        <div className="flex flex-col gap-4 mt-[25px]">
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default HeaderLayout;