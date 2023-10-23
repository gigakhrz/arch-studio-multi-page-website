"use client";
import logoImg from "../../../../public/assets/logo.svg";
import burgerImg from "../../../../public/assets/icons/icon-hamburger.svg";
import { useRouter } from "next/navigation";
import Burgermenu from "./BurgerMenu";
import { setBurger } from "@/features/burgermenuSlice";
import { useDispatch } from "react-redux";

export default function Header(): JSX.Element {
  const router = useRouter();
  // to go home page when click on logo img
  const handleGoHomePage = (): void => {
    router.push("/destionation/dadksa");
  };
  // to use redux reducer functions
  const dispatch = useDispatch();

  return (
    <div className="flex w-full justify-between p-8 items-center">
      <img
        className="w-[77px] h-[32px] cursor-pointer"
        src={logoImg.src}
        alt="logoImg"
        onClick={handleGoHomePage}
      />
      <img
        onClick={() => dispatch(setBurger())}
        className="w-[24px] h-[17px] cursor-pointer"
        src={burgerImg.src}
        alt="burger menu"
      />
      <input type="dropdown" className="w-[50px] h-[40px]" />
      <Burgermenu />
    </div>
  );
}
