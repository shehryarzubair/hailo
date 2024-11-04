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
      text: "How was your session with [Provider Name]? Can you provide some feedback?",
      time: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      image: "/images/logo.png",
      feedbacks: [
        "It was very helpful.",
        "It was somewhat helpful.",
        "It was not helpful.",
      ],
    },
    {
      name: "user",
      position: "right",
      type: "text",
      text: "It was very helpful.",
      time: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      image: "/images/chat-user.png",
      audio: "",
    },
    {
      name: "Hailo",
      position: "left",
      type: "text",
      text: "Thank you for your feedback!",
      time: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      image: "/images/logo.png",
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
