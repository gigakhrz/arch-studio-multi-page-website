const TellUs = (): JSX.Element => {
  return (
    <div className="flex w-[375px] flex-col items-start justify-center gap-[20px] md:w-[573px]	md:relative lg:w-[860px] xl:w-[1110px]">
      <div
        className="relative w-full h-[240px] bg-contactMob bg-no-repea bg-cover flex items-end justify-start md:w-[573px] md:h-[760px] md:bg-contactTab
       lg:w-[635px] lg:bg-contactDes"
      >
        <div className="bg-white w-[343px] h-[45px] z-10 md:hidden"></div>
        <div className="bg-black absolute w-full h-full left-0 top-0 opacity-50"></div>
      </div>

      <div
        className="flex flex-col gap-[76px] items-start px-[32px] md:absolute md:bg-[#FFFFFF] md:w-[515px] md:bottom-[-1px] md:right-[-1px] 
      md:pl-[59px] md:pr-0 md:flex-col-reverse lg:right-[-25px] lg:pt-[160px] xl:right-[100px] xl:pl-[183px]"
      >
        <div className="flex flex-col gap-[21px] w-full xl:w-[445px]">
          <h1
            className="text-[48px] leading-[52px] font-bold tracking=[-1.2px] text-[#1B1D23]  md:text-[72px]  
        md:leading-[64px] md:tracking-[-2px] md:w-[446px] md:mb-[10px]"
          >
            Tell us about your project
          </h1>
          <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>

        <hr className="bg-[#C8CCD8] border-none w-[65px] h-[1px] md:mt-[85px]" />

        <h1
          className="text-[120px] text-[#EEEFF4] leading-[200px] tracking-[-3px] hidden md:block mb-[-50px] md:absolute 
        md:right-[204px] top-[-87px] left-[125px] lg:text-[200px] lg:tracking-[5px] lg:left-[-180px] xl:text-[250px] xl:left-[-200px]"
        >
          Contact
        </h1>
      </div>
    </div>
  );
};

export default TellUs;
