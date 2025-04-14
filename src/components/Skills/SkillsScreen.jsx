import { Link } from "react-router-dom";

import React from "react";
import CLOTHESBttn from "./img/CLOTHES-bttn.png";
import group146 from "./img/group-146.png";
import group311 from "./img/group-311.png";
import hangout from "./img/hangout.png";
import learning from "./img/learning.png";
import networking from "./img/networking.png";
import selfCare from "./img/self-care.png";
import selfDrive from "./img/self-drive.png";
import "./skills.css";

const SkillsScreen = () => {
  return (
    <div className="iphone3">
      <div className="div">
        <div className="text-wrapper">Your skills</div>

        <div className="tab">
          <div className="text-wrapper-2">Skills</div>

          <div className="text-wrapper-3"><Link to="/badges">Badges</Link></div>
        </div>

        <img className="hangout" alt="Hangout" src={hangout} />

        <img className="self-care" alt="Self care" src={selfCare} />

        <img className="self-drive" alt="Self drive" src={selfDrive} />

        <img className="learning" alt="Learning" src={learning} />

        <img className="networking" alt="Networking" src={networking} />

        <Link to="/"><img className="group" alt="Group" src={group146} /></Link>

        <div className="overlap-group">
          <img className="CLOTHES-bttn" alt="Clothes bttn" src={CLOTHESBttn} />

          <img className="img" alt="Group" src={group311} />
        </div>
      </div>
    </div>
  );
};


export default SkillsScreen;