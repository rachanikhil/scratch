import React from "react";
import Events from "./Events";
import Looks from "./Looks";
import Motion from "./Motion";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <Events />
      <Motion />
      <Looks />
    </div>
  );
}
