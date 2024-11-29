import { Link } from "react-router-dom";
import "./footerNav.scss";
import footerimg from "../../assets/icons/footerimg.png";

export default function FooterNav() {
  return (
    <footer className="footer">
      <img className="footer__img" src={footerimg} alt="" />
    </footer>
  );
}
