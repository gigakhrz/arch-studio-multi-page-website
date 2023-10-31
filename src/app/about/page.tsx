import Heritage from "../components/aboutChilds/Heritage";
import Leadrs from "../components/aboutChilds/Leaders";
import Team from "../components/aboutChilds/Team";

const About = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col items-center gap-[68px] mb-[171px]">
      <Team />
      <Heritage />
      <Leadrs />
    </div>
  );
};

export default About;
