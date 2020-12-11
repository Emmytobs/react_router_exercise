import React from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context";

import "./Home.css";

export default function Home(props) {
  const {
    state: { colors },
    state,
    setState
  } = React.useContext(GlobalContext);

  const history = useHistory();

  const removeColor = (color) => {
    const updatedColors = colors.filter(
      (colorInState) => colorInState.colorName !== color.colorName
    );
    setState({ ...state, colors: [...updatedColors] });
  };

  const showColor = (e, color) => {
    if (e.target.id === "remove-color") {
      removeColor(color);
      return;
    }
    history.push(`/display_color/${color.colorName}`);
  };

  return (
    <>
      <div className="landing">
        <p>Welcome to Color Factory</p>
        <Link className="add-color" to={"/colors/new"}>
          Add a Color
        </Link>
      </div>
      <div className="colors-container">
        {colors.map((color) => (
          <div
            className="link-to-color"
            style={{ backgroundColor: color.colorValue }}
            onClick={(e) => showColor(e, color)}
          >
            <p className="remove-color" id="remove-color">
              *
            </p>
            <div className="color">
              <p className="color-name">{color.colorName}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
