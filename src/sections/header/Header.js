import React from "react";

const Header = () => {
  return (
    <header className="flex items-center gap-3">
      <img src="/images/logo.png" className="h-[3.125rem] w-[3.125rem]" />
      <div>
        <h5>Hi, John</h5>
        <h3 className="text-[1.25rem] font-bold">How are you today?</h3>
      </div>
    </header>
  );
};

export default Header;
