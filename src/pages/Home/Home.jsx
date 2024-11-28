import "./home.scss";

export default function () {
  return (
    <>
      <section className="tickets">
        <div className="tickets__question">?</div>
        <div className="tickets__container">
          <div className="tickets__person">
            <p className="tickets__text">1 Adult</p>
          </div>
          <div className="tickets__account">
            <p className="tickets__text">Personal Booking</p>
          </div>
          <div className="tickets__savings">
            <p className="tickets__text">You're adding 14kg to your CO2 Savings</p>
          </div>
        </div>
      </section>
      <section className="tickets-cut">
        <div className="ball__container">
          <div className="ball"></div>
          <div className="ball__line"> </div>
          <div className="ball ball--right"></div>
        </div>
        <div className="tickets-cut__manage">
          <p>Manage my Booking</p>
          <p>Booking Reference</p>
        </div>
      </section>
    </>
  );
}
