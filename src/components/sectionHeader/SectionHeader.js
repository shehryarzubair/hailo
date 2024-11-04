import Link from "next/link";
import React from "react";

const SectionHeader = (props) => {
  const { text, size = "large", link = "#", linkText, customClass } = props;
  return (
    <div
      className={`sectionHeader flex items-center justify-between ${customClass}`}
    >
      {size == "large" ? (
        <h2 className="text-[1.125rem] font-semibold text-[#1E293B]">{text}</h2>
      ) : (
        <h2 className="text-[1rem] font-semibold text-[#1E293B]">{text}</h2>
      )}
      <Link href={link} className="font-bold text-blue text-[0.875rem]">
        {linkText || "See all"}
      </Link>
    </div>
  );
};

export default SectionHeader;
