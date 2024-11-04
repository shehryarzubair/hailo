import { CustomCalender } from "@/components";
import MainLayout from "@/layout/MainLayout";
import { AppointmentListing, Footer } from "@/sections";
import { useState } from "react";

export default function SummaryReportPage() {
  const [dates, setDates] = useState(null);

  const data = [
    {
      image: "/images/doctor.png",
      name: "Dr. John Doe",
      date_time: "Wed, Oct 19 • 5:30 PM",
      speciality: "Christian Counselling",
      location: "ABC church, london, UK",
    },
    {
      image: "/images/gallery1.png",
      name: "Dr. John Doe",
      date_time: "Wed, Oct 19 • 5:30 PM",
      speciality: "Christian Counselling",
      location: "ABC church, london, UK",
    },
  ];

  return (
    <MainLayout customClass={"bg-body pb-[8rem] flex flex-col gap-5 p-6"}>
      <h3 className="text-[1.25rem] font-semibold text-black">Appointments</h3>
      <CustomCalender setDates={setDates} dates={dates} />
      <AppointmentListing data={data} />
      <Footer />
    </MainLayout>
  );
}
