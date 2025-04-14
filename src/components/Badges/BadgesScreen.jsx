import { Link } from "react-router-dom";

import React from "react";
import academicScroll from "./img/academic_scroll.png";
import group113 from "./img/group-113.png";
import group114 from "./img/group-114.png";
import group146 from "./img/group-146.png";
import selfcareScroll from "./img/selfcare_scroll.png";
import "./badges.css";
import tutorialBadge from "./img/tutorial-badge.png";

const BadgesScreen = () => {
  return (
    <div className="iphone">
      <div className="div">
        <img
          className="academic-scroll"
          alt="Academic scroll"
          src={academicScroll}
        />

        <img className="group" alt="Group" src={group113} />

        <img className="img" alt="Group" src={group114} />

        <img
          className="tutorial-badge"
          alt="Tutorial badge"
          src={tutorialBadge}
        />

        <div className="overlap-group">
          <img
            className="selfcare-scroll"
            alt="Selfcare scroll"
            src={selfcareScroll}
          />

          <Link to="/"><img className="group-2" alt="Group" src={group146} /></Link>
        </div>

        <div className="academic-title">
          <div className="text-wrapper">Academic</div>

          <div className="text-wrapper-2">see all</div>
        </div>

        <div className="exploration-title">
          <div className="text-wrapper">Exploration</div>

          <div className="text-wrapper-3">see all</div>
        </div>

        <div className="selfcare-title">
          <div className="text-wrapper">Self-Care</div>

          <div className="text-wrapper-3">see all</div>
        </div>

        <div className="tab">
        <Link to="/skills"><div className="text-wrapper-4">Skills</div></Link>

          <div className="text-wrapper-5">Badges</div>
        </div>
      </div>
    </div>
  );
};


export default BadgesScreen;