import { BackButton, CustomCalender } from "@/components";
import MainLayout from "@/layout/MainLayout";
import { ButtonList } from "@/sections";
import Link from "next/link";
import { Calendar } from "primereact/calendar";
import { useState } from "react";

export default function DoctorDatailPage() {
  const [dates, setDates] = useState([]);
  const [duration, setDuration] = useState("30 mins");
  const [time, setTime] = useState("10:00 AM");

  const durationData = [
    {
      label: "30 mins",
      value: "30 mins",
    },
    {
      label: "60 mins",
      value: "60 mins",
    },
  ];

  const timeData = [
    {
      label: "10:00 AM",
      value: "10:00 AM",
    },
    {
      label: "11:00 AM",
      value: "11:00 AM",
    },
    {
      label: "12:00 PM",
      value: "12:00 PM",
    },
    {
      label: "1:00 PM",
      value: "1:00 PM",
    },
    {
      label: "2:00 PM",
      value: "2:00 PM",
    },
    {
      label: "3:00 PM",
      value: "3:00 PM",
    },
    {
      label: "4:00 PM",
      value: "4:00 PM",
    },
    {
      label: "5:00 PM",
      value: "5:00 PM",
    },
    {
      label: "6:00 PM",
      value: "6:00 PM",
    },
  ];

  return (
    <MainLayout customClass={"bg-body pb-[8rem] flex flex-col gap-3 p-5"}>
      <BackButton customClass={"!text-black"}>Back</BackButton>
      <div>
        <h2 className={"text-[1.5rem] font-semibold text-black mb-2"}>
          Booking Appointment
        </h2>

        <div className="flex items-center justify-between gap-2 bg-white py-[1.25rem] px-[1.188rem] rounded-[1rem]">
          <h2 className="text-[1.125rem] font-normal text-[#1E293B]">
            Online Virtual Meeting
          </h2>
          <div className="flex items-center gap-1 bg-[#f7f7fe] rounded-[0.5rem] px-[0.75rem] py-[0.375rem]">
            <h2 className="text-[1.25rem] font-bold text-blue">£50.00/h</h2>
          </div>
        </div>
      </div>
      <CustomCalender label={"Select Date"} dates={dates} setDates={setDates} />
      <ButtonList
        data={durationData}
        label={"Select Duration"}
        name={"duration"}
        value={duration}
        setValue={setDuration}
      />
      <ButtonList
        data={timeData}
        label={"Select time"}
        name={"time"}
        value={time}
        setValue={setTime}
      />

      <div className="bg-body p-[1rem] rounded-[0.75rem] fixed bottom-0 left-0 right-0 w-full">
        <Link
          href={"/confirmation"}
          className="font-semibold text-white bg-blue p-[1rem] rounded-[0.75rem] w-full text-center block"
        >
          Book now
        </Link>
      </div>
    </MainLayout>
  );
}
