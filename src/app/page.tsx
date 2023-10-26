import About from "./components/homeChilds/About";
import Feature from "./components/homeChilds/Feature";
import Paramour from "./components/homeChilds/Paramour";
import Welcome from "./components/homeChilds/Welocome";

export default function Home() {
  return (
    <div className="flex gap-[72px] items-center flex-col mb-[132px]">
      <Paramour />
      <Welcome />
      <About />
      <Feature />
    </div>
  );
}
