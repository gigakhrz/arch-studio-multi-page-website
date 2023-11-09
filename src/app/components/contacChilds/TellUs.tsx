const TellUs = (): JSX.Element => {
  return (
    <div className="flex w-[375px] flex-col items-start justify-center gap-[20px] md:w-[573px]	md:relative ">
      <div className="relative w-full h-[240px] bg-contactMob bg-no-repea bg-cover flex items-end justify-start md:w-[573px] md:h-[760px] md:bg-contactTab">
        <div className="bg-white w-[343px] h-[45px] z-10"></div>
        <div className="bg-black absolute w-full h-full left-0 top-0 opacity-50"></div>
      </div>

      <div className="flex flex-col gap-[76px] items-start px-[32px]">
        <div className="flex flex-col gap-[21px] w-full">
          <h1 className="text-[48px] leading-[52px] font-bold tracking=[-1.2px] text-[#1B1D23]">
            Tell us about your project
          </h1>
          <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>

        <hr className="bg-[#C8CCD8] border-none w-[65px] h-[1px] " />
      </div>
    </div>
  );
};

export default TellUs;
