import { Calendar } from "primereact/calendar";
import React, { useState } from "react";

const CustomCalender = (props) => {
  const { dates, setDates = () => {}, label } = props;
  return (
    <div className="customCalender">
      <h3 className="text-[#1E293B] font-semibold my-3">{label}</h3>
      <div className="p-4 bg-white rounded-[0.5rem] flex justify-center">
        <Calendar
          dateFormat="d-mm-yy"
          value={dates}
          onChange={(e) => setDates(e.value)}
          inline
          selectionMode="multiple"
        />
      </div>
    </div>
  );
};

export default CustomCalender;
