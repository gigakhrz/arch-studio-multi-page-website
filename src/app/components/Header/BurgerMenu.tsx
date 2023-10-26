import { Rootstate } from "@/features/store";
import Link from "next/link";
import { useSelector } from "react-redux";

const Burgermenu = (): JSX.Element => {
  const burgerIsOpen = useSelector((store: Rootstate) => store.burger.open);

  return (
    <div
      className={` z-20 w-[343px] transition-all duration-1000 flex  items-center px-12 py-[39px]  bg-[#EEEFF4] top-[96px] right-0 ${
        burgerIsOpen ? "absolute right-0" : "fixed right-[-100%]"
      } `}
    >
      <div className="w-full flex flex-col gap-[17px] items-start">
        <Link
          href="/portfolio"
          className="text-[#1B1D23] text-[32px] leading-[40px] font-bold"
        >
          Portfolio
        </Link>
        <Link
          href="/about"
          className="text-[#1B1D23] text-[32px] leading-[40px] font-bold"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="text-[#1B1D23] text-[32px] leading-[40px] font-bold"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Burgermenu;
