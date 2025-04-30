
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
            <div className="absolute bottom-0 left-0 w-full flex items-end justify-start h-full px-4 gap-[2vw] sm:gap-[2vw] md:gap-[32px] lg:gap-[24px]">
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
          <div className="flex justify-start px-4 gap-[2vw] sm:gap-[2vw] md:gap-[32px] lg:gap-[24px] mt-2 text-sm ">
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
