import React from "react";
import { useState } from "react";

export default function MidArea(props) {
  const [tasks, setTasks] = useState([]);
  const onDragOver = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    const element = document.getElementById(id);
    ev.target.appendChild(element);
  };
  return (
    <div
      className="flex-1 h-full overflow-auto"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, "complete")}
    >
      {props.children}
    </div>
  );
}
