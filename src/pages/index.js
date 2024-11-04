import MainLayout from "@/layout/MainLayout";
import {
  CardSlider,
  ChatNow,
  Footer,
  Header,
  RecentConversaton,
} from "@/sections";
import dayjs from "dayjs";

export default function Home() {
  const upcommigAppointments = [
    {
      image: "/images/doctor.png",
      name: "ACC",
      date: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      speciality: "Christian Counselling",
      location: "ACC church, london, UK",
    },
    {
      image: "/images/gallery1.png",
      name: "ABC",
      date: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      speciality: "Christian Counselling",
      location: "ACC church, london, UK",
    },
    {
      image: "/images/doctor.png",
      name: "ACC",
      date: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      speciality: "Christian Counselling",
      location: "ACC church, london, UK",
    },
  ];

  const chatNowData = {
    title: "Chat with Hailo",
    image: "/images/logo-white.png",
    link: "/chat-ai",
  };

  return (
    <MainLayout customClass={"bg-body pt-5 pb-[8rem] pl-5 flex flex-col gap-6"}>
      <div className="flex flex-col gap-5 pr-5">
        <Header />
        <ChatNow data={chatNowData} />
      </div>
      <div className="flex flex-col gap-6">
        <CardSlider
          title={"Your upcoming appointments"}
          link={"/appointments"}
          data={upcommigAppointments}
        />
        <div className="pr-5">
          <RecentConversaton />
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
}
