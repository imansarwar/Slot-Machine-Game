import React from "react";
function Matching(props) {
  return (
    <div>
      <p id="exp">
        {props.x} {props.y} {props.z}
      </p>
      <p> This is Matching </p>
      <hr />
    </div>
  );
}
export default Matching;
