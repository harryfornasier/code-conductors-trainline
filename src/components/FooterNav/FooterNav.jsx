import { Link } from "react-router-dom";
import "./footerNav.scss";

export default function FooterNav() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item">Favourites</li>
        <li className="footer__item">Search</li>
        <li className="footer__item">
          <Link>My Tickets</Link>
        </li>
        <li className="footer__item">Account</li>
      </ul>
    </footer>
  );
}
