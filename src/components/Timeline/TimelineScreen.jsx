import React from "react";
import activitiesFair from "./img/activities-fair.png";
import backpack from "./img/backpack.png";
import balloons from "./img/balloons.png";
import blank from "./img/blank.png";
import fencePainting from "./img/fence-painting.png";
import fence from "./img/fence.png";
import firstYearConvocation from "./img/first-year-convocation.png";
import homebutton from "./img/homebutton.png";
import homecomingWeekend from "./img/homecoming-weekend.png";
import oct from "./img/oct.png";
import orientationWeek from "./img/orientation-week.png";
import paws from "./img/paws.png";
import people from "./img/people.png";
import sep from "./img/sep.png";
import "./timeline.css";
import { Link } from "react-router-dom";

const TimelineScreen = () => {
  return (
    <div className="iphone2">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="orientation-week"
            alt="Orientation week"
            src={orientationWeek}
          />

          <div className="overlap">
            <img
              className="activities-fair"
              alt="Activities fair"
              src={activitiesFair}
            />

            <img className="paws" alt="Paws" src={paws} />

            <img className="backpack" alt="Backpack" src={backpack} />

            <img className="balloons" alt="Balloons" src={balloons} />

            <img
              className="fence-painting"
              alt="Fence painting"
              src={fencePainting}
            />

            <img className="fence" alt="Fence" src={fence} />

            <img
              className="homecoming-weekend"
              alt="Homecoming weekend"
              src={homecomingWeekend}
            />

            <img className="blank" alt="Blank" src={blank} />

            <img
              className="first-year"
              alt="First year"
              src={firstYearConvocation}
            />

            <img className="people" alt="People" src={people} />

            <img className="sep" alt="Sep" src={sep} />

            <img className="oct" alt="Oct" src={oct} />

            <img className="homebutton" alt="Homebutton" src={homebutton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineScreen;