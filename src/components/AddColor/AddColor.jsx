import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { useHistory } from "react-router-dom";

import "./AddColor.css";

export default function AddColor(props) {
  const [form, setForm] = React.useState({ colorName: "", colorValue: "" });

  const context = useContext(GlobalContext);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.colorName || !form.colorValue) {
      return;
    }
    context.setState({
      ...context.state,
      colors: [...context.state.colors, form]
    });
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="colorName"
        value={form.colorName}
        placeholder="Color name"
        onChange={handleChange}
      />
      <input
        type="color"
        name="colorValue"
        value={form.colorValue}
        placeholder="Color value"
        onChange={handleChange}
      />
      <button type="submit">Add </button>
    </form>
  );
}
