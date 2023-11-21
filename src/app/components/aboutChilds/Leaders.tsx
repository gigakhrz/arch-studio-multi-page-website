import Image from "next/image";
import LinkedinIcon from "../../../../public/assets/icons/icon-linkedin.svg";
import TwiterIcon from "../../../../public/assets/icons/icon-twitter.svg";

const Leadrs = (): JSX.Element => {
  interface Leaders {
    leaders: {
      fullName: string;
      position: string;
      img: string;
    }[];
  }

  const teamLeaders: Leaders = {
    leaders: [
      {
        fullName: "Jake Richards",
        position: "Chief Architect",
        img: "/assets/about/desktop/avatar-jake.jpg",
      },

      {
        fullName: "Thompson Smith",
        position: "Head of Finance",
        img: "/assets/about/desktop/avatar-thompson.jpg",
      },

      {
        fullName: "Jackson Rourke",
        position: "Lead Designer",
        img: "/assets/about/desktop/avatar-jackson.jpg",
      },

      {
        fullName: "Maria Simpson",
        position: "Senior Architect",
        img: "/assets/about/desktop/avatar-maria.jpg",
      },
    ],
  };
  return (
    <div
      className="flex flex-col items-start gap-[55px] w-[375px] px-[32px] md:w-[573px] md:p-0 md:gap-[49px] lg:flex-row lg:w-[860px] xl:w-[1110px] 
    xl:gap-[140px]"
    >
      <h1
        className="text-[48px] leading-[52px] font-bold tracking=[-1.72px] text-[#1B1D23] md:text-[72px]  
        md:leading-[64px] md:tracking-[-2px] "
      >
        The <br /> Leaders
      </h1>

      <div
        className="flex flex-col items-start gap-[79px]  md:flex-row md:flex-wrap md:gap-0 md:gap-x-[11px] md:gap-y-[103px]
       lg:gap-x-[15px] xl:gap-x-[30px] xl:gap-y-[150px]"
      >
        {teamLeaders.leaders.map((leader, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start gap-[15px] md:w-[280px] xl:w-[350px] xl:h-[320px] lg:relative group cursor-pointer"
            >
              {/* for overlay */}
              <div className="hidden  lg:items-center justify-center  w-full h-full bg-black opacity-50 absolute top-0 left-0 lg:group-hover:flex gap-[30px]">
                <Image
                  className="z-30"
                  src={LinkedinIcon}
                  alt="linkedin icon"
                ></Image>
                <Image
                  className="z-30"
                  src={TwiterIcon}
                  alt="twitter icon"
                ></Image>
              </div>
              <img
                src={leader.img}
                alt="leader image"
                className="w-[311px] h-[284px] xl:w-full xl:h-[320px]"
              />
              <div className="flex flex-col items-start">
                <h1 className="text-[32px] leading-[40px] font-bold text-[#1B1D23]">
                  {leader.fullName}
                </h1>
                <h2 className="text-[18px] leading-[24px]  font-medium text-[#1B1D23]">
                  {leader.position}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leadrs;
