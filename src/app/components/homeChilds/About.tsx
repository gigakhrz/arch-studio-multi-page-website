import Link from "next/link";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";
import Image from "next/image";

const About = (): JSX.Element => {
  return (
    <div
      className="w-[375px] flex flex-col items-start justify-center px-8 relative gap-[23px] h-[560px] bg-aboutMob-img bg-no-repeat	bg-cover 
    md:w-[573px] md:h-[560px] md:bg-aboutTab-img md:pl-[57px] md:mb-[100px] lg:w-[860px] lg:bg-aboutDes-img lg:px-[190px] xl:w-[1110px]"
    >
      <h1
        className=" z-10 text-[48px] leading-[48px] tracking-[-1.2px] text-white self-start font-bold md:text-[72px]  
        md:leading-[64px] md:tracking-[-2px] "
      >
        Small team,
        <br /> big ideas
      </h1>

      <Link
        className="flex items-center justify-center gap-[24px] bg-black z-10 w-[252px] h-[72px] md:w-[187px]  lg:hover:bg-[#60636D]"
        href="/about"
      >
        <h4 className="text-[18px] leading-[25px] font-bolds text-white ">
          About Us
        </h4>
        <Image src={arrowIcon} alt="arrow img" />
      </Link>

      {/* for overlay */}
      <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
    </div>
  );
};

export default About;
