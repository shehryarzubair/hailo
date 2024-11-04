import React from "react";

const SummaryReport = () => {
  return (
    <section>
      <div className="flex flex-col w-full gap-3 px-2">
        <div className="bg-white rounded-[0.75rem] p-[1.25rem]">
          <h6 className="text-[0.875rem] text-blue">Wed, Oct 19 • 5:30 PM</h6>
          <h3 className="text-[1.25rem] font-medium text-[#1E293B] my-1">
            Chat Summary
          </h3>
          <h6 className="text-[0.875rem] text-gray">Duration: 04:03</h6>
        </div>
        <div className="bg-white rounded-[0.75rem] p-[1.25rem]">
          <h5 className="font-medium text-[#1E293B] mb-1">Overview</h5>
          <p className="text-[#475569]">
            Currently experiencing financial difficulty, which is having an
            impact on your well-being and home life.
          </p>
        </div>
        <div className="bg-white rounded-[0.75rem] p-[1.25rem]">
          <h5 className="font-medium text-[#1E293B] mb-1">Next steps</h5>
          <ul className="ml-5 list-disc indent-[-0.3rem]">
            <li className="text-[#475569]">
              Meeting booked with ACC for (time and date)
            </li>
            <li className="text-[#475569]">
              Biblical scripture to read - Psalm 55:22
            </li>
            <li className="text-[#475569]">
              Consider booking a meeting with a financial adviser who can
              support with your finances
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SummaryReport;
