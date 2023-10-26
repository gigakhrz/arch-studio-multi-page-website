import ParamourImg from "../../../../public/assets/home/mobile/image-hero-paramour.jpg";

const Paramour = (): JSX.Element => {
  // styles taht can't add using tailwind
  const paramourStyle = {
    backgroundImage: `url(${ParamourImg.src})`,
    backgroundSize: "cover",
  };

  return (
    <div className="w-full flex flex-col py-[113px] px-8" style={paramourStyle}>
      <div className="flex flex-col items-center w-full justify-center">
        <h1 className="text-5xl leading-12 text-white self-center">
          Project Paramour
        </h1>
      </div>
    </div>
  );
};

export default Paramour;
