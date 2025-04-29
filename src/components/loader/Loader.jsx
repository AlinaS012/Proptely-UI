import React from 'react'

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* <div className="relative w-16 h-16">
        <div className="absolute w-16 h-16 border-8 border-pink-400 border-t-transparent border-r-transparent rounded-full animate-ring-spin delay-[0s]"></div>
        <div className="absolute w-16 h-16 border-8 border-pink-400 border-t-transparent border-r-transparent rounded-full animate-ring-spin delay-150"></div>
        <div className="absolute w-16 h-16 border-8 border-pink-400 border-t-transparent border-r-transparent rounded-full animate-ring-spin delay-300"></div>
        <div className="absolute w-16 h-16 border-8 border-pink-400 border-t-transparent border-r-transparent rounded-full animate-ring-spin delay-450"></div>
      </div> */}
            <svg className="animate-spin text-light-sea-green w-16 h-16" color="#70EDE2" fill="currentColor"   stroke="currentColor" strokeWidth={1.5} height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" fill="#212121" /></svg>
        </div>
    )
}

export default Loader;