"use client";
import Link from "next/link";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";
import Image from "next/image";
import { MainProjItem } from "./MainPrjectData";
import { useEffect, useState } from "react";
const DesktopMainProjects = () => {
  interface ItemProps {
    name: string;
    description: string;
    image: string;
    id: string;
  }

  const firstItem = MainProjItem.PortfolioArray.filter(
    (item) => item.id === "01"
  );

  const [itemNum, setItemNum] = useState<string>("01");
  const [project, setProject] = useState<ItemProps[]>(firstItem);

  useEffect(() => {
    const filterProj = () => {
      return MainProjItem.PortfolioArray.filter((item) => item.id === itemNum);
    };
    setProject(filterProj());
  }, [itemNum]);
  return (
    <div
      className="hidden lg:flex w-full bg-no-repeat bg-cover  justify-center items-start flex-col relative md:h-[720px] md:gap-[41px]  lg:w-[860px] lg:px-[190px] xl:w-[1110px]"
      style={{ backgroundImage: `url(${project[0].image})` }}
    >
      <div className="w-full flex flex-col  items-start md:gap-[10px]">
        <h1 className=" text-[#FFF] font-bold  z-10 md:text-[96px] md:leading-[80px] lg:w-[544px]">
          {project[0].name}
        </h1>
        <p className="text-[18px] text-[#FFF] font-medium leading-[24px] z-10 lg:w-[445px]">
          {project[0].description}
        </p>
      </div>
      <Link
        href="/portfolio"
        className="w-[252px] cursor-pointer h-[72px] flex justify-center items-center gap-[24px] bg-[#1B1D23] text-[#FFFFFF] text-[18px] font-bold leading-[25px] z-10 hover:bg-[#60636D]"
      >
        See Our Portfolio
        <Image src={arrowIcon} alt="arrow svg" />
      </Link>
      <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>
      <div className="absolute w-[320px] flex flex-row items-center z-20 left-[-80px] bottom-0">
        <button
          className={`flex items-center justify-center  w-[80px] h-[80px] cursor-pointer hover:bg-[#EEEFF4] focus:bg-[#1B1D23] focus:text-[#FFFFFF] ${
            itemNum === "01"
              ? "bg-[#1B1D23] text-[#FFFFFF]"
              : "bg-[#FFFFFF] text-[#7D828F]"
          }`}
          value={"01"}
          onClick={() => {
            setItemNum("01");
          }}
        >
          01
        </button>
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer hover:bg-[#EEEFF4] focus:bg-[#1B1D23] focus:text-[#FFFFFF]"
          value={"02"}
          onClick={() => {
            setItemNum("02");
          }}
        >
          02
        </button>
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer hover:bg-[#EEEFF4] focus:bg-[#1B1D23] focus:text-[#FFFFFF]"
          value={"03"}
          onClick={() => {
            setItemNum("03");
          }}
        >
          03
        </button>
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer hover:bg-[#EEEFF4] focus:bg-[#1B1D23] focus:text-[#FFFFFF]"
          value={"04"}
          onClick={() => {
            setItemNum("04");
          }}
        >
          04
        </button>
      </div>
    </div>
  );
};

export default DesktopMainProjects;
