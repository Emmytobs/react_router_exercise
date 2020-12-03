import React from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

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
      <p>Working</p>
    </div>
  );
};

export default ShowColor;
