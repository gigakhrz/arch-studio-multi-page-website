import Link from "next/link";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";

const About = (): JSX.Element => {
  return (
    <div className="w-[375px] flex flex-col items-start justify-center px-8 relative gap-[23px] h-[560px] bg-aboutMob-img bg-no-repeat	bg-cover">
      <h1 className=" z-10 text-[48px] leading-[48px] tracking-[-1.2px] text-white self-center font-bold">
        Small team, big ideas
      </h1>

      <Link
        className="flex items-center justify-center gap-[24px] bg-black z-10 w-[252px] h-[72px]"
        href="/about"
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

export default About;
