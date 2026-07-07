import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

import { ChevronDown } from "lucide-react";

const data = [
  { day: "Mon", activity: 20 },
  { day: "Tue", activity: 35 },
  { day: "Wed", activity: 28 },
  { day: "Thu", activity: 45 },
  { day: "Fri", activity: 38 },
  { day: "Sat", activity: 52 },
  { day: "Sun", activity: 41 },
];

export default function TradingLineChart({h1, className}) {
  return (
    <div className={`h-[400px] mt-5 bg-gradient-to-r from-[#100E24] to-[#161233] rounded-2xl p-5 ${className}`}>
      
      {/* Header */}
      <div className="mb-6 flex justify-between">
        <h1 className="text-[20px] text-gray-400">
          {h1}
        </h1>

        <button className="text-white flex gap-2 text-sm items-center border border-[#5B5B5B] p-[8px] rounded-[4.07px]">
            This week <ChevronDown 
                          className="w-5 h-5"  
                      />
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="75%">
        <LineChart data={data}>
          
          <defs>
            <linearGradient
              id="priceGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#1E6FB9"
                stopOpacity={0.4}
              />
              <stop
                offset="100%"
                stopColor="#1E6FB9"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="#1A2438"
            strokeDasharray=""
          />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
             tickMargin={20}
            padding={{left: 20 }}
            tick={{ fill: "#8C8C8C", fontSize: 12 }}
          />

           <YAxis 
         axisLine={false}
            tickLine={false}
             tickMargin={10}
            tick={{ fill: "#8C8C8C", fontSize: 12 }}
            
          /> 

          <Tooltip
           cursor={false}
            contentStyle={{
              backgroundColor: "#1E1E2E",
              border: "none",
              borderRadius: '12px',
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="price"
            fill="url(#priceGradient)"
            stroke="none"
          />

          <Line
            type="monotone"
            dataKey="activity"
            stroke="#1E6FB9"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              fill: "#1E6FB9",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}