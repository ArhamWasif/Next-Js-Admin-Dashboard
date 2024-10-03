import React from "react";
import Image from "next/image";
const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl  odd:bg-red-600  even:bg-gray-600 flex-1">
      <div className="p-4 ">
        <div className="flex justify-between  ">
          <span className="bg-white rounded-2xl text-cyan-400 text-xs p-1 px-2">
            2024/25
          </span>
          <Image src="/more.png" width={25} height={10} alt="logo" />
        </div>
        <div className="font-semibold text-xl mt-2">6123</div>
        <h2 className="text-sm text-gray-400">{type}</h2>
      </div>
    </div>
  );
};

export default UserCard;
