import "./send.scss";
import keyboard from "../../assets/images/keyboard.png";
import plus from "../../assets/icons/plus.png";
import send from "../../assets/icons/send.png";
import { Link } from "react-router-dom";

export default function Send() {
  return (
    <>
      <section className="phone">
        <section className="phone__container">
          <div className="phone__header">
            <div className="phone__header-container">
              <p className="phone__header-header">New iMessage</p>
              <Link to="/popup2">
                <p className="phone__header-text bluetext">Cancel</p>
              </Link>
            </div>
          </div>

          <div className="phone__container-contact">
            <p>To: </p>
            <div className="phone__contact">
              <p className="phone__text bluetext">advian</p>
            </div>
          </div>

          <div className="phone__message">
            <div className="phone__content-container">
              <div className="phone__column">
                <img className="phone__plus" src={plus} alt="" />
              </div>
              <div className="phone__message-box">
                <div className="phone__image-container">
                  <img className="phone__image" src={send} alt="" />
                </div>
                <div className="phone__message-card">
                  <div className="phone__text-container">
                    <p className="phone__text">
                      Hi! Tim is travelling from Brighton to York! Join the
                      journey and travel together.
                    </p>
                  </div>
                  <Link to={"/"}>
                    <div className="phone__message-button">
                      <div className="phone__send-button">↑</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="phone__keyboard">
          <img src={keyboard} className="phone__keyboard-image" alt="" />
        </section>
      </section>
    </>
  );
}
