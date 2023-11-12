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
        "parramourTab-img":
          "url('/assets/home/tablet/image-hero-paramour.jpg')",
        "projectMob-img": "url('/assets/portfolio/mobile/image-del-sol.jpg')",
        "projectTab-img": "url('/assets/portfolio/tablet/image-del-sol.jpg')",
        "towerMob-img": "url('/assets/portfolio/mobile/image-228b.jpg')",
        "towerTab-img": "url('/assets/portfolio/tablet/image-228b.jpg')",
        "protorypeMob-img":
          "url('/assets/portfolio/mobile/image-prototype.jpg')",
        "protorypeTab-img":
          "url('/assets/portfolio/tablet/image-prototype.jpg')",
        "aboutMob-img": "url('/assets/home/mobile/image-small-team.jpg')",
        "aboutTab-img": "url('/assets/home/tablet/image-small-team.jpg')",
        "aboutDes-img": "url('/assets/home/desktop/image-small-team.jpg')",
        aboutMob: "url('/assets/about/mobile/image-hero.jpg')",
        aboutTab: "url('/assets/about/tablet/image-hero.jpg')",
        aboutDes: "url('/assets/about/desktop/image-hero.jpg')",
        contactMob: "url('/assets/contact/mobile/image-hero.jpg')",
        contactTab: "url('/assets/contact/tablet/image-hero.jpg')",
        contactDes: "url('/assets/contact/desktop/image-hero.jpg')",
      },
      gradients: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.50) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
