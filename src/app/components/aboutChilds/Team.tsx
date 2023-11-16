const Team = (): JSX.Element => {
  return (
    <div className="flex w-[375px] flex-col items-start justify-center gap-[20px] md:w-[573px]	md:relative lg:w-[860px] xl:w-[1110px]">
      <div
        className="relative w-full h-[240px] bg-aboutMob bg-no-repeat bg-cover flex items-end justify-start md:w-[573px] md:h-[760px] md:bg-aboutTab 
      lg:w-[635px] lg:bg-aboutDes"
      >
        <div className="bg-white w-[343px] h-[45px] z-10 md:hidden"></div>
        <div className="bg-black absolute w-full h-full left-0 top-0 opacity-50"></div>
      </div>

      <div
        className="flex flex-col gap-[76px] items-start px-[32px] md:absolute md:bg-[#FFFFFF] md:w-[515px] md:bottom-[-1px] md:right-[-1px] 
      md:pl-[59px] md:pr-0 md:flex-col-reverse lg:right-[-25px] lg:pt-[160px] xl:right-[100px] xl:pl-[183px] "
      >
        <div className="flex flex-col gap-[21px] w-full xl:w-[445px]">
          <h1
            className="text-[48px] leading-[52px] font-bold tracking=[-1.2px] text-[#1B1D23]  md:text-[72px]  
        md:leading-[64px] md:tracking-[-2px] md:w-[446px] md:mb-[10px]"
          >
            Your team of professionals
          </h1>
          <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>

        <hr className="bg-[#C8CCD8] border-none w-[65px] h-[1px] md:mt-[85px] lg:mt-0" />
        <h1
          className="text-[120px] text-[#EEEFF4] leading-[200px] tracking-[-3px] hidden md:block mb-[-50px] md:absolute 
        md:right-[204px] top-[-87px] left-[125px] lg:text-[250px] lg:tracking-[5px] lg:left-[-150px] xl:left-[-10px]"
        >
          About
        </h1>
      </div>
    </div>
  );
};

export default Team;
