export default function Portfolio() {
  const allProject = [
    {
      name: "Seraph Station",
      date: "September 2019",
      image: "/assets/portfolio/mobile/image-eebox.jpg",
    },
    {
      name: "Eebox Building",
      date: "August 2017",
      image: "/assets/portfolio/mobile/image-seraph.jpg",
    },
  ];
  return (
    <div className="mt-[56px] mb-[132px] flex flex-col items-center gap-[24px] w-full ">
      {allProject.map((project, index) => {
        return (
          <div
            key={index}
            className="w-[311px] h-[240px] flex flex-col items-start justify-end px-[24px] py-[23px] relative bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${project.image})` }} // Set background image
          >
            <h1 className="z-10 text-[32px] leading-[40px] text-white self-start font-bold">
              {project.name}
            </h1>
            <p className="z-10 text-[18px] leading-[24px] text-white self-start font-medium opacity-75">
              {project.date}
            </p>

            {/* for overlay */}
            <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
          </div>
        );
      })}
    </div>
  );
}
