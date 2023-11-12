import Image from "next/image";
import welcomeImg from "../../../../public/assets/home/desktop/image-welcome.jpg";

const Welcome = (): JSX.Element => {
  return (
    <div className="flex w-full items-center justify-center lg:w-[860px] xl:w-[1110px] xl:justify-end">
      <div className="flex flex-col gap-[69px] w-[375px] px-[32px] md:w-[572px] md:gap-0 md:mb-[130px] md:p-0 lg:mb-0 lg:self-end lg:relative">
        <hr className="bg-[#C8CCD8] border-none w-[65px] h-[1px] md:hidden" />
        <h1
          className="text-[120px] text-[#EEEFF4] leading-[200px] tracking-[-3px] hidden md:block mb-[-50px] lg:absolute lg:text-[250px] 
        lg:leading-[200px] lg:tracking-[-5px] lg:right-[-275px] lg:top-[-162px] xl:right-[-150px]"
        >
          Welcome
        </h1>
        <div className=" flex flex-col items-center gap-[22px] md:items-start md:ga[43px] lg:gap-[43px] lg:w-[445px]">
          <h1
            className="text-[48px] leading-[52px] font-bold tracking=[-1.72px] text-[#1B1D23] md:text-[72px]  
        md:leading-[64px] md:tracking-[-2px] md:w-[446px]"
          >
            Welcome to Arch Studio
          </h1>
          <div className="flex flex-col items-center gap-[30px] mb-[40px] lg:mb-0">
            <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
      </div>
      <Image src={welcomeImg} alt="" className=" self-end " />
    </div>
  );
};

export default Welcome;
