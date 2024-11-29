import iosBattery from "../../assets/icons/Frame1.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__time">
        <p className="header__text">16:00</p>
      </div>
      <div className="header__bat-container">
        <img src={iosBattery} alt="" />
      </div>
    </header>
  );
}
