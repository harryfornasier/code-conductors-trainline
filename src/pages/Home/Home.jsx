import "./home.scss";
import advert from "../../assets/advert/advert.png";

export default function () {
  return (
    <>
      <div className="tickets__advert-container">
        <img src={advert} alt="" />
      </div>
      <section className="tickets">
        <div className="tickets__header">
          <div className="tickets__header-left">
            <div className="tickets__arrow">
              <p>---</p>
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
              <p>Add a parking space</p>
            </div>
            <div className="timeline__container">
              <div className="timeline__row">
                <div className="timeline__line">
                  <div className="timeline__circle"></div>
                </div>
                <p className="timeline__text">5:33 pm</p>
                <p className="timeline__text">York</p>
              </div>
              <div className="timeline__row">
                <div className="timeline__line">
                  <div className="timeline__circle"></div>
                </div>
                <p className="timeline__text">8:00 pm</p>
                <p className="timeline__text">London St Pancras International</p>
              </div>
              <div className="timeline__row">
                <div className="timeline__line">
                  <div className="timeline__circle"></div>
                </div>
                <p className="timeline__text">9:18 pm</p>
                <p className="timeline__text">Brighton</p>
              </div>
            </div>
            <div className="timeline__info">
              <p>Add a place to stay</p>
            </div>
          </div>

          <section className="splitsave">
            <div className="splitsave__logo">
              <p className="splitsave__text">SplitSave</p>
            </div>
            <p className="split__text">Show different tickets along your journey</p>
            <div className="splitsave__journey">
              <p className="splitsave__journey-text">View Journey</p>
            </div>
          </section>

          <section className="carriage">
            <div className="carriage__container">
              <div className="carriage__seat-text">
                <p className="carriage__text">Carriage A, seat 06</p>
                <p className="carriage__text">Standard class</p>
              </div>
            </div>
            <div className="carriage__container">
              <div className="carriage__seat-text">
                <p className="carriage__text">Ticket Conditions</p>
                <p className="carriage__text">Specified train(s) only</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="booking">
        <div className="booking-text__container">
          <p className="booking__text">All Bookings</p>
          <p className="booking__text">View, refund and expense</p>
        </div>
      </section>
    </>
  );
}
