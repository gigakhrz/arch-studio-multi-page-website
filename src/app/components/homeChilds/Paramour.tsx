import ParamourImg from "../../../../public/assets/home/mobile/image-hero-paramour.jpg";

const Paramour = (): JSX.Element => {
  const paramourStyle = {
    backgroundImage: `url(${ParamourImg})`,
    backgroundSize: "cover",
  };

  return <div style={paramourStyle}></div>;
};

export default Paramour;
