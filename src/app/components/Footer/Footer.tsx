import Link from "next/link";
import logoImg from "../../../../public/assets/logo.svg";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";
const Footer = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-[32px]">
      <img src={logoImg.src} alt="logo image" />
      <Link
        className="text-[#7D828F] text-[18px] font-bold leading-[25px] "
        href="/portfolio"
      >
        Portfolio
      </Link>

      <Link
        className="text-[#7D828F] text-[18px] font-bold leading-[25px] "
        href="/portfolio"
      >
        About us
      </Link>

      <Link
        className="text-[#7D828F] text-[18px] font-bold leading-[25px] "
        href="/portfolio"
      >
        Contact
      </Link>

      <Link
        className="flex items-center justify-center gap-[24px] bg-black z-10 w-[252px] h-[72px]"
        href="/portfolio"
      >
        <h4 className="text-[18px] leading-[25px] font-bolds text-white ">
          See all
        </h4>
        <img src={arrowIcon.src} alt="arrow img" />
      </Link>
    </div>
  );
};

export default Footer;
