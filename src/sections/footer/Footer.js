import React from "react";
import "iconify-icon";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const data = [
    {
      icon: "/images/home-active-icon.png",
      link: "/",
    },
    {
      icon: "majesticons:chat-2-line",
      link: "/talk-to-ai",
    },
    {
      icon: "uil:calender",
      link: "/appointments",
    },
    {
      icon: "gg:profile",
      link: "/profile",
    },
  ];

  return (
    <footer className="absolute bottom-0 left-0 flex items-center justify-center w-full h-[5.625rem] px-5 bg-white">
      <ul className="flex items-center gap-10">
        {data?.map((item, index) => (
          <li
            key={index}
            className={`w-[3rem] h-[2rem] rounded-full ${
              router?.pathname == item?.link ? "bg-[#62A1C715]" : ""
            }  flex items-center justify-center`}
          >
            <Link href={item?.link || "#"}>
              {item?.link == "/" ? (
                router?.pathname == item?.link ? (
                  <img src={item?.icon} alt="home-icon" />
                ) : (
                  <img src={"/images/home-icon.png"} alt="home-icon" />
                )
              ) : (
                <iconify-icon
                  icon={item.icon}
                  class={` text-[1.5rem] ${
                    router?.pathname == item?.link ? "text-blue" : "text-gray"
                  } `}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
