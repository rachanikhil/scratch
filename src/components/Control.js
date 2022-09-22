import React from "react";
import Icon from "./Icon";

const Control = () => {
  const onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };
  return (
    <div>
      <div className="font-bold"> {"Control"} </div>
      <div
        id="wait1sec"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        wait 1 seconds
      </div>
      <div
        id="repeat10"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        repeat 10
        <Icon name="repeat" size={15} className="text-white mx-2" />
      </div>
      <div
        id="forever"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        forever
        <Icon name="repeat" size={15} className="text-white mx-2" />
      </div>
      <div
        id="ifThen"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        if <input /> then
      </div>
      <div
        id="ifThenElse"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        if <input /> then else
      </div>
      <div
        id="waitUntil"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        wait until <input />
      </div>
      <div
        id="repeatUntil"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        repeat until <input />
        <Icon name="repeat" size={15} className="text-white mx-2" />
      </div>
      <div
        id="stop"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        stop all
      </div>
      <div
        id="cloneStart"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        When I start as Clone
      </div>
      <div
        id="createClone"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        create clone of mySelf
      </div>
      <div
        id="deleteClone"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        delete this clone
      </div>
    </div>
  );
};

export default Control;
