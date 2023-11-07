"use client";
import logoImg from "../../../../public/assets/logo.svg";
import burgerImg from "../../../../public/assets/icons/icon-hamburger.svg";
import { useRouter } from "next/navigation";
import Burgermenu from "./BurgerMenu";
import { setBurger } from "@/features/burgermenuSlice";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function Header(): JSX.Element {
  const router = useRouter();
  // to go home page when click on logo img
  const handleGoHomePage = (): void => {
    router.push("/");
  };

  // to use redux reducer functions
  const dispatch = useDispatch();

  // A page pointer, it changes as the page changes.
  const pathName = usePathname();

  const createPageName = (): string => {
    let page;
    if (pathName === "/") {
      page = "HOME";
    } else if (pathName === "/about") {
      page = "ABOUT US";
    } else {
      let name = pathName.split("");
      name.shift();
      page = name.join("").toUpperCase();
    }
    return page;
  };

  let pageName = createPageName();

  return (
    <div className="flex w-full justify-between p-8 items-center md:justify-center md:gap-[80px] md:px-[97px] ">
      <img
        className="w-[77px] h-[32px] cursor-pointer"
        src={logoImg.src}
        alt="logoImg"
        onClick={handleGoHomePage}
      />
      <img
        onClick={() => dispatch(setBurger())}
        className="w-[24px] h-[17px] cursor-pointer md:hidden"
        src={burgerImg.src}
        alt="burger menu"
      />
      <Burgermenu />
      <Navbar />

      {/* The name of the page that appears from the tablet */}
      <div className="hidden flex-col gap-[48px] items-center md:flex md:fixed top-0 left-[38px]">
        <hr className="bg-[#C8CCD8] border-none w-[1px] h-[104px] " />
        <h3
          style={{ writingMode: "vertical-lr" }}
          className="text-[18px] float-right text-[#C8CCD8] leading-[24px] tracking-[18px]"
        >
          {pageName}
        </h3>
      </div>
    </div>
  );
}
