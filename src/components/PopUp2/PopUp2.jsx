import "./PopUp2.scss";
import trainLineLogo from "../../assets/images/popUp2/trainlineLogo.png";
import closeButton from "../../assets/images/popUp2/closeButton.png";
import Sandy from "../../assets/images/popUp2/Sandy.png";
import Kevin from "../../assets/images/popUp2/Kevin.png";
import SandyAndKevin from "../../assets/images/popUp2/SandyAndKevin.png";
import Juliana from "../../assets/images/popUp2/Juliana.png";
import Greg from "../../assets/images/popUp2/Gred.png";
import AirDrop from "../../assets/images/popUp2/Airdrop.png";
import Messages from "../../assets/images/popUp2/icon.png";
import Mail from "../../assets/images/popUp2/Icon-1.png";
import Notes from "../../assets/images/popUp2/Icon-2.png";
import Reminders from "../../assets/images/popUp2/Icon-3.png";
import Documents from "../../assets/images/popUp2/Document.png";
import Glasses from "../../assets/images/popUp2/Glasses.png";
import Book from "../../assets/images/popUp2/Symbol.png";
import Star from "../../assets/images/popUp2/Symbol-1.png";
import Magnifier from "../../assets/images/popUp2/Symbol-3.png";
import PlusSQuare from "../../assets/images/popUp2/Symbol-2.png";

export default function PopUp2() {
  return (
    <>
      <section className="popup2-box">
        <div className="popup2__firt-part">
          <div className="popup2__firt-part-left">
            <img src={trainLineLogo} alt="trainline Logo" />
            <p>Trainline: Share My Journey</p>
          </div>
          <img
            className="popup2__close-button"
            src={closeButton}
            alt="close button"
          />
        </div>
        <div className="popup2__second-part">
          <div className="popup2__second-part__icon-box">
            <img src={Sandy} alt="Sandy's image" />
            <p className="small-text">
              Sandy Wilder <br /> Cheng
            </p>
          </div>
          <div className="popup2__second-part__icon-box">
            <img src={Kevin} alt="" />
            <p className="small-text">Kevin Leong</p>
          </div>
          <div className="popup2__second-part__icon-box">
            <img src={SandyAndKevin} alt="" />
            <p className="small-text">
              Sandy and <br /> Kevin
            </p>
          </div>
          <div className="popup2__second-part__icon-box">
            <img src={Juliana} alt="" />
            <p className="small-text">Juliana Mejia</p>
          </div>
          <div className="popup2__second-part__icon-box">
            <img src={Greg} alt="" />
            <p className="small-text">Greg Apodaca</p>
          </div>
        </div>
        <div className="popup2__third-part">
          <div className="popup2__third-part-top">
            <div className="popup2__second-part__icon-box">
              <img className="airdrop-icon" src={AirDrop} alt="" />
              <p className="small-text">AirDrop</p>
            </div>
            <div className="popup2__second-part__icon-box">
              <img src={Messages} alt="" />
              <p className="small-text">Messages</p>
            </div>
            <div className="popup2__second-part__icon-box">
              <img src={Mail} alt="" />
              <p className="small-text">Mail</p>
            </div>
            <div className="popup2__second-part__icon-box">
              <img src={Notes} alt="" />
              <p className="small-text">Notes</p>
            </div>
            <div className="popup2__second-part__icon-box">
              <img src={Reminders} alt="" />
              <p className="small-text">Reminders</p>
            </div>
          </div>
          <div className="popup2__third-part-middle">
            <p>Copy</p>
            <img src={Documents} alt="" />
          </div>
          <div className="popup2__third-part-buttom">
            <div className="popup2__third-part-buttom-box">
              <p>Add to Reading List</p>
              <img src={Glasses} alt="" />
            </div>
            <div className="popup2__third-part-buttom-box">
              <p>Add Bookmark</p>
              <img src={Book} alt="" />
            </div>
            <div className="popup2__third-part-buttom-box">
              <p>Add to Favorites</p>
              <img src={Star} alt="" />
            </div>
            <div className="popup2__third-part-buttom-box">
              <p>Find on Page</p>
              <img src={Magnifier} alt="" />
            </div>
            <div className="popup2__third-part-buttom-box">
              <p>Add to Home Screen</p>
              <img src={PlusSQuare} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
