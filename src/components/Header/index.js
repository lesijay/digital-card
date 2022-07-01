import React from "react";
import "./Header.css"
import ProfileImg from "./profile-pix.png"

export default function Header() {
  return (
      <header className="header">
          <div className="profile-img-container" >
              <img src={ProfileImg} />
          </div>

    </header>
  );
}
