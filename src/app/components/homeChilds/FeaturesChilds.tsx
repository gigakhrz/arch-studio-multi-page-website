import Link from "next/link";

const FeaturesChilds = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full gap-[24px] lg:flex-row lg:gap-[30px]">
      <div
        className="w-[311px] h-[240px] flex flex-col items-start justify-end px-[24px] py-[23px] relative   bg-projectMob-img bg-no-repeat	bg-cover 
        md:w-full md:pl-[40px] md:pb-[40px] md:bg-projectTab-img lg:h-[560px] lg:bg-projectDes-img
      "
      >
        <h1 className=" z-10 text-[32px] leading-[40px]  text-white self-start font-bold">
          Project Del Sol
        </h1>
        <Link
          href="/portfolio"
          className=" z-10 text-[18px] leading-[24px]  text-white self-start font-medium opacity-75"
        >
          View All Projects
        </Link>

        {/* for overlay */}
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
      </div>

      {/* --------------- */}

      <div
        className="w-[311px] h-[240px] flex flex-col items-start justify-end px-[24px] py-[23px] relative   bg-towerMob-img bg-no-repeat	bg-cover
      md:w-full md:pl-[40px] md:pb-[40px] md:bg-towerTab-img  lg:h-[560px] lg:bg-towerDes-img"
      >
        <h1 className=" z-10 text-[32px] leading-[40px]  text-white self-start font-bold">
          228B Tower
        </h1>
        <Link
          href="/portfolio"
          className=" z-10 text-[18px] leading-[24px]  text-white self-start font-medium opacity-75"
        >
          View All Projects
        </Link>
        {/* for overlay */}
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
      </div>

      {/* --------------- */}

      <div
        className="w-[311px] h-[240px] flex flex-col items-start justify-end px-[24px] py-[23px] relative   bg-protorypeMob-img bg-no-repeat	bg-cover 
      md:w-full md:pl-[40px] md:pb-[40px] md:bg-protorypeTab-img lg:h-[560px] lg:bg-protorypeDes-img"
      >
        <h1 className=" z-10 text-[32px] leading-[40px]  text-white self-start font-bold">
          Le Prototype
        </h1>
        <Link
          href="/portfolio"
          className=" z-10 text-[18px] leading-[24px]  text-white self-start font-medium opacity-75"
        >
          View All Projects
        </Link>

        {/* for overlay */}
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default FeaturesChilds;
