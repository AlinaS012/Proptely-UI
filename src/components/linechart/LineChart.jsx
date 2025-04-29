import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

const _LineChart = ({ data }) => {
    return (<div className="flex justify-around items-center border border-gray-100 w-[110px] h-[40px]">
        <LineChart width={69} height={40} data={data}
            margin={{ top: 5, right: 9, left: 10, bottom: 5 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend /> */}
            {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    </div>)
}

export default _LineChart