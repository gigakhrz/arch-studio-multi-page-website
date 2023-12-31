import Link from "next/link";
import logoImg from "../../../../public/assets/icons/Logo.svg";
import arrowIcon from "../../../../public/assets/icons/Group 18.svg";
import Image from "next/image";
const Footer = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[32px] bg-[#EEEFF4] md:flex-row md:h-[120px] md:justify-start md:w-[612px] 
    md:gap-[40px] xl:h-[200px] lg:w-[985px] xl:self-center lg:relative xl:w-[984px] xl:mr-[120px] lg:gap[-61px] lg:mb-[10px]"
    >
      <Image
        src={logoImg}
        alt="logo image"
        className="mt-[-60px] md:m-0 lg:w-[200px] h-[200px]"
      />
      <Link
        className="text-[#7D828F] text-[18px] font-bold leading-[25px] md:mr-[21px] lg:ml-[24px]  lg:hover:text-[#1B1D23]"
        href="/portfolio"
      >
        Portfolio
      </Link>

      <Link
        className="text-[#7D828F] text-[18px] font-bold leading-[25px] md:mr-[11px]  lg:hover:text-[#1B1D23]"
        href="/about"
      >
        About us
      </Link>

      <Link
        className="text-[#7D828F] text-[18px] font-bold leading-[25px]  lg:hover:text-[#1B1D23]"
        href="/contact"
      >
        Contact
      </Link>

      <Link
        className="flex items-center justify-center gap-[24px] bg-black z-10 w-[252px] h-[72px] min-w-[252px] md:mr-[-300px] lg:absolute lg:right-[180px]  lg:hover:bg-[#60636D]"
        href="/portfolio"
      >
        <h4 className="text-[18px] leading-[25px] font-bolds text-white ">
          See our portfolio
        </h4>
        <Image src={arrowIcon} alt="arrow img" />
      </Link>
    </div>
  );
};

export default Footer;
