"use client";

import { Rootstate } from "@/features/store";
import { useSelector } from "react-redux";

const Burgermenu = (): JSX.Element => {
  const burgerIsOpen = useSelector((store: Rootstate) => store.burger.open);
  return (
    <div
      className={`w-[343px] flex  items-center px-12 py-[39px]  bg-[#EEEFF4] top-[96px] right-0 ${
        burgerIsOpen ? "absolute right-0" : "fixed right-[-100%]"
      } `}
    >
      <div className="w-full flex flex-col gap-[17px] items-start">
        <p className="text-[#1B1D23] text-[32px] leading-[40px] font-bold">
          Portfolio
        </p>
        <p className="text-[#1B1D23] text-[32px] leading-[40px] font-bold">
          About Us
        </p>
        <p className="text-[#1B1D23] text-[32px] leading-[40px] font-bold">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Burgermenu;
