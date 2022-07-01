import React from "react";
import "./Button.css";

export default function Button({ icon, title, style, href }) {
  return (
    <a href={href} target="_blank" className="btn" style={style}>
      <span>{icon} </span>
      <span> {title}</span>
    </a>
  );
}
