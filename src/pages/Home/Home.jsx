import "./home.scss";
import advert from "../../assets/advert/advert.png";
import profile from "../../assets/icons/adult.png";
import ticket from "../../assets/icons/ticket.png";
import seat from "../../assets/icons/seat.png";
import SplitSave from "../../assets/icons/SplitSave.png";
import personal from "../../assets/icons/personal.png";
import hotel from "../../assets/icons/hotel.png";
import parking from "../../assets/icons/parking.png";

export default function () {
  return (
    <>
      <div className="tickets__advert-container">
        <img className="tickets__advert" src={advert} alt="" />
      </div>
      <section className="tickets">
        <div className="tickets__header">
          <div className="tickets__header-left">
            <div className="tickets__arrow">
              <p>➝</p>
            </div>
            <div className="tickets__location">
              <p className="tickets__text-header">York</p>
              <p className="tickets__text">Fri, 13 Dec</p>
            </div>
          </div>
          <div className="tickets__personal">
            <p className="tickets__personal-text">Personal</p>
          </div>
        </div>
        <div className="tickets__button">
          <p className="tickets__button-text">View tickets</p>
        </div>

        <div className="tickets__info">
          <p className="tickets__info-text tickets__info-text--header">
            How to use your eticket
          </p>
          <p className="tickets__info-text">
            You can also print this ticket or add to Apple Wallet. Only available on
            limited routes and ticket types
          </p>
        </div>
      </section>
      <section className="tickets-cut">
        <div className="ball__container">
          <div className="ball"></div>
          <div className="ball__line"> </div>
          <div className="ball ball--right"></div>
        </div>
        <div className="tickets-cut__manage">
          <p>Fri, 13 Dec</p>
          <div className="timeline">
            <div className="timeline__info">
              <img src={parking} alt="" />
              <p>Add a parking space</p>
            </div>
            <div className="timeline__container">
              <div className="timeline__row">
                <div className="timeline__line">
                  <div className="timeline__circle"></div>
                </div>
                <p className="timeline__text">5:33pm</p>
                <p className="timeline__text">York</p>
              </div>
              <div className="timeline__row">
                <div className="timeline__line">
                  <div className="timeline__circle timeline__circle--highlight"></div>
                </div>
                <p className="timeline__text">8:00pm</p>
                <p className="timeline__text">London St Pancras International</p>
              </div>
              <div className="timeline__row">
                <div className="timeline__line">
                  <div className="timeline__circle"></div>
                </div>
                <p className="timeline__text">9:18pm</p>
                <p className="timeline__text">Brighton</p>
              </div>
            </div>
            <div className="timeline__info">
              <img src={hotel} alt="" />
              <p>Add a place to stay</p>
            </div>
          </div>

          <section className="splitsave">
            <div className="splitsave__logo">
              <img src={SplitSave} alt="" />
            </div>
            <p className="split__text">Show different tickets along your journey</p>
            <div className="splitsave__journey">
              <p className="splitsave__journey-text">View Journey</p>
            </div>
          </section>

          <section className="carriage">
            <div className="carriage__container">
              <img src={seat} alt="" />
              <div className="carriage__seat-text">
                <p className="carriage__text carriage__text--header">
                  Carriage A, seat 06
                </p>
                <p className="carriage__text">Standard class</p>
              </div>
            </div>
            <div className="carriage__container">
              <img src={ticket} alt="" />
              <div className="carriage__seat-text">
                <p className="carriage__text carriage__text--header">Ticket Conditions</p>
                <p className="carriage__text">Specified train(s) only</p>
              </div>
            </div>
          </section>

          <section className="details">
            <div className="details__person">
              <img src={profile} alt="" />
              <p className="details__text">1 Adult</p>
            </div>
            <div className="details__email">
              <img src={personal} alt="" />
              <div className="details__info">
                <p className="details__text--header">Personal booking</p>
                <p className="details__text">timlog@gmail.com</p>
              </div>
            </div>

            <div className="details__share">
              <div className="details__text-share">
                <p className="details__text--header">Share your Journey</p>
                <p className="details__text">
                  Travel together with friends or family effortlessly
                </p>
              </div>
              <div className="details__chevron">
                <p>⟩</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="manage">
        <div className="manage__text-container">
          <p className="manage__header">Manage my booking</p>
          <p className="manage__text">Booking reference: 009018228112</p>
        </div>
      </section>
    </>
  );
}
