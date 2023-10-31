import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "parramourMob-img":
          "url('/assets/home/mobile/image-hero-paramour.jpg')",
        "projectMob-img": "url('/assets/portfolio/mobile/image-del-sol.jpg')",
        "towerMob-img": "url('/assets/portfolio/mobile/image-228b.jpg')",
        "protorypeMob-img":
          "url('/assets/portfolio/mobile/image-prototype.jpg')",
        "aboutMob-img": "url('/assets/home/mobile/image-small-team.jpg')",
        aboutMob: "url('/assets/about/mobile/image-hero.jpg')",
        aboutTab: "url('/assets/about/tablet/image-hero.jpg')",
        aboutDes: "url('/assets/about/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
