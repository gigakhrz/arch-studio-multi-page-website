import Link from "next/link";
import FeaturesChilds from "./FeaturesChilds";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";
import Image from "next/image";

const Feature = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-[43px] w-[375px] px-[32px] md:w-[573px] md:p-0 md:gap-[86px] lg:w-[860px] xl:w-[1110px]">
      <div className="flex items-center justify-between w-full">
        <h1
          className="text-[48px] leading-[52px] tracking-[-1.7px] text-[#1B1D23] self-start font-bold md:self-center  md:text-[72px]  
        md:leading-[64px] md:tracking-[-2px]"
        >
          Featured
        </h1>

        <Link
          className="hidden items-center justify-center gap-[24px] bg-black z-10 w-[252px] h-[72px] md:flex  lg:hover:bg-[#60636D]"
          href="/portfolio"
        >
          <h4 className="text-[18px] leading-[25px] font-bolds text-white ">
            See all
          </h4>
          <Image src={arrowIcon} alt="arrow img" />
        </Link>
      </div>
      <FeaturesChilds />
      <Link
        className="flex items-center justify-center gap-[24px] bg-black z-10 w-[252px] h-[72px] md:hidden "
        href="/portfolio"
      >
        <h4 className="text-[18px] leading-[25px] font-bolds text-white ">
          See all
        </h4>
        <Image src={arrowIcon} alt="arrow img" />
      </Link>
    </div>
  );
};

export default Feature;
