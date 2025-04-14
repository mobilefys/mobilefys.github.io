import React from "react";
import clubFair from "./img/club-fair.png";
import daily from "./img/daily.png";
import frame28 from "./img/frame-28.png";
import group146 from "./img/group-146.png";
import group259 from "./img/group-259.png";
import image from "./img/time-1.png";
import time from "./img/time.png";
import "./quest.css";
import { Link } from "react-router-dom";


const QuestScreen = () => {
  return (
    <div className="missions-quest-main">
      <div className="div">
        <div className="tab">
          <div className="text-wrapper">Quests</div>

          <div className="text-wrapper-2">Calendar</div>
        </div>

        <div className="overlap-group">
          <img className="group" alt="Group" src={group259} />
        </div>

        <div className="overlap">
          <img className="frame" alt="Frame" src={frame28} />

          <Link to="/"> <img className="img" alt="Group" src={group146} /></Link>
        </div>

        <img className="club-fair" alt="Club fair" src={clubFair} />

        <img className="time-2" alt="Time" src={time} />

        <img className="daily" alt="Daily" src={daily} />

        <img className="time-3" alt="Time" src={image} />

      </div>
    </div>
  );
};

export default QuestScreen;