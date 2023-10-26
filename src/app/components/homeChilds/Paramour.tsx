import Link from "next/link";
import ParamourImg from "../../../../public/assets/home/mobile/image-hero-paramour.jpg";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";

const Paramour = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col py-[113px] px-8 relative gap-[83px] bg-parramour-img bg-no-repeat	bg-cover	">
      <div className=" z-10 flex flex-col items-center w-full justify-center gap-[11px]">
        <h1 className="text-[48px] leading-[48px] tracking-[-1.2px] text-white self-center font-bold">
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
        <img src={arrowIcon.src} alt="arrow img" />
      </Link>

      {/* for overlay */}
      <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
    </div>
  );
};

export default Paramour;
