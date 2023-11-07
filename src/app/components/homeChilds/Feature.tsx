import Link from "next/link";
import FeaturesChilds from "./FeaturesChilds";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";

const Feature = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-[43px] w-[375px] px-[32px] md:w-[573px] md:p-0 md:gap-[86px]">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[48px] leading-[52px] tracking-[-1.7px] text-[#1B1D23] self-start font-bold md:self-center">
          Featured
        </h1>

        <Link
          className="hidden items-center justify-center gap-[24px] bg-black z-10 w-[252px] h-[72px] md:flex"
          href="/portfolio"
        >
          <h4 className="text-[18px] leading-[25px] font-bolds text-white ">
            See all
          </h4>
          <img src={arrowIcon.src} alt="arrow img" />
        </Link>
      </div>
      <FeaturesChilds />
      <Link
        className="flex items-center justify-center gap-[24px] bg-black z-10 w-[252px] h-[72px] md:hidden"
        href="/portfolio"
      >
        <h4 className="text-[18px] leading-[25px] font-bolds text-white ">
          See all
        </h4>
        <img src={arrowIcon.src} alt="arrow img" />
      </Link>
    </div>
  );
};

export default Feature;
