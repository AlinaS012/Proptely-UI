
import React from "react";

const Navbar = () => {
    const headers = [
        "Overview",
        "Financials",
        "Tickets",
        "Work Orders",
        "Attachments",
        "Listing",
        "Communication",
        "Legal",
        "Notes",
        "Inspections"
    ];

    return (
        <div className="grid w-full border-b-2 border-header-text 
                        grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10">
            {headers.map((header, index) => (
                <div
                    key={index}
                    style={{
                        minWidth: header === "Work Orders" ? "115px" : undefined,
                        backgroundColor: header === "Overview" ? "#003A92" : "#EFF5F880",
                        color: header === "Overview" ? "#ffffff" : "#83CFFF"
                    }}
                    className="flex justify-center items-center h-[36px] px-[19px] rounded sm:max-w-[138px]"
                >
                    <p className="text-header-text text-[14px] font-[500] tracking-tight text-center">
                        {header}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
