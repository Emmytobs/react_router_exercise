import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Home(props) {
  const {
    state: { colors }
  } = React.useContext(GlobalContext);

  return (
    <>
      <div className="landing">
        <p>Welcome to Color Factory</p>
        <p>
          <Link to={"/colors/new"}>Add a Color</Link>
        </p>
      </div>
      <div>
        {colors.map((color) => (
          <div>
            <Link to={`/display_color/${color.colorName}`}>
              {color.colorName}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
