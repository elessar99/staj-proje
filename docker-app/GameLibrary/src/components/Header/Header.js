import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () =>{
  const [pcControl, setPcControl] = useState(false);
  const [browserControl, setBrowserControl] = useState(false);
  return (
    <>
    <div className="header">
      <NavLink to={"/"} className="headerLogo">
        gamelibrary
      </NavLink>
      <div className="headerNavbar">
        <div id="pcDropdown" className="headerNavbarDropdown">
          <div className="headerNavbarBtn" onClick={()=>{
            setBrowserControl(false)
            setPcControl(!pcControl)
          }}>
            PC Games
          </div>
          <div id="pcDropdownMenu"  className={pcControl? "headerNavbarList headerMobile" : "headerNavbarList"}>
            <NavLink to={"/game/pc/mmorpg"} className="headerNavbarListBtn">MMORPG</NavLink>
            <NavLink to={"/game/pc/shooter"} className="headerNavbarListBtn">Shooter</NavLink>
            <NavLink to={"/game/pc/moba"} className="headerNavbarListBtn">MOBA</NavLink>
            <NavLink to={"/game/pc/anime"} className="headerNavbarListBtn">Anime</NavLink>
            <NavLink to={"/game/pc/battle-royale"} className="headerNavbarListBtn">Battle Royale</NavLink>
            <NavLink to={"/game/pc/strategy"} className="headerNavbarListBtn">Strategy</NavLink>
            <NavLink to={"/game/pc/fantasy"} className="headerNavbarListBtn">Fantasy</NavLink>
            <NavLink to={"/game/pc/sci-fi"} className="headerNavbarListBtn">Sci-Fi</NavLink>
            <NavLink to={"/game/pc/card"} className="headerNavbarListBtn">Card Games</NavLink>
            <NavLink to={"/game/pc/racing"} className="headerNavbarListBtn">Racing</NavLink>
            <NavLink to={"/game/pc/fighting"} className="headerNavbarListBtn">Fighting</NavLink>
            <NavLink to={"/game/pc/social"} className="headerNavbarListBtn">Social</NavLink>
            <NavLink to={"/game/pc/sports"} className="headerNavbarListBtn">Sports</NavLink>
            <NavLink to={"/game/pc/all"} className="headerNavbarListBtn">All Pc Game</NavLink>
          </div>
        </div>
        <div id="browserDropdown" className="headerNavbarDropdown">
          <div className="headerNavbarBtn" onClick={()=>{
            setPcControl(false)
            setBrowserControl(!browserControl)
          }}>
            Browser Games
          </div>
          <div id="browserDropdownMenu" className={browserControl? "headerNavbarList headerMobile" : "headerNavbarList"}>
            <NavLink to={"/game/browser/mmorpg"} className="headerNavbarListBtn">Browser MMORPG</NavLink>
            <NavLink to={"/game/browser/shooter"} className="headerNavbarListBtn">Browser Shooter</NavLink>
            <NavLink to={"/game/browser/anime"} className="headerNavbarListBtn">Browser Anime</NavLink>
            <NavLink to={"/game/browser/strategy"} className="headerNavbarListBtn">Browser Strategy</NavLink>
            <NavLink to={"/game/browser/fantasy"} className="headerNavbarListBtn">Browser Fantasy</NavLink>
            <NavLink to={"/game/browser/sci-fi"} className="headerNavbarListBtn">Browser Sci-Fi</NavLink>
            <NavLink to={"/game/browser/racing"} className="headerNavbarListBtn">Browser Racing</NavLink>
            <NavLink to={"/game/browser/social"} className="headerNavbarListBtn">Browser Social</NavLink>
            <NavLink to={"/game/browser/sports"} className="headerNavbarListBtn">Browser Sports</NavLink>
            <NavLink to={"/game/browser/all"} className="headerNavbarListBtn">All Browser Game</NavLink>
          </div>
        </div>
        <NavLink to={"allgame"} className="headerNavbarBtn">
          All Game
        </NavLink>
        <NavLink to={"gamenews"} className="headerNavbarBtn">
          News
        </NavLink>
        <NavLink to={"tag"} className="headerNavbarBtn">
          Tags
        </NavLink>
        <NavLink to={"search"} className="headerNavbarBtn">
          Search
        </NavLink>
      </div>
    </div>
    </>
    
  );
}

export default Header;

