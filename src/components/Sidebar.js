import React from "react";
import Control from "./Control";
import Events from "./Events";
import Looks from "./Looks";
import Motion from "./Motion";

export default function Sidebar() {
  const onDragOver = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "CopyOrMove";
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    ev.dataTransfer.dropEffect = "CopyOrMove";
    const element = document.getElementById(id);
    ev.target.appendChild(element);
  };
  return (
    <div
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e)}
      className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start
      p-2 border-r border-gray-200"
    >
      <Events />
      <Motion />
      <Looks />
      <Control />
    </div>
  );
}
