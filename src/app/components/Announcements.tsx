import React from "react";
import Image from "next/image";
const Announcements = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Annoucements</h1>
        <span className="text-xs text-gray-500">View All</span>
      </div>
      <div className="bg-cyan-100 p-2">
        <div className=" flex justify-between items-center">
          <div className="">Lorem ipsum dolor sit</div>

          <div className="text-xs text-gray-500 bg-white p-1">2024-01-02</div>
        </div>
        <div className="text-sm text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur
          adipiscing elit
        </div>
      </div>
      <br />
      <div className="bg-purple-100 p-3 py-2">
        <div className=" flex justify-between items-center">
          <div className="">Lorem ipsum dolor sit</div>

          <div className="text-xs text-gray-500 bg-white p-1">2024-01-02</div>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur
          adipiscing elit
        </div>
      </div>
      <br />
      <div className="bg-yellow-100 p-3 py-2">
        <div className=" flex justify-between items-center">
          <div className="">Lorem ipsum dolor sit</div>

          <div className="text-xs text-gray-500 bg-white p-1">2024-01-02</div>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur
          adipiscing elit
        </div>
      </div>
    </div>
  );
};

export default Announcements;
{
  /* <div className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur
          adipiscing elit
        </div> */
}
