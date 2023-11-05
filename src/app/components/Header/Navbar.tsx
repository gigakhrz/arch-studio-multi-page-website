import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <div className="w-full flex gap-[61px] items-start">
      <Link
        href="/portfolio"
        className="text-[#7D828F] text-[32px] leading-[40px] font-bold"
      >
        Portfolio
      </Link>
      <Link
        href="/about"
        className="text-[#7D828F] text-[32px] leading-[40px] font-bold"
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="text-[#7D828F] text-[32px] leading-[40px] font-bold"
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
