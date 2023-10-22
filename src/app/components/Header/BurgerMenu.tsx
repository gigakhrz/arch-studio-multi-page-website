"use client";

const Burgermenu = (): JSX.Element => {
  return (
    <div className="w-[343px] flex  items-center px-12 py-[39px] absolute bg-[#EEEFF4] top-[96px] right-0">
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
