import React from "react";
import { useContext } from "react";
import ClickContext from "../store/click-context";
const Display = () => {
  const clickContext = useContext(ClickContext);
  return (
    <div>
      <h1>Button clicked {clickContext.value} times</h1>
      <h3>This is a modified change</h3>
    </div>
  );
};

export default Display;
