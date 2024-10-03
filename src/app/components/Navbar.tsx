import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="hidden md:flex ">
        <Image src="/search.png" width={20} height={25} alt="" />
        <input
          className="rounded-full border-2 border-gray-200 "
          placeholder="Search..."
        />
      </div>
      <div className="flex">
        <Image src="/message.png" width={20} height={25} alt="" />
        <Image src="/announcement.png" width={20} height={25} alt="" />
        <span className="rounded-full bg-purple-600 w-4 h-4 absolute">1</span>
        <div className="">
          <div className="">John Doe</div>
          <div className="text-xs text-end text-gray-400">Student</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
