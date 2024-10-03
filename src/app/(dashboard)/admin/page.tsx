import CounterChart from "@/app/components/CounterChart";
import AttendanceChart from "@/app/components/AttendanceChart";
import UserCard from "@/app/components/UserCard";

import React from "react";
import Count from "@/app/components/Count";
import FinancialChart from "@/app/components/FinancialChart";
import Calendar from "@/app/components/Calendar";
import Announcements from "@/app/components/Announcements";

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-2/3  flex flex-col gap-4">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="staff" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Middle Charts */}
          <div className="flex gap-4 lg:w-1/3 flex-col lg:flex:row h-[450px]">
            <CounterChart />
          </div>
          <div className=" w-full h-[450px] lg:w-2/3  ">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Chart */}
        <div className="w-full h-[450px]    ">
          <FinancialChart />
        </div>
      </div>
      {/* Right side */}
      <div className="lg:w-1/3 w-full">
        <div className="w-full bg-white ">
          <Calendar />
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default page;
