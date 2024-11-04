import { CustomButton } from "@/components";
import React from "react";

const ChatNow = (props) => {
  const { data } = props;
  return (
    data && (
      <section className="chatNow">
        <div className="h-[15rem] bg-cover bg-right  bg-no-repeat bg-[url('/images/chat-now-bg.png')] flex items-center rounded-[1.25rem] px-6">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
              <h3 className="text-white">{data?.title}</h3>
              <img src={data?.image} alt="chat-now-icon" />
            </div>
            <CustomButton link={data?.link || "/"}>Chat now</CustomButton>
          </div>
        </div>
      </section>
    )
  );
};

export default ChatNow;
