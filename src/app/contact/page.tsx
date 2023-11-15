import ConnectWith from "../components/contacChilds/ConectWithUs";
import ContactDetails from "../components/contacChilds/Details";
import TellUs from "../components/contacChilds/TellUs";
import LocationMap from "../components/contacChilds/Location";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

export default function Contact(): JSX.Element {
  const OfficeLocation = dynamic(
    () => import("../components/contacChilds/Location"),
    {
      ssr: false,
    }
  );
  return (
    <div className="w-full flex flex-col items-center gap-[68px] mb-[171px] md:gap-[200px] md:mb-[200px]">
      <TellUs />
      <ContactDetails />
      <OfficeLocation />
      <ConnectWith />
    </div>
  );
}
