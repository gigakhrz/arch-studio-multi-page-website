const Welcome = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-[69px] w-full px-[32px]">
      <hr className="bg-[#C8CCD8] border-none w-[65px] h-[1px] " />
      <div className=" flex flex-col items-center gap-[22px] ">
        <h1 className="text-[48px] leading-[52px] font-bold tracking=[-1.72px] text-[#1B1D23]">
          Welcome to Arch Studio
        </h1>
        <div className="flex flex-col items-center gap-[30px] mb-[40px]">
          <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
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
  );
};

export default Welcome;
