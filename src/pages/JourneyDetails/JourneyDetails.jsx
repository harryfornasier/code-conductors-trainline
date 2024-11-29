import "./JourneyDetails.scss";
import arrow from "../../assets/icons/errow.svg";
import infoIcon from "../../assets/icons/information.svg";
import seatIcon from "../../assets/icons/seat.svg";
import arrow2 from "../../assets/icons/errow2.svg";
import rightArrow from "../../assets/icons/vector.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopUp2 from "../../components/PopUp2/PopUp2.jsx";

const JourneyDetails = () => {
  const [isvisible, setIsVisible] = useState(false);

  const toggleSlideUp = (event) => {
    setIsVisible(!isvisible);
  };

  return (
    <>
      <Link to="/popup2">
        <button>popup2</button>
      </Link>

      <div className="JourneyDetails__title-wrapper">
        <Link to="/">
          <p className="JourneyDetails__cancel-link">Cancel</p>
        </Link>

        <h2 className="JourneyDetails__title">Journey Details</h2>
      </div>
      {/* blue arrow */}

      <div className="JourneyDetails__main">
        <img
          className="JourneyDetails__arrow-wrapper"
          src={arrow}
          alt="Blue rightwards arrow"
        />

        <div className="JourneyDetails__advance-wrapper">
          <h3 className="JourneyDetails__advance">Advance Single</h3>
          <img src={infoIcon} alt="Infomration icon" />
        </div>
        <div className="JourneyDetails__text-wrapper">
          <p className="JourneyDetails__para-text">
            Specified train only. No refunds. Outbound: Only valid on booked
            London North Eastern Railway s...
          </p>

          <p className="JourneyDetails__main-more"> More</p>

          <p>First class & more tickets from £57.80</p>

          <p className="JourneyDetails__main-more">View more tickets</p>
        </div>
        <div className="JourneyDetails__date-wrapper">
          <img src={arrow2} alt="Right arrow icon" />
          <p>Fri, 13 Dec</p>
        </div>

        <div className="JourneyDetails__ball-container">
          <div className="JourneyDetails__ball JourneyDetails__ball-left"></div>
          <div className="JourneyDetails__line JourneyDetails__line--dotted"></div>
          <div className="JourneyDetails__ball JourneyDetails__ball-right"></div>
        </div>

        <div className="JourneyDetails__timings-wrapper">
          <div className="JourneyDetails__departure-info">
            <p className="JourneyDetails__departure-info-bold">5.33pm</p>
            <p>York</p>
          </div>
          <img src={rightArrow} alt="right arrow icon" />
          <div className="JourneyDetails__arrival-info">
            <p className="JourneyDetails__departure-info-bold">9:18pm</p>
            <p>Brighton</p>
          </div>
        </div>
        <p className="JourneyDetails__time-changes">3h 45m, 2 changes</p>

        <div className="JourneyDetails__seat-wrapper">
          <img src={seatIcon} alt="Seat icon" />
          <div>
            <p className="JourneyDetails__seat">Tim's seat</p>
            <p>
              Standard class, <span>Carriage A, seat 06</span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="JourneyDetails__button-wrapper">
        <button className="JourneyDetails__button">Share Journey</button>
      </div> */}
      <PopUp2 />
    </>
  );
};

export default JourneyDetails;
