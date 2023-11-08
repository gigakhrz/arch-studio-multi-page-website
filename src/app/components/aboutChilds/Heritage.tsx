const Heritage = (): JSX.Element => {
  return (
    <div className="flex w-[375px] items-center px-[32px] mb-[43px] md:w-[574px] md:p-0">
      <div className=" flex flex-col items-start gap-[22px] md:gap-[50px]">
        <hr className="hidden bg-[#C8CCD8] border-none w-[65px] h-[1px] md:mt-[85px] md:block" />
        <h1
          className="text-[48px] leading-[52px] font-bold tracking=[-1.72px] text-[#1B1D23]  md:text-[72px]  
        md:leading-[64px] md:tracking-[-2px] md:w-[446px] md:mb-[10px]"
        >
          Our <br /> Heritage
        </h1>
        <div className="flex flex-col items-center gap-[30px] mb-[40px]">
          <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p className="text-[18px] leading-[24px] font-medium  text-[#60636D]">
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
      </div>

      {/* ტაბლეტზე უნდა ჩაისვას იმიჯი ან შეიცვალოს იმიჯი ტეგით */}
      <div></div>
    </div>
  );
};

export default Heritage;
