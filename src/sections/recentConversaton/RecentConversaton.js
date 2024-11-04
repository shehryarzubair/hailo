import React from "react";
import "iconify-icon";
import dayjs from "dayjs";

const RecentConversaton = () => {
  const data = [
    { date: "Oct 19, 2024", time: "5:30 PM" },
    { date: "Oct 16, 2024", time: "5:30 PM" },
    { date: "Oct 14, 2024", time: "5:30 PM" },
    { date: "Oct 10, 2024", time: "5:30 PM" },
  ];

  return (
    <div className="recentConversaton">
      <ul className="flex flex-col gap-3">
        {data?.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 h-[4.5rem] bg-white rounded-[1rem] px-5"
          >
            <div className="w-[2.5rem] h-[2.5rem] bg-[#62A1C710] rounded-[0.75rem] flex justify-center items-center">
              <iconify-icon icon="tabler:notes" class="text-blue" />
            </div>
            <div>
              <h3 className="text-[#475569] font-medium">{item.date}</h3>
              <h5 className="text-[0.813rem] text-gray">{item.time}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentConversaton;
