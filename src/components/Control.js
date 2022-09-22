import React from "react";
import Icon from "./Icon";

const Control = () => {
  return (
    <div>
      <div className="font-bold"> {"Control"} </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        wait 1 seconds
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        repeat 10
        <Icon name="repeat" size={15} className="text-white mx-2" />
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        forever
        <Icon name="repeat" size={15} className="text-white mx-2" />
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        if <input /> then
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        if <input /> then else
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        wait until <input />
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        repeat until <input />
        <Icon name="repeat" size={15} className="text-white mx-2" />
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        stop all
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        When I start as Clone
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        create clone of mySelf
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        delete this clone
      </div>
    </div>
  );
};

export default Control;
