import About from "./components/homeChilds/About";
import Paramour from "./components/homeChilds/Paramour";
import Welcome from "./components/homeChilds/Welocome";

export default function Home() {
  return (
    <div className="flex gap-[72px] items-center flex-col">
      <Paramour />
      <Welcome />
      <About />
    </div>
  );
}
