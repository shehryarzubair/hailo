import React, { useEffect, useState } from "react";

const MainLayout = ({ customClass, children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isMobile, "isMobile");

  return (
    <main
      className={` h-screen relative ${
        !isMobile ? "w-[440px] mx-auto" : "w-full "
      }`}
    >
      <div
        className={`${customClass} h-full overflow-x-hidden overflow-y-auto`}
      >
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
