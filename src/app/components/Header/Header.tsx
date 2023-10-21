"use client";
import logoImg from "../../../../public/assets/logo.svg";
import burgerImg from "../../../../public/assets/icons/icon-hamburger.svg";
import { useRouter } from "next/navigation";

export default function Header(): JSX.Element {
  const router = useRouter();
  // to go home page when click on logo img
  const handleGoHomePage = (): void => {
    router.push("/");
  };

  return (
    <div className="flex w-full justify-between p-8 items-center">
      <img
        className="w-[77px] h-[32px]"
        src={logoImg.src}
        alt="logoImg"
        onClick={handleGoHomePage}
      />
      <img
        className="w-[24px] h-[17px]"
        src={burgerImg.src}
        alt="burger menu"
      />
    </div>
  );
}
