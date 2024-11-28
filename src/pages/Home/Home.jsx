import "./home.scss";

export default function () {
  return (
    <>
      <section className="tickets">
        <div className="tickets__question">?</div>
        <div className="ticket__container">
          <div className="ticket__person">
            <p>1 Adult</p>
          </div>
          <div className="ticket__account">
            <p>Personal Booking</p>
          </div>
          <div className="ticket__savings">
            <p>You're adding 14kg to your CO2 Savings</p>
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
