import React from "react";
import BodyText from "./BodyText";

export default function SectionBody() {
  return (
    <div className="text-container">
      <BodyText
        title="About"
        paragraph="
Purposeful, decisive leader, excellent communicator, very organized, highly adaptive, an inspirational coach and an innovative problem solver and God-lover "
      />
      <BodyText
        title="Interests"
        paragraph="Software engineering, product management,scrum and agile methodologies, education, civil engineering, coaching, customer success, startups, webinars,  employee growth and development, administration, parenting, relationship management."
      />
    </div>
  );
}
