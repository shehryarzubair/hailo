import { InputText } from "primereact/inputtext";
import React from "react";

const ChatFooter = () => {
  return (
    <section className="chatFooter">
      <div className="flex items-center gap-3">
        <InputText
          placeholder="type a message..."
          className="h-[3.5rem] w-full bg-body border-[1px] border-solid border-[#CBD5E1] rounded-full px-[1.5rem] focus:shadow-none text-[#475569] placeholder:text-[#475569]"
        />
        <button className="h-[3.5rem] w-[3.5rem] min-w-[3.5rem] border-[1px] border-solid border-[#CBD5E1] rounded-full flex items-center justify-center">
          <iconify-icon
            icon={"mingcute:mic-line"}
            class={"text-[#475569] text-[1.438rem]"}
          />
        </button>
        <button className="h-[3.5rem] gradient w-[3.5rem] min-w-[3.5rem] rounded-full flex items-center justify-center">
          <img src="/images/send.png" alt="send-icon" />
        </button>
      </div>
    </section>
  );
};

export default ChatFooter;
