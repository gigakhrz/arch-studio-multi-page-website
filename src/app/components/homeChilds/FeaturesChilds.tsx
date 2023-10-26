const FeaturesChilds = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full gap-[24px]">
      <div className="w-[311px] h-[240px] flex flex-col items-start justify-end px-[24px] py-[23px] relative   bg-projectMob-img bg-no-repeat	bg-cover">
        <h1 className=" z-10 text-[32px] leading-[40px]  text-white self-start font-bold">
          Project Del Sol
        </h1>
        <h3 className=" z-10 text-[18px] leading-[24px]  text-white self-start font-medium opacity-75">
          View All Projects
        </h3>

        {/* for overlay */}
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
      </div>

      {/* --------------- */}

      <div className="w-[311px] h-[240px] flex flex-col items-start justify-end px-[24px] py-[23px] relative   bg-towerMob-img bg-no-repeat	bg-cover">
        <h1 className=" z-10 text-[32px] leading-[40px]  text-white self-start font-bold">
          228B Tower
        </h1>
        <h3 className=" z-10 text-[18px] leading-[24px]  text-white self-start font-medium opacity-75">
          View All Projects
        </h3>
        {/* for overlay */}
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
      </div>

      {/* --------------- */}

      <div className="w-[311px] h-[240px] flex flex-col items-start justify-end px-[24px] py-[23px] relative   bg-protorypeMob-img bg-no-repeat	bg-cover">
        <h1 className=" z-10 text-[32px] leading-[40px]  text-white self-start font-bold">
          Le Prototype
        </h1>
        <h3 className=" z-10 text-[18px] leading-[24px]  text-white self-start font-medium opacity-75">
          View All Projects
        </h3>

        {/* for overlay */}
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default FeaturesChilds;
