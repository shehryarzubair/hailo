import React from "react";
import "iconify-icon";
import { useRouter } from "next/router";

const BackButton = (props) => {
  const { children, customClass, onClick = () => {}, link } = props;
  const router = useRouter();
  return (
    <button
      type={"button"}
      onClick={() => (link ? router.push(link) : router.back())}
      className={`${
        customClass ? customClass : ""
      } text-[1.25rem] font-medium flex text-white items-center gap-2`}
    >
      <iconify-icon icon="ep:arrow-left-bold" class={`text-[1rem]`} />
      {children}
    </button>
  );
};

export default BackButton;
