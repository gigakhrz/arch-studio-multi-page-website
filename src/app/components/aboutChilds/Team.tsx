import aboutImg from "../../../../public/assets/about/mobile/image-hero.jpg";

const Team = (): JSX.Element => {
  return (
    <div className="flex w-[375px] flex-col items-start justify-center gap-[20px] ">
      <div className="relative w-full h-[240px] bg-aboutMob bg-no-repea bg-cover flex items-end justify-start ">
        <div className="bg-white w-[343px] h-[45px] z-10"></div>
        <div className="bg-black absolute w-full h-full left-0 top-0 opacity-50"></div>
      </div>

      <div className="flex flex-col gap-[76px] items-start px-[32px]">
        <div className="flex flex-col gap-[21px] w-full">
          <h1 className="text-[48px] leading-[52px] font-bold tracking=[-1.2px] text-[#1B1D23]">
            Your team of professionals
          </h1>
          <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>

        <hr className="bg-[#C8CCD8] border-none w-[65px] h-[1px] " />
      </div>
    </div>
  );
};

export default Team;
