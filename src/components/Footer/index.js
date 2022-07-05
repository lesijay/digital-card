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
        <a href="https://twitter.com/LesiS19" target="_blank">
          <AiFillTwitterSquare />
        </a>
      </span>
      <span>
        <a href="https://web.facebook.com/lesi.dogbaa/" target="_blank">
          <AiFillFacebook />
        </a>
      </span>
      <span>
        <a href="https://www.instagram.com/sampsonlesi/" target="_blank">
          <AiFillInstagram />
        </a>
      </span>
      <span>
        <a href="https://github.com/lesijay" target="_blank">
          <AiFillGithub />
        </a>
      </span>
    </footer>
  );
}
