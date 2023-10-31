import ConnectWith from "../components/contacChilds/ConectWithUs";
import ContactDetails from "../components/contacChilds/Details";
import TellUs from "../components/contacChilds/TellUs";
import LocationMap from "../components/contacChilds/Location";

export default function Contact(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-center gap-[68px] mb-[171px]">
      <TellUs />
      <ContactDetails />
      <LocationMap />
      <ConnectWith />
    </div>
  );
}
