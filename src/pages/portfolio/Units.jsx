import React, { useEffect, useState } from "react";
import HeaderLayout from "../../layouts/header-layout";
import _BarChart from "../../components/barchart/BarChart";
import _LineChart from "../../components/linechart/LineChart";
import CustomBarChart from "../../components/barchart/BarChart";
const Units = () => {
    const statuses = ["paid", "unpaid", "hold", "bad dept", "overdue"];
    const [tableResultArr, setTableResultArr] = useState([]);

    useEffect(() => {
        const generatedArray = Array.from({ length: 7 }, () =>
            statuses[Math.floor(Math.random() * statuses.length)]
        );
        setTableResultArr(generatedArray);
    }, []);
    useEffect(() => { console.log(tableResultArr, "table") }, [tableResultArr])
    return (<>
        <div className="flex justify-between w-full">
            <p className="text-[20px] font-semibold">Unit No</p>

            <div className="relative">
                <select className="appearance-none w-[100px] h-[30px] bg-dark-navy-blue border border-gray-300 text-white text-[12px] font-[500] py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option className="text-[10px]">Action</option>
                    <option className="text-[10px]">Option 2</option>
                </select>

                {/* <!-- Custom arrow --> */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

        </div>
        <div className="flex gap-2">
            <p className="font-[400] text-[16px] font-roboto">Status</p>
            <div className="bg-light-sea-green text-gray-100 text-[11px] flex justify-around w-[36px] my-1 rounded-1">
                <p>Vacant</p>
            </div>
        </div>
        <HeaderLayout>
            <div className="flex flex-col w-full md:flex-col lg:grid lg:grid-cols-2 gap-34">
                {/* Column 1 */}
                <div className="flex flex-col gap-2 ">
                    {/*Row 1*/}
                    <div className="w-full flex flex-col  border border-gray-100 p-2  w-fill sm:w-fill md:w-fill lg:w-[43vw]">
                        <div className="flex flex-col mb-3">
                            <div className="flex justify-between">
                                <div className="text-[14px] font-[500] text-graph-text ml-2">Recent Transactions</div>
                                <div className="bg-light-sea-green h-[12px] w-[10px]">
                                    <img src={'/images/sidebar/filter.png'} />
                                </div>
                            </div>
                            <div className="text-grey-text font-[400] text-[12px] ml-2">Jan 24 - Dec 24</div>
                        </div>
                        <div className="flex justify-around gap-2 items-start px-[4px] pb-[0px] pt-[10px] flex-col-reverse [@media(max-width:1100px)]:flex-col-reverse lg:flex-row">
                            {/*BAR CHART START*/}
                            <div className="p-0">
                                <CustomBarChart data={[
                                    { label: 'Jan', topValue: 1, bottomValue: 1 },
                                    { label: 'Feb', topValue: 20, bottomValue: 60 },
                                    { label: 'Mar', topValue: 50, bottomValue: 25 },
                                    { label: 'Apr', topValue: 40, bottomValue: 20 },
                                    { label: 'May', topValue: 10, bottomValue: 20 },
                                    { label: 'Jun', topValue: 20, bottomValue: 60 },
                                    { label: 'Jul', topValue: 50, bottomValue: 25 },
                                    { label: 'Aug', topValue: 40, bottomValue: 20 },
                                    { label: 'Sept', topValue: 11, bottomValue: 15 },
                                    { label: 'Oct', topValue: 20, bottomValue: 60 },
                                    { label: 'Nov', topValue: 50, bottomValue: 25 },
                                    { label: 'Dec', topValue: 40, bottomValue: 20 },
                                ]} maxY={100} yTicks={4} />
                            </div>
                            {/*BAR CHART END */}
                            <div className="self-start">
                                <span className="text-[10px] font-[400]">Billed</span>
                                <p className="text-[10px] font-[500] mb-[8px]">$23456789</p>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <div className="flex gap-2">
                                            <div className="w-[12px] h-[12px] bg-light-sea-green rounded-[1px]"></div>
                                            <p className="text-[10px] font-[400]">Paid</p>
                                        </div>
                                        <p className="text-light-sea-green text-[10px] font-[500] ml-5">$56789345</p>
                                    </div>
                                    <div>
                                        <div className="flex gap-2">
                                            <div className="w-[12px] h-[12px] bg-light-navy-blue rounded-[1px]"></div>
                                            <p className="text-[10px] font-[400]">Unpaid</p>
                                        </div>
                                        <p className="text-light-navy-blue text-[10px] font-[500] ml-5">$56789345</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Row 2*/}
                    <div class="bg-white w-full border border-gray-100  w-[80vw] sm:w-[80vw] md:w-[40vw] lg:w-[43vw]">
                        <h2 class="text-[14px] font-[500]  mb-4 mx-2 mt-2">Rent/Sale Details</h2>
                        <div className="w-full overflow-hidden">
                            <table class="w-fill text-sm text-left text-gray-700">
                                <tbody>
                                    <tr class="border-b border-gray-100 flex justify-between">
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">Rent Type</div>
                                        </td>
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64"></div>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-100 flex justify-between">
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">Security Deposit</div>
                                        </td>
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">AED 0.0</div>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-100 flex justify-between">
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">Market Value</div>
                                        </td>
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">AED 0.0</div>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-100 flex justify-between">
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">Threshold Value</div>
                                        </td>
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">AED 0.0</div>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-100 flex justify-between">
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">Rent Per Square Foot</div>
                                        </td>
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">AED 0.0</div>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-100 flex justify-between">
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">Actual Rent Value</div>
                                        </td>
                                        <td class="py-2 font-[400] text-[11px] px-2">
                                            <div class="w-40 md:w-52 lg:w-64">AED 0.0</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/*Row 3*/}
                    <div class="bg-white w-full border border-gray-100  w-[80vw] sm:w-[80vw] md:w-[40vw] lg:w-[43vw] rounded-sm">
                        <section class="bg-white rounded-lg p-4 w-full max-w-4xl text-sm">
                            <h2 class="text-lg font-semibold mb-4 text-[#272729]">Lease History</h2>

                            <table class="w-full rounded-[10px] table-fixed border border-table-border text-[11px]">
                                <thead>
                                    <tr class="text-left text-gray-500 border-b border-gray-200">
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Name</th>
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Status</th>
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Start Date</th>
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">End Date</th>
                                        <th class="py-2 px-3 font-normal font-[500] text-[11px]">Rent</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-900 font-normal ">
                                    {Array(7).fill(0).map((arr, index) => (
                                        <tr class="border-l border-r border-table-border" style={{ backgroundColor: index % 2 === 0 ? "#E7F3F9" : "white" }}>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text">John Thomas</td>
                                            <td class="py-2 px-3 border-r border-l-2 border-table-border">
                                                <span class="bg-light-sea-green text-white text-[9px] font-[300] px-1 py-0.5 rounded-[2px] w-[40px] h-[13px]">Active</span>
                                            </td>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text border-r-2 border-l-2 border-table-border">10-12-2024</td>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text border-r-2 border-l border-table-border">09-12-2025</td>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text">20,000.00</td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </section>

                    </div>

                    {/*Row 4*/}
                    <div class="bg-white w-full border border-gray-100  w-[80vw] sm:w-[80vw] md:w-[40vw] lg:w-[43vw] rounded-sm">
                        <section class="bg-white rounded-lg p-4 w-full max-w-4xl text-sm">
                            <h2 class="text-lg font-semibold mb-5.5 text-[#272729]">Commission Details</h2>
                            <h4 class="text-md font-semibold mb-3.5 text-[#272729]">Tenant Commission</h4>
                            <table class="w-full rounded-[10px] table-fixed border border-table-border text-[11px] mb-5.5">
                                <thead>
                                    <tr class="text-left  border-b border-gray-200">
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Description</th>
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Amount</th>
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Status</th>
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Invoice Date</th>
                                        <th class="py-2 px-3 font-normal font-[500] text-[11px]">Amount</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-900 font-normal ">
                                    {tableResultArr.map((arr, index) => (
                                        <tr class="border-l border-r border-table-border" style={{ backgroundColor: index % 2 === 0 ? "#E7F3F9" : "white" }}>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text">John Thomas</td>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text border-r-2 border-l-2 border-table-border">5000</td>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text border-r-2 border-l-2 border-table-border">10-12-2024</td>
                                            <td class="py-2 px-3 border-r border-l-2 border-table-border">
                                                <span class="bg-light-sea-green text-white text-[9px] font-[300] px-1 py-0.5 rounded-[2px] w-[40px] h-[13px]" style={{
                                                    backgroundColor: arr === "paid" ? "#70EDE2" :
                                                        arr === "unpaid" ? "ffde21" :
                                                            arr === "hold" ? "gray" :
                                                                (arr === "bad dept" || arr === "overdue") ? "red" :
                                                                    "black"
                                                }}>{arr}</span>
                                            </td>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text">20,000.00</td>
                                        </tr>))}
                                </tbody>
                            </table>

                            <h4 class="text-md font-semibold mb-3.5 text-[#272729]">Owner Commission</h4>
                            <table class="w-full rounded-[10px] table-fixed border border-table-border text-[11px] mb-5.5">
                                <thead>
                                    <tr class="text-left  border-b border-gray-200">
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Description</th>
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Amount</th>
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Status</th>
                                        <th class="py-2 px-3 font-normal border-r-2 border-l border-table-border font-[500] text-[11px]">Invoice Date</th>
                                        <th class="py-2 px-3 font-normal font-[500] text-[11px]">Amount</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-900 font-normal ">
                                    {tableResultArr.map((arr, index) => (
                                        <tr class="border-l border-r border-table-border" style={{ backgroundColor: index % 2 === 0 ? "#E7F3F9" : "white" }}>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text">John Thomas</td>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text border-r-2 border-l-2 border-table-border">5000</td>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text border-r-2 border-l-2 border-table-border">10-12-2024</td>
                                            <td class="py-2 px-3 border-r border-l-2 border-table-border">
                                                <span class="bg-light-sea-green text-white text-[9px] font-[300] px-1 py-0.5 rounded-[2px] w-[40px] h-[13px]" style={{
                                                    backgroundColor: arr === "paid" ? "#70EDE2" :
                                                        arr === "unpaid" ? "ffde21" :
                                                            arr === "hold" ? "gray" :
                                                                (arr === "bad dept" || arr === "overdue") ? "red" :
                                                                    "black"
                                                }}>{arr}</span>
                                            </td>
                                            <td class="py-2 px-3 font-[300] text-[11px] text-graph-text">20,000.00</td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </section>

                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-2">

                    {/*Row 1*/}
                    <div class="w-[372px] p-4 rounded-md border border-gray-100 bg-white">
                        {/* <!-- Header --> */}
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="text-base font-semibold text-gray-800">Financials Snapshot</h2>
                            <div className="bg-light-sea-green h-[12px] w-[10px]">
                                <img src={'/images/sidebar/filter.png'} />
                            </div>
                        </div>

                        {/* <!-- Income --> */}
                        <div class="flex justify-start gap-[80px] items-start mb-4">
                            <div>
                                <div class="flex items-center gap-1">
                                    <p class="text-[11px] font-[400] text-gray-500">Income</p>
                                    <svg class="w-5 h-5 rounded text-light-sea-green" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 10l5-5 5 5H5z" />
                                    </svg>
                                </div>
                                <p class="text-light-sea-green font-[500] text-[11px]">$598720918</p>
                            </div>
                            {/* <!-- SVG Line Chart --> */}

                            <svg viewBox="0 0 150 50" class="w-[140px] h-[50px]">
                                <line x1="5" y1="0" x2="5" y2="45" stroke="#edf2f7" stroke-width="0.5" />

                                <line x1="5" y1="45" x2="145" y2="45" stroke="#edf2f7" stroke-width="0.5" />

                                <polyline
                                    fill="none"
                                    stroke="#70EDE2"
                                    stroke-width="1"
                                    points=" 25,35 45,15 65,20 85,5 105,35 125,30 145,15"
                                />
                            </svg>

                        </div>

                        {/* <!-- Expense --> */}
                        <div class="flex justify-start gap-[80px] items-start">
                            <div>
                                <div class="flex items-center gap-1">
                                    <p class="text-[11px] font-[400] text-gray-500">Expense</p>
                                    <svg class="w-5 h-5 rounded text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 10l5 5 5-5H5z" />
                                    </svg>
                                </div>
                                <p class="text-gray-800 font-[500] text-[11px]">$20876394</p>
                            </div>
                            {/* <!-- SVG Line Chart --> */}
                            <svg viewBox="0 0 150 50" class="w-[140px] h-[50px]">
                                <line x1="5" y1="0" x2="5" y2="45" stroke="#edf2f7" stroke-width="0.5" />

                                <line x1="5" y1="45" x2="145" y2="45" stroke="#edf2f7" stroke-width="0.5" />

                                <polyline
                                    fill="none"
                                    stroke="#ff0000"
                                    stroke-width="1"
                                    points=" 25,35 45,15 65,20 85,5 105,35 125,30 145,15"
                                />
                            </svg>

                        </div>
                    </div>

                    {/*Row 2*/}
                    <div class="bg-white w-[372px] h-[160px] border border-[#EFF5F8] rounded-md p-4  flex justify-between">
                        <h3 class="text-sm font-semibold text-gray-700 mb-4">Occupancy Stats</h3>
                        <div class="flex justify-center items-center">
                            <div class="relative w-[182px] h-[145px]">

                                <div className="relative flex flex-col h-[155px] items-center gap-0 justify-center">
                                    <svg class="w-full h-full flex" viewBox="0 0 96 96">
                                        {/* <!-- White base track --> */}
                                        <circle
                                            cx="48" cy="48" r="38"
                                            fill="none"
                                            stroke="#ffff"
                                            stroke-width="8"
                                        />

                                        {/* <!-- Grey segment (20%) --> */}
                                        <circle
                                            cx="48" cy="48" r="38"
                                            fill="none"
                                            stroke="#f3f4f6"
                                            stroke-width="8"
                                            stroke-dasharray="45.7 190.4"
                                            stroke-dashoffset="59.625"
                                            stroke-linecap="round"
                                            transform="rotate(57 48 48)"
                                        />

                                        {/* <!-- Teal segment (1/3 of 55%) --> */}
                                        <circle
                                            cx="48" cy="48" r="38"
                                            fill="none"
                                            stroke="#70EDE2"
                                            stroke-width="8"
                                            stroke-dasharray="60.6 194.4"
                                            stroke-dashoffset="107.225"
                                            stroke-linecap="round"
                                            transform="rotate(57 48 48)"
                                        />

                                        {/* <!-- Blue segment --> */}
                                        <circle
                                            cx="48" cy="48" r="38"
                                            fill="none"
                                            stroke="#003A92"
                                            stroke-width="8"
                                            stroke-dasharray="60.6 194.4"
                                            stroke-dashoffset="150.825"
                                            stroke-linecap="round"
                                            transform="rotate(57 48 48)"
                                        />

                                        {/* <!-- Indigo segment --> */}
                                        <circle
                                            cx="48" cy="48" r="38"
                                            fill="none"
                                            stroke="#1D90D8"
                                            stroke-width="8"
                                            stroke-dasharray="60.6 194.4"
                                            stroke-dashoffset="194.425"
                                            stroke-linecap="round"
                                            transform="rotate(57 48 48)"
                                        />
                                    </svg>
                                    <div className="absolute top-[75%] flex justify-between gap-[70px]">
                                        <p className="text-sm text-gray-200 font-[400]">0%</p>
                                        <p className="text-sm text-gray-200 font-[400]">100%</p>
                                    </div>
                                </div>

                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-[24px] font-medium text-light-sea-green">75%</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light-sea-green h-[12px] w-[10px]">
                            <img src={'/images/sidebar/filter.png'} />
                        </div>
                    </div>

                    {/*Row 3*/}
                    <div className="bg-white w-[372px]  border border-[#EFF5F8] rounded-md p-4  flex justify-between">
                        <div class="bg-white w-full ">
                            <div className="flex justify-between">
                                <h3 class="text-sm font-semibold text-gray-700 mb-4">Facility Management</h3>
                                <div className="bg-light-sea-green h-[12px] w-[10px]">
                                    <img src={'/images/sidebar/filter.png'} />
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="text-[7px] font-[300] text-gray-600 mb-1">Plumbing</div>
                                <div class="w-full h-[7px] rounded-full">
                                    <div class="bg-light-sea-green h-[7px] rounded-full w-[60%]"></div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="text-[7px] font-[300] text-gray-600 mb-1">Electrical</div>
                                <div class="w-full  h-[7px] rounded-full">
                                    <div class="bg-dark-navy-blue h-[7px] rounded-full w-[85%]"></div>
                                </div>
                            </div>

                            <div>
                                <div class="text-[7px] font-[300] text-gray-600 mb-1">Joinery</div>
                                <div class="w-full  h-[7px] rounded-full">
                                    <div class="bg-light-navy-blue h-[7px] rounded-full w-[55%]"></div>
                                </div>
                            </div>
                            <div className="relative flex justify-start gap-5 items-center mt-2">
                                <h2 className="font-[500] text-[14px]">Completion Status</h2>
                                <svg class="w-[136px] h-[140px] flex" viewBox="0 0 96 96">
                                    {/* <!-- White base track --> */}
                                    <circle
                                        cx="48" cy="48" r="38"
                                        fill="none"
                                        stroke="#ffff"
                                        stroke-width="8"
                                    />

                                    {/* <!-- Grey segment (20%) --> */}
                                    <circle
                                        cx="48" cy="48" r="38"
                                        fill="none"
                                        stroke="#f3f4f6"
                                        stroke-width="2"
                                        stroke-dasharray="90.4 190.4"
                                        stroke-dashoffset="59.625"
                                        stroke-linecap="round"
                                        transform="rotate(36 48 48)"
                                    />

                                    {/* <!-- Teal segment (1/3 of 55%) --> */}
                                    <circle
                                        cx="48" cy="48" r="38"
                                        fill="none"
                                        stroke="#70EDE2"
                                        stroke-width="4"
                                        stroke-dasharray="300 194.4"
                                        stroke-dashoffset="107.225"
                                        stroke-linecap="round"
                                        transform="rotate(36 48 48)"
                                    />


                                </svg>
                                <div class="absolute inset-0 left-[22%] flex items-center justify-center">
                                    <span class="text-[24px] font-medium text-light-sea-green">75%</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*Row 4*/}
                    <div className="bg-white w-[372px]  border border-[#EFF5F8] rounded-md p-4  flex justify-between">
                        <div class="bg-white w-full ">
                            <div className="flex justify-between">
                                <h3 class="text-sm font-semibold text-gray-700 mb-4">Commission Snapshot</h3>
                                <div className="bg-light-sea-green h-[12px] w-[10px]">
                                    <img src={'/images/sidebar/filter.png'} />
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="text-[7px] font-[300] text-gray-600 mb-1">Company</div>
                                <div class="w-[65%] h-[7px] rounded-full bg-navbar-blue relative overflow-hidden">
                                    <div class="bg-light-sea-green h-full w-[45%] rounded-full absolute top-0 left-0"></div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="text-[7px] font-[300] text-gray-600 mb-1">Agent 1</div>
                                <div class="w-[60%] h-[7px] rounded-full bg-navbar-blue relative overflow-hidden">
                                    <div class="bg-light-sea-green h-full w-[75%] rounded-full absolute top-0 left-0"></div>
                                </div>
                            </div>

                            <div>
                                <div class="text-[7px] font-[300] text-gray-600 mb-1">Agent 2</div>
                                <div class="w-[55%] h-[7px] rounded-full bg-navbar-blue relative overflow-hidden">
                                    <div class="bg-light-sea-green h-full w-[55%] rounded-full absolute top-0 left-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Row 5*/}
                    <div className="bg-white w-[372px]  border border-[#EFF5F8] rounded-md   flex justify-between">
                        {/* <div class="bg-white rounded-lg w-full max-w-xl text-sm">
                            <div className="flex justify-between h-[64px] px-4 py-2">
                                <h2 class="text-lg font-semibold mb-4">Unit Information</h2>
                                <div className="bg-light-sea-green h-[12px] w-[10px]">
                                    <img src={'/images/sidebar/filter.png'} />
                                </div>
                            </div>
                            <div class="flex flex-col gap-y-2 gap-x-4">
                                <div className="border-t-1 border-gray-100 flex justify-start gap-[42%] items-center">
                                    <div class="text-gray-500 ml-2">Owner</div>
                                    <div class="text-gray-900 font-[300] text-[11px]  ">Manohar Lahori, Karen Foz, see</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Property</div>
                                    <div class="text-blue-600 underline cursor-pointer font-[300] text-[11px]">My Property</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between ">
                                    <div class="text-gray-500 ml-2">Unit Tags</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">—</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between ">
                                    <div class="text-gray-500 ml-2">Unit Size</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">N/A</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between ">
                                    <div class="text-gray-500 ml-2">Assigned to</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">—</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Unit No</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">2</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Unit Type</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">Hotel</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Unit Category</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">Commercial</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Status</div>
                                    <div class="text-blue-600 font-[300] text-[11px] underline cursor-pointer">Vacant</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Off Plan</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">No</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Furnished</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">Unfurnished</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Smoking</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">Smoking Not Allowed</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">For Sale</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">No</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Electricity No</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">N/A</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between ">
                                    <div class="text-gray-500 ml-2">Gas No</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">N/A</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between ">
                                    <div class="text-gray-500 ml-2">Under Renovation</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">False</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Under Dispute</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">No</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Bed</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">1 Bed</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Parking</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">Not Available</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between">
                                    <div class="text-gray-500 ml-2">Service Charges Per Sq Ft</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">AED 0.0</div>
                                </div>
                                <div className="border-t-1 border-gray-100 flex justify-between ">
                                    <div class="text-gray-500 ml-2">Total Service Charges</div>
                                    <div class="text-gray-900 font-[300] text-[11px]">AED 0.0</div>
                                </div>
                            </div>
                        </div> */}
                        <div class="bg-white rounded-lg w-full max-w-xl text-sm">
                            <div class="flex justify-between items-center h-[64px] px-4 py-2">
                                <h2 class="text-lg font-semibold">Unit Information</h2>
                                <div class="bg-light-sea-green h-[12px] w-[10px]">
                                    <img src="/images/sidebar/filter.png" alt="Filter" />
                                </div>
                            </div>
                            <table class="w-full text-[11px] border-collapse">
                                <tbody>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Owner</td>
                                        <td class="text-gray-900 font-light py-2 px-2">Manohar Lahori, Karen Foz, see</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Property</td>
                                        <td class="text-blue-600 underline cursor-pointer font-light py-2 px-2">My Property</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Unit Tags</td>
                                        <td class="text-gray-900 font-light py-2 px-2">—</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Unit Size</td>
                                        <td class="text-gray-900 font-light py-2 px-2">N/A</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Assigned to</td>
                                        <td class="text-gray-900 font-light py-2 px-2">—</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Unit No</td>
                                        <td class="text-gray-900 font-light py-2 px-2">2</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Unit Type</td>
                                        <td class="text-gray-900 font-light py-2 px-2">Hotel</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Unit Category</td>
                                        <td class="text-gray-900 font-light py-2 px-2">Commercial</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Status</td>
                                        <td class="text-blue-600 underline cursor-pointer font-light py-2 px-2">Vacant</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Off Plan</td>
                                        <td class="text-gray-900 font-light py-2 px-2">No</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Furnished</td>
                                        <td class="text-gray-900 font-light py-2 px-2">Unfurnished</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Smoking</td>
                                        <td class="text-gray-900 font-light py-2 px-2">Smoking Not Allowed</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">For Sale</td>
                                        <td class="text-gray-900 font-light py-2 px-2">No</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Electricity No</td>
                                        <td class="text-gray-900 font-light py-2 px-2">N/A</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Gas No</td>
                                        <td class="text-gray-900 font-light py-2 px-2">N/A</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Under Renovation</td>
                                        <td class="text-gray-900 font-light py-2 px-2">False</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Under Dispute</td>
                                        <td class="text-gray-900 font-light py-2 px-2">No</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Bed</td>
                                        <td class="text-gray-900 font-light py-2 px-2">1 Bed</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Parking</td>
                                        <td class="text-gray-900 font-light py-2 px-2">Not Available</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Service Charges Per Sq Ft</td>
                                        <td class="text-gray-900 font-light py-2 px-2">AED 0.0</td>
                                    </tr>
                                    <tr class="border-t border-gray-100">
                                        <td class="text-gray-900 py-2 px-2 font-[400] text-[11px]">Total Service Charges</td>
                                        <td class="text-gray-900 font-light py-2 px-2">AED 0.0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </HeaderLayout>

    </>)
}

export default Units;