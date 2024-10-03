"use client";
import Calendar from "react-calendar";
import { useState } from "react";

import Image from "next/image";
import "react-calendar/dist/Calendar.css";
const MyCalendar = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());

  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="p-4 bg-white ">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-2">
        {events.map((event) => (
          <div
            className="border-2 border-gray-200 
            p-4 rounded-md even:border-green-200 
            odd:border-red-200 
          "
            key={event.id}
          >
            <div className="flex justify-between items-center ">
              <h1 className="font-semibold">{event.title}</h1>
              <span className="text-xs text-gray-200">{event.time}</span>
            </div>
            <p className="mt-2  text-gray-400 desc">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCalendar;
