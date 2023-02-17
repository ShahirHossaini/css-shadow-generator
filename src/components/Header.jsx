import React from "react";

import profilePhoto from "./../images/shahirdev.png";

const Header = () => {
  return (
    <div className="main-header">
      <aside className="title">
        <h1>box-shadow CSS Generator</h1>
      </aside>
      <aside className="profile">
        <div className="profile-container">
          <div className="profile-photo">
            <img src={profilePhoto} alt="shahir dev profile" />
          </div>
          <div className="profile-name-username">
            <p>Shahir Hussaini</p>
            <a
              href="https://www.instagram.com/shahirdev/"
              target="_blank"
              rel="noreferrer"
            >
              @shahirdev
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Header;
