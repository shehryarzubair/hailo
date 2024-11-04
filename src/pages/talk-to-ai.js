import { CustomButton } from "@/components";
import MainLayout from "@/layout/MainLayout";
import { TalkToAI } from "@/sections";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export default function TalkToAIPage() {
  const router = useRouter();

  const data = {
    image: "/images/doctor.png",
    name: "ACC",
    description:
      "We are a Christian professional membership organisation for those involved in counselling and linked professions, i.e. pastoral care, coaching and spiritual direction, in the UK.",
    rating: "5.0",
    date: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    speciality: "Christian Counselling",
    location: "ACC church, london, UK",
    appointmentType: "Online",
    online_fee: "£50.00/h",
  };

  return (
    <MainLayout
      customClass={
        "bg-cover bg-no-repeat bg-center bg-[url('/images/talk-to-ai-bg.png')] bg-blend-multiply"
      }
    >
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[1.25rem] text-white font-bold">Chat with Hailo</h2>
        <CustomButton
          link={"/"}
          customClass="h-[3.5rem] w-[3.5rem] flex items-center justify-center rounded-full bg-[#9dacc5] border-[#acb8ce]"
        >
          <iconify-icon
            icon={"mingcute:close-line"}
            class="text-[#ffffff90] text-[1.5rem]"
          />
        </CustomButton>
      </div>

      <TalkToAI data={data} />

      <div className="fixed left-[50%] translate-x-[-50%] flex items-center justify-center w-full px-5 py-4 bottom-4">
        <CustomButton
          onClick={() => router.push("/chat-ai")}
          customClass="h-[3.5rem] w-[8.938rem] flex items-center justify-center rounded-full bg-[#8C6EA410] border-[#ffffff20]"
        >
          <img
            src="/images/keyboard.png"
            alt=""
            style={{
              filter:
                "brightness(0) saturate(100%) invert(90%) sepia(60%) saturate(428%) hue-rotate(166deg) brightness(96%) contrast(78%)",
            }}
          />
        </CustomButton>
      </div>
    </MainLayout>
  );
}
