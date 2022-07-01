import React from "react";
import BodyText from "./BodyText";


export default function SectionBody() {
  return (
    <div className="text-container">
      <BodyText
        title="About"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla lacinia dolor, et dapibus nulla euismod sit amet. Curabitur eu elit facilisis, efficitur purus cursus, volutpat sapien. Maecenas finibus ultricies odio. Vestibulum venenatis massa lectus, ac iaculis sapien sagittis sit amet."
      />
      <BodyText
        title="Interests"
        paragraph="Cras commodo finibus nisl sed euismod. Praesent efficitur, nisl non tristique ultricies, purus mi fermentum eros, auctor lacinia odio quam vel lorem"
      />
    </div>
  );
}
