import { BackButton, ChatFooter, CustomButton } from "@/components";
import MainLayout from "@/layout/MainLayout";
import { Chatting } from "@/sections";
import dayjs from "dayjs";

export default function TalkToAIPage() {
  const chatData = [
    {
      name: "Hailo",
      position: "left",
      type: "text",
      text: "I understand. I can recommend some Christian-led service providers, if you’d like? I can also share some biblical scripture related to what you’re currently going through? Would that help?",
      time: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      image: "/images/logo.png",
    },
    {
      name: "user",
      position: "right",
      type: "audio",
      text: "",
      time: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      image: "/images/chat-user.png",
      audio: "/audio/file.mp3",
    },
    {
      name: "Hailo",
      position: "left",
      type: "text",
      text: "Ok. Psalm 55:22 says, “Cast your burden on the Lord, And He shall sustain you; He shall never permit the righteous to be moved.” From what you’ve shared with me, would you like me to put you in touch with a Christian Counsellor, or would you like to speak to someone about your finances first?",
      time: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      image: "/images/logo.png",
    },
    {
      name: "user",
      position: "right",
      type: "text",
      text: "Thank you for sharing that with me. Both are really important, but speaking to someone about my anxiety is a priority.",
      time: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      image: "/images/chat-user.png",
    },
    {
      name: "Hailo",
      position: "left",
      type: "suggestion",
      text: "Ok. Psalm 55:22 says, “Cast your burden on the Lord, And He shall sustain you; He shall never permit the righteous to be moved.” From what you’ve shared with me, would you like me to put you in touch with a Christian Counsellor, or would you like to speak to someone about your finances first?",
      time: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      image: "/images/logo.png",
      suggestion: {
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
      },
    },
  ];

  return (
    <MainLayout customClass={"bg-body flex flex-col gap-5 pt-5 pb-[8rem] px-5"}>
      <div className="flex items-center justify-between">
        <BackButton
          link={"/talk-to-ai"}
          customClass={"!text-black !font-semibold"}
        >
          Back to voice chat
        </BackButton>
        <CustomButton
          link={"/"}
          customClass="h-[3.5rem] w-[3.5rem] flex items-center justify-center rounded-full bg-transparent  border-[#CBD5E1]"
        >
          <iconify-icon
            icon={"mingcute:close-line"}
            class="text-[#475569] text-[1.5rem]"
          />
        </CustomButton>
      </div>
      <Chatting data={chatData} />
      <div className="absolute bottom-0 left-0 w-full p-5 bg-body">
        <ChatFooter />
      </div>
    </MainLayout>
  );
}
