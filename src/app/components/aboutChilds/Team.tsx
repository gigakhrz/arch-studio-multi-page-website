import aboutImg from "../../../../public/assets/about/mobile/image-hero.jpg";

const Team = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-[20px]">
      <div className="flex flex-col gap-[76px] items-center">
        <div className="flex flex-col gap-[21px]">
          <h1>Your team of professionals</h1>
          <p>
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
