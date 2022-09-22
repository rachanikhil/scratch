import React from "react";
import Icon from "./Icon";

const Events = () => {
  return (
    <div>
      <div className="font-bold"> {"Events"} </div>
      <div id="clicked" className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div id="spacePressed" className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        When space key is pressed
      </div>
      <div id="spriteClicked" className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div id="receiveMessage" className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        When I receive message
      </div>
      <div id="broadcastMessage" className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        broadcast message
      </div>
      <div id="broadCastMessageandWait" className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        broadcast message and wait
      </div>
    </div>
  );
};

export default Events;
