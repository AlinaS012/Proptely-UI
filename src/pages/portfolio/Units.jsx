import React from "react";
import HeaderLayout from "../../layouts/header-layout";
import _BarChart from "../../components/barchart/BarChart";
import _LineChart from "../../components/linechart/LineChart";
import CustomBarChart from "../../components/barchart/BarChart";
const Units = () => {
    return (<>
        <div className="flex justify-between w-full">
            <p className="text-[20px] font-semibold">Unit No</p>
            {/* <select className="px-[20px] rounded bg-dark-navy-blue h-[30px] w-[100px] text-white outline-none">
                <option></option>
                <option></option>
            </select> */}
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
            <div className="flex flex-col w-full md:flex-col lg:grid lg:grid-cols-2 gap-18">
                {/* Column 1 */}
                <div className="flex flex-col gap-2 ">
                    {/*Row 1*/}
                    <div className="w-full flex flex-col  border border-gray-100 p-2  w-[300px] sm:w-[300px] md:w-[400px] lg:w-[520px]">
                        <div className="flex flex-col mb-3">
                            <div className="flex justify-between">
                                <div className="text-[14px] font-[500] text-graph-text ml-2">Recent Transactions</div>
                                <div className="bg-light-sea-green h-[12px] w-[10px]">
                                    <img src={'/images/sidebar/filter.png'} />
                                </div>
                            </div>
                            <div className="text-grey-text font-[400] text-[12px] ml-2">Jan 24 - Dec 24</div>
                        </div>
                        <div className="flex justify-around gap-2 items-start px-[4px] pb-[0px] pt-[10px] flex-col-reverse md:flex-row">
                            {/* <_BarChart /> */}
                            {/*BAR CHART START*/}
                            <div className="p-0">
                                {/* <h1 className="text-2xl font-semibold mb-6">Custom Bar Chart</h1> */}
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
                    <div class="bg-white w-full border border-gray-100 w-[300px] sm:w-[300px] md:w-[400px] lg:w-[520px]">
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

                    <div className="w-full h-[50px] border border-gray-300"></div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-2">
                    {/* <div className="w-full w-[340px] lg:w-[372px] h-[148px] p-[18px]">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-[14px] font-[500]">Financial Snapshots</p>
                            </div>
                            <div className="bg-light-sea-green h-[12px] w-[10px]">
                                <img src={'/images/sidebar/filter.png'} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <div className="flex justify-between">
                                <div>
                                    <div className="flex items-start"><p className="text-[11px] font-[400]">Income</p>
                                        <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                        </svg>
                                    </div>
                                    <p className="text-[11px] font[500]">$789567345</p>
                                </div>
                                <_LineChart data={[
                                    {
                                        "name": "Page A",
                                        "uv": 4000,
                                        "pv": 2400,
                                        "amt": 2400
                                    },
                                    {
                                        "name": "Page B",
                                        "uv": 3000,
                                        "pv": 1398,
                                        "amt": 2210
                                    },
                                    {
                                        "name": "Page A",
                                        "uv": 4000,
                                        "pv": 2400,
                                        "amt": 2400
                                    },
                                    {
                                        "name": "Page B",
                                        "uv": 3000,
                                        "pv": 1398,
                                        "amt": 2210
                                    },
                                    {
                                        "name": "Page C",
                                        "uv": 2000,
                                        "pv": 9800,
                                        "amt": 2290
                                    },
                                    {
                                        "name": "Page D",
                                        "uv": 2780,
                                        "pv": 3908,
                                        "amt": 2000
                                    },
                                    {
                                        "name": "Page E",
                                        "uv": 1890,
                                        "pv": 4800,
                                        "amt": 2181
                                    },
                                    {
                                        "name": "Page F",
                                        "uv": 2390,
                                        "pv": 3800,
                                        "amt": 2500
                                    },
                                    {
                                        "name": "Page G",
                                        "uv": 3490,
                                        "pv": 4300,
                                        "amt": 2100
                                    }
                                ]} />
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <div className="flex items-center">
                                        <p className="text-[11px] font-[400]">Income</p>
                                        <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></div>
                                    <p className="text-[11px] font[500]">$789567345</p>
                                </div>
                                <_LineChart data={[
                                    {
                                        "name": "Page A",
                                        "uv": 4000,
                                        "pv": 2400,
                                        "amt": 2400
                                    },
                                    {
                                        "name": "Page B",
                                        "uv": 800,
                                        "pv": 1398,
                                        "amt": 2210
                                    },
                                    {
                                        "name": "Page A",
                                        "uv": 100,
                                        "pv": 2400,
                                        "amt": 2400
                                    },
                                    {
                                        "name": "Page B",
                                        "uv": 3000,
                                        "pv": 1398,
                                        "amt": 2210
                                    },
                                    {
                                        "name": "Page C",
                                        "uv": 2000,
                                        "pv": 9800,
                                        "amt": 2290
                                    },
                                    {
                                        "name": "Page D",
                                        "uv": 2780,
                                        "pv": 3908,
                                        "amt": 2000
                                    },
                                    {
                                        "name": "Page E",
                                        "uv": 1890,
                                        "pv": 4800,
                                        "amt": 2181
                                    },
                                    {
                                        "name": "Page F",
                                        "uv": 2390,
                                        "pv": 3800,
                                        "amt": 2500
                                    },
                                    {
                                        "name": "Page G",
                                        "uv": 3490,
                                        "pv": 4300,
                                        "amt": 2100
                                    }
                                ]} />
                            </div>
                        </div>
                    </div> */}
                    <div class="w-[372px] h-[148px] border border-[#EFF5F8] rounded-md p-4 flex flex-col justify-between">
                        <div class="flex justify-between items-start">
                            <h3 class="text-black font-semibold text-lg">Financials Snapshot</h3>
                            <div class="w-6 h-6 bg-[#A0F0E8] rounded flex items-center justify-center text-white text-sm font-bold">
                                <span class="text-[#2ED3B7]">⏵</span>
                            </div>
                        </div>

                        <div class="flex justify-between items-end">
                            <div class="space-y-2">
                                <div>
                                    <span class="text-gray-500 text-sm">Income</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-[#2ED3B7] font-semibold">$598720918</span>
                                        <span class="text-[#2ED3B7] text-sm">▲</span>
                                    </div>
                                </div>
                                <div>
                                    <span class="text-gray-500 text-sm">Expense</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-[#FF5A5F] font-semibold">$20876394</span>
                                        <span class="text-[#FF5A5F] text-sm">▼</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col space-y-2">
                                <div class="w-32 h-6 bg-[#D1FAE5] rounded-sm"></div>
                                <div class="w-32 h-6 bg-[#FEE2E2] rounded-sm"></div>
                            </div>
                        </div>
                    </div>
                    {/*Row 2*/}
                    <div class="bg-white w-[372px] h-[160px] border border-[#EFF5F8] rounded-md p-4 rounded-2xl flex justify-between">
                        <h3 class="text-sm font-semibold text-gray-700 mb-4">Occupancy Stats</h3>
                        <div class="flex justify-center items-center">
                            <div class="relative w-[182px] h-[145px]">
                                {/* <!-- Circle Background --> */}
                                {/* <svg class="w-full h-full rotate-[-90deg]">
                                    <circle cx="48" cy="48" r="38" fill="none" stroke="#E5E7EB" stroke-width="10" />
                                    <circle
                                        cx="48" cy="48" r="38" fill="none" stroke="#22D3EE"
                                        stroke-width="10" stroke-dasharray="238"
                                        stroke-dashoffset="60"
                                        stroke-linecap="round"
                                    />
                                </svg> */}
                                {/* <svg class="w-full h-full" viewBox="0 0 96 96">
                                    <circle
                                        cx="48" cy="48" r="38"
                                        fill="none"
                                        stroke="#E5E7EB"
                                        stroke-width="8"
                                    />

                                    <circle
                                        cx="48" cy="48" r="38"
                                        fill="none"
                                        stroke="#22D3EE"
                                        stroke-width="8"
                                        stroke-dasharray="190.4 47.6"
                                        stroke-dashoffset="118.8"
                                        stroke-linecap="round"
                                        transform="rotate(-55 48 48)"
                                    />
                                </svg> */}

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

                    <div className="bg-white w-[372px]  border border-[#EFF5F8] rounded-md p-4 rounded-2xl flex justify-between">
                        <div class="bg-white w-full ">
                            <h3 class="text-sm font-semibold text-gray-700 mb-4">Facility Management</h3>

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
                            <div className="relative flex justify-between items-center mt-2">
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
                                <div class="absolute inset-0 left-[62%] flex items-center justify-center">
                                    <span class="text-[24px] font-medium text-light-sea-green">75%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </HeaderLayout>

    </>)
}

export default Units;