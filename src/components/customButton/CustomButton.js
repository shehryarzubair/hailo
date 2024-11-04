import Link from "next/link";
import React from "react";

const CustomButton = (props) => {
  const { children, type, customClass, onClick = () => {}, link } = props;
  return link ? (
    <Link
      href={link || "#"}
      type={type || "button"}
      onClick={onClick}
      className={`${
        customClass
          ? customClass
          : "h-[2.5rem] w-fit px-[1.5rem] bg-[#8C6EA410] border-[#ffffff12] text-white"
      }   border-[1px]  rounded-full  flex items-center justify-center`}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${
        customClass
          ? customClass
          : "h-[2.5rem] w-fit px-[1.5rem] text-white bg-[#8C6EA410] border-[#ffffff12]"
      }   border-[1px]  rounded-full   `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
