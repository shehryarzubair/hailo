import React, { useState } from "react";
import "iconify-icon";
import { CardWithImage, CustomButton } from "@/components";

const TalkToAI = (props) => {
  const { data } = props;
  const [isMic, setIsMic] = useState(true);

  return (
    <div>
      <button onClick={() => setIsMic(!isMic)}>
        {isMic ? (
          <>
            <img
              src="/images/mic-circle.png"
              alt=""
              className="absolute top-[45%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
            />
            <iconify-icon
              icon={"mingcute:mic-line"}
              class={
                "text-white opacity-75 text-[3.125rem] absolute top-[45%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
              }
            />
          </>
        ) : (
          <div className="absolute top-[45%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[85%]">
            <CardWithImage data={data} type="rating" />
            <div className="flex items-center justify-center gap-4 mt-4">
              <CustomButton
                link={"/booking"}
                customClass="bg-white w-full h-[3.125rem] text-[#1E293B]  border-none"
              >
                Yes
              </CustomButton>
              <CustomButton
                onClick={() => setIsMic(!isMic)}
                customClass="bg-white w-full h-[3.125rem] text-[#1E293B] border-none"
              >
                No
              </CustomButton>
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default TalkToAI;
