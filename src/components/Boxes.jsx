import { useState } from "react";
import Box from "./Box";
const Boxes = () => {
  const [width, setWidth] = useState("10px");
  const [height, setHeight] = useState("10px");
  return (
    <>
      <input
        type="range"
        min="10"
        max="500"
        onChange={(e) => setWidth(e.target.value.concat("px"))}
      />
      <input
        type="range"
        min="10"
        max="500"
        onChange={(e) => setHeight(e.target.value.concat("px"))}
      />
      <Box width={width} height={height} />
    </>
  );
};

export default Boxes;
