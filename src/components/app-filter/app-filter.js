import "./app-filter.css";
import { Component } from "react";
function AppFilter(props) {
  const buttonData = [
    { name: "all", label: "All employees" },
    { name: "rise", label: "Top productive" },
    { name: "salary", label: "Top salary" },
  ];
  const buttons = buttonData.map(({ name, label }) => {
    const active = props.filter === name;
    let clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => {
          props.onSortSelect(name);
        }}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}

export default AppFilter;
