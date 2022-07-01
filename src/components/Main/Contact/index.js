import React from "react";
import Button from "../Button";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

export default function Contact() {
  return (
    <div className="btn-container ">
      <Button
        href="mailto:lesisampson@gmail.com"
        title="Email"
        icon={<MdEmail />}
        style={{ backgroundColor: "#ffffff", color: "#374151" }}
      />
      <Button
        href="https://www.linkedin.com/in/lesi-jesam-sampson/"
        title="LinkedIn "
        icon={<ImLinkedin />}
        style={{ backgroundColor: "#5093E2" }}
      />
    </div>
  );
}
