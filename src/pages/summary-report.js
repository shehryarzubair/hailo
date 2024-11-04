import { CustomButton } from "@/components";
import MainLayout from "@/layout/MainLayout";
import { SummaryReport, TalkToAI } from "@/sections";

export default function SummaryReportPage() {
  return (
    <MainLayout
      customClass={
        "px-5 py-4 flex flex-col gap-5 bg-cover bg-no-repeat bg-center bg-[url('/images/talk-to-ai-bg.png')] bg-blend-multiply"
      }
    >
      <div className="flex items-center justify-between">
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
      <SummaryReport />
    </MainLayout>
  );
}
