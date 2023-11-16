import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <div className="w-full  gap-[61px] items-center hidden md:flex">
      <Link
        href="/portfolio"
        className="text-[#7D828F] text-[18px] leading-[25px] font-bold lg:hover:text-[#1B1D23]"
      >
        Portfolio
      </Link>
      <Link
        href="/about"
        className="text-[#7D828F] text-[18px] leading-[25px] font-bold  lg:hover:text-[#1B1D23]"
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="text-[#7D828F] text-[18px] leading-[25px] font-bold  lg:hover:text-[#1B1D23]"
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
