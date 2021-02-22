import React from "react";
import Matching from "./Matching";
import NonMatching from "./NonMatching";

function Entry(props) {
  let x = props.x;
  let y = props.y;
  let z = props.z;
  if (x === y && y === z) {
    return <Matching x={props.x} y={props.y} z={props.z} />;
  } else {
    return <NonMatching x={props.x} y={props.y} z={props.z} />;
  }
}
export default Entry;
