"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Girls",
    count: 50,

    fill: "#8884d8",
  },
  {
    name: "Boys",
    count: 50,

    fill: "#83a6ed",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CounterChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full">
      <div className="flex justify-between p-3">
        <h1 className="font-semibold">Students</h1>
        <Image src="/moreDark.png" width={20} height={25} alt="" className="" />
      </div>
      {/* Medium */}
      <div className="w-full h-[70%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* <Image
          src="/maleFemale.png"
          width={50}
          height={50}
          className="absolute top-1/2 -translate-x-1/2 
          -translate-y-1/2 left-1/2"
          alt="logo"
        /> */}
      </div>
      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="rounded-full bg-cyan-600 w-5 h-5" />
          <h1 className="font-semibold">1234</h1>
          <h2 className="text-xs text-gray-200">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="rounded-full bg-yellow-600 w-1/3 h-2/3" />
          <h1 className="font-semibold">1134</h1>
          <h2 className="text-xs text-gray-200">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CounterChart;
