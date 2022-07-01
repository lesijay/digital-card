import React from "react";
import Contact from "./Contact";
import "./Main.css"
import SectionBody from "./SectionBody";
import SectionTitle from "./SectionTitle";

export default function Main() {
  return (
    <main className="main">
      <SectionTitle />
      <Contact />
      <SectionBody />
    </main>
  );
}
