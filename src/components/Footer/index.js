import React from "react";
import "./Footer.css";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        <a>
          <AiFillTwitterSquare />
        </a>
      </span>
      <span>
        <a>
          <AiFillFacebook />
        </a>
      </span>
      <span>
        <a>
          <AiFillInstagram />
        </a>
      </span>
      <span>
        <a>
          <AiFillGithub />
        </a>
      </span>
    </footer>
  );
}
