import "./home.scss";

export default function () {
  return (
    <>
      <section className="tickets">
        <div className="tickets__question">?</div>
        <div className="tickets__container">
          <div className="tickets__person">
            <p className="tickers__text">1 Adult</p>
          </div>
          <div className="tickets__account">
            <p className="tickers__text">Personal Booking</p>
          </div>
          <div className="tickets__savings">
            <p className="tickers__text">You're adding 14kg to your CO2 Savings</p>
          </div>
        </div>
      </section>
      <section className="tickets-cut">
        <div className="tickets-cut__manage">
          <p>Manage my Booking</p>
          <p>Booking Reference</p>
        </div>
      </section>
    </>
  );
}
