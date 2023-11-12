import Link from "next/link";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";
import Image from "next/image";

const DesktopMainProjects = (): JSX.Element => {
  return (
    <div
      className="hidden lg:flex w-full h-[560px] bg-no-repeat bg-cover px-[32px] justify-center items-start flex-col gap-[83px] relative mb-[141px] md:w-[573px] md:h-[720px] md:px-[58px] md:gap-[41px] md:mb-[248px] lg:w-[1110px] lg:px-[190px]"
      style={{ backgroundImage: `url()` }}
    >
      <div className="w-full flex flex-col gap-[11px] items-start md:gap-[10px]">
        <h1 className="text-[48px] text-[#FFF] font-bold leading-[48px] tracking-[-1.2px] z-10 md:text-[96px] md:leading-[80px] lg:w-[544px]"></h1>
        <p className="text-[18px] text-[#FFF] font-medium leading-[24px] z-10 lg:w-[445px]"></p>
      </div>
      <Link
        href="/Portfolio"
        className="w-[252px] cursor-pointer h-[72px] flex justify-center items-center gap-[24px] bg-[#1B1D23] text-[#FFFFFF] text-[18px] font-bold leading-[25px] z-10 hover:bg-[#60636D]"
      >
        See Our Portfolio
        <Image src={arrowIcon} alt="arrow svg" />
      </Link>
      <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>
      <div className="absolute w-[320px] flex flex-row items-center z-20 left-[-80px] bottom-0">
        <button
          className={`flex items-center justify-center  w-[80px] h-[80px] cursor-pointer hover:bg-[#EEEFF4] focus:bg-[#1B1D23] focus:text-[#FFFFFF] `}
          value={"01"}
        >
          01
        </button>
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer hover:bg-[#EEEFF4] focus:bg-[#1B1D23] focus:text-[#FFFFFF]"
          value={"02"}
        >
          02
        </button>
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer hover:bg-[#EEEFF4] focus:bg-[#1B1D23] focus:text-[#FFFFFF]"
          value={"03"}
        >
          03
        </button>
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer hover:bg-[#EEEFF4] focus:bg-[#1B1D23] focus:text-[#FFFFFF]"
          value={"04"}
        >
          04
        </button>
      </div>
    </div>
  );
};

export default DesktopMainProjects;
