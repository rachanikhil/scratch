import React from "react";
import { useState } from "react";

export default function MidArea(props) {
  const [names, setNames] = useState([]);
  const onDragOver = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
  };

  const onDrop = (ev) => {
    let id = ev.dataTransfer.getData("id");
    ev.dataTransfer.dropEffect = "copy";
    const element = document.getElementById(id);
    ev.target.appendChild(element);
    setNames((prevState) => [...prevState, id]);
  };
  const catEvents = (e) => {
    names.forEach((name) => {
      let element = document.getElementById(name);
      element.click();
    });
  };
  return (
    <div className="flex-1 h-full overflow-auto">
      <div
        className="flex-1 h-full overflow-auto"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e)}
      >
        {props.children}
        <button
          className="bg-green-500 text-white"
          type="button"
          onClick={(e) => catEvents(e)}
        >
          Run Cat
        </button>
      </div>
    </div>
  );
}
