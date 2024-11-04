import { BackButton, CardWithImage } from "@/components";
import MainLayout from "@/layout/MainLayout";
import dayjs from "dayjs";
import Link from "next/link";

export default function DoctorDatailPage() {
  const data = {
    image: "/images/doctor.png",
    name: "ACC",
    date: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    speciality: "Christian Counselling",
    location: "ACC church, london, UK",
    appointmentType: "Online",
    online_fee: "£50.00/h",
  };

  return (
    <MainLayout customClass={"bg-body flex flex-col gap-3 p-5"}>
      <BackButton customClass={"!text-black"}>Back</BackButton>
      <div>
        <h2 className={"text-[1.5rem] font-semibold mb-3"}>Confirmation</h2>
        <CardWithImage data={data} type="price" />
      </div>
      <div className="bg-body p-[1rem] rounded-[0.75rem] fixed bottom-0 left-0 right-0 w-full">
        <Link
          href={"/confirmed"}
          className="font-semibold text-white bg-blue p-[1rem] rounded-[0.75rem] w-full text-center block"
        >
          Book now
        </Link>
      </div>
    </MainLayout>
  );
}
