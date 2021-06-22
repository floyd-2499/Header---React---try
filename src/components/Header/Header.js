import React from "react";
import './Header.css'
import { HeaderLinks, socialMediaIcon } from "../../Data/HeaderData";

const Header = () => {
  return (
      <div className="container">
              <div className="header">
      <div className="logo">
        <div className="logo-icon">
          <i class="fas fa-feather-alt"></i>
        </div>
        <div className="name">
            <p>Feather</p>
        </div>
      </div>
      <div className="navlinks">
          <ul className="links">
              {HeaderLinks.map((link) => {
                  const {id, url, text} = link;
                  return (
                      <li key={id} className="a">
                          <a href={url}> {text} </a>
                      </li>
                  )
              } )}

          </ul>
      </div>
      <div className="mediaicons">
          <ul className="icons">
              {socialMediaIcon.map((icons) => {
                  const {id, url, icon} =icons;
                  return (
                      <li key={id} className="b">
                          <a href={url}> {icon}</a>
                      </li>
                  )
              })}
          </ul>
      </div>
    </div>
      </div>

  );
};

export default Header;
