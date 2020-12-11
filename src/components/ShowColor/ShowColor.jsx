import React from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

import "./ShowColor.css";

const ShowColor = () => {
  const { colorId } = useParams();
  const {
    state: { colors }
  } = React.useContext(GlobalContext);
  const [color, setColor] = React.useState("");

  React.useEffect(() => {
    // console.log(colorId);
    // console.log(colorName);
    const color = colors.find((color) => color.colorName === colorId);
    setColor(color.colorValue);
  }, []);

  return (
    <div className="color-container" style={{ backgroundColor: color }}>
      <div>
        <p>Click to copy code</p> {/** When code is copied, show "Copied!" **/}
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default ShowColor;
