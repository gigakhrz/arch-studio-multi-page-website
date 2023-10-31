import ContactDetails from "../components/contacChilds/Details";
import TellUs from "../components/contacChilds/TellUs";

export default function Contact(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-center gap-[68px] mb-[171px]">
      <TellUs />;
      <ContactDetails />
    </div>
  );
}
