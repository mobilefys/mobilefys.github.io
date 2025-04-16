import MapScreen from './components/Map/MapScreen';
import React from 'react';
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


import WrapperPage from './components/WrapperPage';
import { useLocation, useRoutes, Route, BrowserRouter } from "react-router-dom";
import QuestScreen from './components/Quest/QuestScreen';
import SkillsScreen from './components/Skills/SkillsScreen';
import BadgesScreen from './components/Badges/BadgesScreen';
import TimelineScreen from './components/Timeline/TimelineScreen';
import "./app.css";
import group146 from "./menu_img/group-146.png";
import middleScotty from "./menu_img/middle-scotty.png";
import profileButton from "./menu_img/profile-button.png";
import questButton from "./menu_img/quest-button.png";
import socialButton from "./menu_img/social-button.png";


function App() {


const location = useLocation();

    const element = useRoutes([
        {
          path: "/",
          element: <WrapperPage element={
            <div className="missions-quest-main2">
      <div className="div">
      <Link to="/map"><img className="group" alt="Group" src={group146} /></Link>

        <div className="overlap">
          <img
            className="social-button"
            alt="Social button"
            src={socialButton}
          />

          <div className="text-wrapper">social</div>
        </div>

        <div className="overlap-group">
          <img
            className="middle-scotty"
            alt="Middle scotty"
            src={middleScotty}
          />

          <div className="overlap-group-2">
          <Link to="/skills"><img className="img" alt="Profile button" src={profileButton} /></Link>

            <div className="text-wrapper-2">profile</div>
          </div>

          <div className="overlap-2">
            <Link to="/quests"><img className="img" alt="Quest button" src={questButton} /></Link>

            <div className="text-wrapper-2">quests</div>
          </div>
        </div>
      </div>
    </div>}/>
        },
        {
          path: "/map",
          element: (
            <WrapperPage element={<MapScreen/>}/>
          )
        },
        {
          path: "/quests",
          element: (
            <WrapperPage element={<QuestScreen/>}/>
          )
        }
        ,
        {
          path: "/skills",
          element: (
            <WrapperPage element={<SkillsScreen/>}/>
          )
        },
        {
          path: "/badges",
          element: (
            <WrapperPage element={<BadgesScreen/>}/>
          )
        },{
          path: "/timeline",
          element: (
            <WrapperPage element={<TimelineScreen/>}/>
          )
        }
      ]);

      if (!element) return null;


      return ( <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>);
      
}


export default App;