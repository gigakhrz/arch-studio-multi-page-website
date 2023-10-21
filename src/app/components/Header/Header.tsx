import logoImg from "../../../../public/assets/logo.svg";

export default function Header(): JSX.Element {
  return (
    <div className="flex w-full justify-between p-8">
      <img src={logoImg.src} alt="logoImg" />
    </div>
  );
}
