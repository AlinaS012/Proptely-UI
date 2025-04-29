// import { Area, Bar, BarChart, CartesianGrid, Cell, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// // const data = [
// //     { name: 'Jan', value: 4000, color: '#8884d8' },
// //     { name: 'Feb', value: 3000, color: '#82ca9d' },
// //     { name: 'Mar', value: 2000, color: '#ffc658' },
// //     { name: 'Apr', value: 2780, color: '#ff7f50' }
// // ];
// // const data = [
// //     {
// //         name: 'Jan',
// //         segments: [
// //             { value: 30, color: '#8884d8' },
// //             { value: 20, color: '#82ca9d' },
// //             { value: 50, color: '#ffc658' }
// //         ],
// //         total: 100 // sum of segments
// //     },
// //     {
// //         name: 'Feb',
// //         segments: [
// //             { value: 60, color: '#ff7f50' },
// //             { value: 40, color: '#00C49F' }
// //         ],
// //         total: 100
// //     }
// // ];
// const common = {
//     topColor: '#1D90D8',
//     bottomColor: '#70EDE2',
// }
// const data = [
//     {
//         ...common,
//         name: 'Jan',
//         value: 100,
//     },
//     {
//         ...common,
//         name: 'Feb',
//         value: 80,
//     },
//     {
//         ...common,
//         name: 'Mar',
//         value: 100,

//     },
//     {
//         ...common,
//         name: 'Apr',
//         value: 80,
//     },
//     {
//         ...common,
//         name: 'May',
//         value: 100,
//     },
//     {
//         ...common,
//         name: 'Jun',
//         value: 80,
//     },
//     {
//         ...common,
//         name: 'Jul',
//         value: 100,
//     },
//     {
//         ...common,
//         name: 'Aug',
//         value: 80,
//     },
//     {
//         ...common,
//         name: 'Sept',
//         value: 100,

//     },
//     {
//         ...common,
//         name: 'Oct',
//         value: 80,
//     },
//     {
//         ...common,
//         name: 'Nov',
//         value: 100,
//     },
//     {
//         ...common,
//         name: 'Dec',
//         value: 80,
//     },
// ];


// const CustomBar = ({ x, y, width, height, payload }) => {
//     const halfHeight = height / 2;

//     return (
//         <>
//             {/* Bottom half */}
//             <rect
//                 x={x}
//                 y={y + halfHeight}
//                 width={width}
//                 height={halfHeight}
//                 fill={payload.bottomColor}
//                 rx={2}
//                 ry={2}
//             />
//             {/* Top half */}
//             <rect
//                 x={x}
//                 y={y}
//                 width={width}
//                 height={halfHeight}
//                 fill={payload.topColor}
//                 rx={2}
//                 ry={2}
//             />
//         </>
//     );
// };


// const _BarChart = () => {
//     return (<div className="w-full h-[148px]  h-[148px] sm:w-[500px] md:w-[700px] lg:w-[900px]">
//         <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={data} width={540}>
//                 {/* <CartesianGrid strokeDasharray="3 3" /> */}
//                 <XAxis dataKey="name" color="#E7F3F9" />
//                 <YAxis color="#E7F3F9" /> 
//                 <Tooltip />
//                 {/* <Legend/> */}
//                 <Bar dataKey="value" shape={<CustomBar width={8} />} />
//             </BarChart>
//         </ResponsiveContainer>
//     </div>
//     )
// }

// export default _BarChart;



import React from 'react'

const CustomBarChart = ({ data, maxY = 100, yTicks = 5 }) => {
  const barMaxHeight = 150

  const getBarHeight = (val) => (val / maxY) * barMaxHeight

  const yAxisLabels = Array.from({ length: yTicks + 1 }, (_, i) =>
    Math.round((maxY / yTicks) * (yTicks - i))
  )

  return (
    <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[520px]"
    // "w-full max-w-4xl"
    >
      <div className="flex">
        {/* Y Axis */}
        <div className="flex flex-col justify-between h-[200px] pr-3 text-xs text-gray-500">
          {/* {yAxisLabels.map((val, idx) => (
            <span key={idx}>{val}</span>
          ))} */}
        </div>

        {/* Chart */}
        <div className="flex-1">
          {/* Chart Grid & Bars */}
          <div className="relative h-[148px] border-l border-b-[1px] border-gray-100">
            {/* Grid Lines */}
            {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
              {yAxisLabels.map((_, i) => (
                <div key={i} className="border-t border-dashed border-gray-300" />
              ))}
            </div> */}

            {/* Bars */}
            <div className="absolute bottom-0 left-0 w-full flex items-end justify-start h-full px-4 gap-[6vw] sm:gap-[3vw] md:gap-[32px] lg:gap-[24px]">
              {data.map((item, index) => {
                const topHeight = getBarHeight(item.topValue)
                const bottomHeight = getBarHeight(item.bottomValue)

                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="flex flex-col-reverse h-full justify-end">
                      {/* Bottom */}
                      <div
                        className="w-[8px] bg-light-sea-green rounded-t-none"
                        style={{ height: `${bottomHeight}px` }}
                      />
                      {/* Top */}
                      <div
                        className="w-[8px] bg-light-navy-blue rounded-t-md"
                        style={{ height: `${topHeight}px` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* X Axis Labels */}
          <div className="flex justify-start px-4 gap-[6vw] sm:gap-[3vw] md:gap-[32px] lg:gap-[24px] mt-2 text-sm ">
            {data.map((item, index) => (
              <span key={index} className="w-[8px] text-center text-grey-text text-[9px] font-[300]">
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomBarChart
