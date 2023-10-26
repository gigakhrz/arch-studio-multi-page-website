import projectImg from "./../../../../public/assets/portfolio/mobile/image-del-sol.jpg";
import towerImg from "../../../../public/assets/portfolio/mobile/image-228b.jpg";
import prototypeImg from "../../../../public/assets/portfolio/mobile/image-prototype.jpg";

const FeaturesChilds = (): JSX.Element => {
  //features thats will map in jsx
  const features = [
    {
      title: "Project Del Sol",
      img: "",
    },
    {
      title: "228B Tower",
      img: "",
    },
    {
      title: "Le Prototype",
      img: "",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-[24px]">
      {features.map((feature) => {
        return <div></div>;
      })}
    </div>
  );
};

export default FeaturesChilds;
