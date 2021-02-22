import React from "react";
function NonMatching(props) {
  return (
    <div>
      <p id="exp">
        {props.x} {props.y} {props.z}
      </p>
      <p> This is not Matching </p>
      <hr />
    </div>
  );
}
export default NonMatching;
