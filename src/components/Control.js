import React from "react";
import Icon from "./Icon";

const Control = () => {
  return (
    <div>
      <div className="font-bold"> {"Control"} </div>
      <div id="wait1sec" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        wait 1 seconds
      </div>
      <div id="repeat10" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        repeat 10
        <Icon name="repeat" size={15} className="text-white mx-2" />
      </div>
      <div id="forever" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        forever
        <Icon name="repeat" size={15} className="text-white mx-2" />
      </div>
      <div id="ifThen" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        if <input /> then
      </div>
      <div id="ifThenElse" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        if <input /> then else
      </div>
      <div id="waitUntil" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        wait until <input />
      </div>
      <div id="repeatUntil" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        repeat until <input />
        <Icon name="repeat" size={15} className="text-white mx-2" />
      </div>
      <div id="stop" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        stop all
      </div>
      <div id="cloneStart" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        When I start as Clone
      </div>
      <div id="createClone" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        create clone of mySelf
      </div>
      <div id="deleteClone" className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        delete this clone
      </div>
    </div>
  );
};

export default Control;
