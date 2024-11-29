import './JourneyDetails.scss';

const JourneyDetails = () => {
  return (
    <>
      <div className="JourneyDetails__title-wrapper">
        <p className="JourneyDetails__cancel-link">Cancel</p>

        <h2 className="JourneyDetails__title">Journey Details</h2>
      </div>
      {/* blue arrow */}

      <button>xxxx</button>

      <div className="JourneyDetails__main">
        <div className="JourneyDetails__advance-wrapper">
          <h3 className="JourneyDetails__advance">Advance Single</h3>
          {/* icon */}
        </div>

        <p className="JourneyDetails__para-text">
          Specified train only. No refunds. Outbound: Only valid on booked
          London North Eastern Railway s...
        </p>

        <p className="JourneyDetails__main-more"> More</p>

        <p>First class & more tickets from £57.80</p>

        <p className="JourneyDetails__main-more">View more tickets</p>

        {/* blue arrow */}

        <p>Fri, 13 Dec</p>

        <div className="JourneyDetails__timings-wrapper">
          <div className="JourneyDetails__departure-info">
            <p>5.33pm</p>
            <p>York</p>
          </div>
          <div className="JourneyDetails__arrival-info">
            <p>9:18pm</p>
            <p>Brighton</p>
          </div>
        </div>
        <p className="JourneyDetails__time-changes">3h 45m, 2 changes</p>
      </div>

      <div className="JourneyDetails__seat-wrapper">
        {/* seat */}

        <p className="JourneyDetails__seat">Tim's seat</p>
        <p>
          Standard class, <span>Carriage A, seat 06</span>
        </p>
      </div>

      <div className="JourneyDetails__button-wrapper">
        <button className="JourneyDetails__button">Share Journey</button>
      </div>
    </>
  );
};

export default JourneyDetails;
