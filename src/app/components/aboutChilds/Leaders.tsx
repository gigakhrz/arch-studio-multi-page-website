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
  return <></>;
};

export default Leadrs;
