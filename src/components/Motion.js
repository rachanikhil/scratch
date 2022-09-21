import React from "react";
import Icon from "./Icon";
import classes from "./Motion.module.css";

const Motion = () => {
  return (
    <div>
      <div className="font-bold"> {"Motion"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Move 10 steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"go to "}
        {"random position"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"go to x:"}
        <input className={classes.input} />
        {" y:"}
        <input className={classes.input}/>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"glide "}
        <input className={classes.input}/>
        {" secs to random position"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"glide "}
        <input className={classes.input}/>
        {"secs to x: "}
        <input className={classes.input}/>
        {"y:"}
        <input className={classes.input}/>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Point in direction "}
        <input className={classes.input}/>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Point towards mousePointer "}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change x by "}
        <input className={classes.input}/>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"change y by "}
        <input className={classes.input} />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"if on edge, bounce "}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"set rotation style left-right "}
      </div>
    </div>
  );
};

export default Motion;
