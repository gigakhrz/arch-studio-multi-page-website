import Link from "next/link";
import ParamourImg from "../../../../public/assets/home/mobile/image-hero-paramour.jpg";

const Paramour = (): JSX.Element => {
  // styles taht can't add using tailwind
  const paramourStyle = {
    backgroundImage: `url(${ParamourImg.src})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="w-full flex flex-col py-[113px] px-8 relative gap-[83px]"
      style={paramourStyle}
    >
      <div className=" z-10 flex flex-col items-center w-full justify-center gap-[11px]">
        <h1 className="text-[48px] leading-[48px] tracking-[-1.2px] text-white self-center font-bold">
          Project Paramour
        </h1>
        <p className="text-[18px] leading-[24px] font-medium text-white ">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
      </div>

      <Link href="/portfolio"></Link>

      <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
    </div>
  );
};

export default Paramour;
