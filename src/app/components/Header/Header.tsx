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
  const pathname = usePathname();
  // to go home page when click on logo img
  const handleGoHomePage = (): void => {
    router.push("/");
  };

  console.log(pathname);
  // to use redux reducer functions
  const dispatch = useDispatch();

  return (
    <div className="flex w-full justify-between p-8 items-center md:justify-center md:gap-[80px] md:px-[97px]">
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
    </div>
  );
}
