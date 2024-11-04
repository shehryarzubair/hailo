import MainLayout from "@/layout/MainLayout";
import Link from "next/link";

export default function DoctorDatailPage() {
  return (
    <MainLayout customClass={"bg-body flex flex-col gap-3 p-5"}>
      <div className="flex flex-col text-[#475569] items-center justify-center h-full gap-3 text-center">
        <img src="/images/pray.png" alt="pray-image" className="w-[8rem]" />
        <h5 className="text-[1.125rem] font-medium">
          Your booking has been confirmed!
        </h5>
        <h1 className="text-[2rem] font-bold">
          Congratulations on <br /> taking the first step!
        </h1>
        <h2 className="text-[1.5rem]">
          Our trusted service partners are dedicated to providing you with a
          personalised service.
        </h2>
        <Link
          href={"/talk-to-ai"}
          className="block mt-6 font-semibold text-blue"
        >
          Back to chat
        </Link>
      </div>
    </MainLayout>
  );
}
