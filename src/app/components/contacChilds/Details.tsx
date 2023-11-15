import Image from "next/image";
import ArrowSvg from "../../../../public/assets/icons/icon-arrow.svg";

export default function ContactDetails() {
  return (
    <div className="w-[375px] px-[32px] flex flex-col gap-[40px] items-start md:w-[574px] md:p-0 md:gap-[42px]  md:mb-[26px]">
      <hr className="hidden bg-[#C8CCD8] border-none w-[65px] h-[1px]  md:block" />
      <h1
        className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[ -1.714px]  md:text-[72px]  
        md:leading-[64px] md:tracking-[-2px] md:w-[446px]"
      >
        Contact Details
      </h1>
      <div className="flex flex-col gap-[43px] md:flex-row md:items-center md:justify-between md:w-full">
        <div className="flex flex-col gap-[14px]">
          <p className="text-[18px] text-[#60636D] fontbold leading-[35px]">
            Main Office
          </p>
          <div className="w-[311px] h-[72px]">
            <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
              Mail : archone@mail.com
            </p>
            <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
              Address : 1892 Chenoweth Drive TN
            </p>
            <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
              Phone : 123-456-3451
            </p>
          </div>
        </div>
        <a
          target="_blank"
          href="https://www.google.com/maps/d/u/0/edit?mid=1WHvigrNtoqLTsDEahSfbd-DWvInBbjE&usp=sharing"
          className="flex flex-row items-center gap-[48px] text-[18px] text-[#1B1D23] font-bold leading-[25px] md:self-end md:mb-[13px]"
        >
          View on Map <Image src={ArrowSvg} alt="arrow svg" />
        </a>
      </div>

      <div className="flex flex-col gap-[43px] md:flex-row md:items-center md:justify-between md:w-full">
        <div className="flex flex-col gap-[14px]">
          <p className="text-[18px] text-[#60636D] fontbold leading-[35px]">
            Office II
          </p>
          <div className="w-[311px] h-[72px]">
            <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
              Mail : archtwo@mail.com
            </p>
            <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
              Address : 3399 Wines Lane TX
            </p>
            <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
              Phone : 832-123-4321
            </p>
          </div>
        </div>
        <a
          target="_blank"
          href="https://www.google.com/maps/d/u/0/edit?mid=1WHvigrNtoqLTsDEahSfbd-DWvInBbjE&usp=sharing"
          className="flex flex-row items-center gap-[48px] text-[18px] text-[#1B1D23] font-bold leading-[25px]  md:self-end md:mb-[13px]"
        >
          View on Map <Image src={ArrowSvg} alt="arrow svg" />
        </a>
      </div>
    </div>
  );
}
