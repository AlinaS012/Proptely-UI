import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar'

const MainLayout = ({ children }) => {
    return (<>
        <div className="flex flex-col w-full">
            <Navbar />
            <div className='flex flex-1 w-full'>
                <Sidebar />
                <div className='py-[28px] px-[27px]'>
                    {children}
                </div>
            </div>
        </div>
    </>)
}

export default MainLayout