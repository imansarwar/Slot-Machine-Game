import React from "react";
import Entry from "./Entry";
import data from "./Data";
function Mapping(value) {
  return <Entry x={value.x} y={value.y} z={value.z} />;
}

function App() {
  return (
    <div class="wrapper">
      <div class="card">
        <div id="container">
          <p id="name">State Machine</p>
          <hr />
          {data.map(Mapping)}
        </div>
      </div>
    </div>
  );
}
export default App;
