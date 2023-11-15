import Link from "next/link";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";
import Image from "next/image";

const Paramour = (): JSX.Element => {
  return (
    <div
      className="w-[375px] flex flex-col py-[113px] px-8 relative gap-[83px] bg-parramourMob-img bg-no-repeat	bg-cover	md:w-[573px] md:h-[720px]
     md:bg-parramourTab-img md:px-[58px]  md:justify-center md:gap-[41px] lg:hidden"
    >
      <div className=" z-10 flex flex-col items-center w-full justify-center gap-[11px]">
        <h1 className="text-[48px] leading-[48px] tracking-[-1.2px] text-white self-center font-bold md:text-[96px] md:leading-[80px] md:tracking-[-2px] ">
          Project Paramour
        </h1>
        <p className="text-[18px] leading-[24px] font-medium text-white ">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
      </div>

      <Link
        className="flex items-center justify-center gap-[24px] bg-black z-10 w-[252px] h-[72px]"
        href="/portfolio"
      >
        <h4 className="text-[18px] leading-[25px] font-bolds text-white ">
          See Our Portfolio
        </h4>
        <Image src={arrowIcon} alt="arrow img" />
      </Link>

      {/* for overlay */}
      <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
    </div>
  );
};

export default Paramour;
