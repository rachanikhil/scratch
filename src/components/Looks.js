import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lookSliceActions } from "../store/lookSlice";
import classes from "./Looks.module.css";
// import Icon from "./Icon";

const Looks = () => {
  const looks = useSelector((state) => state.looks);
  const dispatch = useDispatch();
  const [greetText, setGreetText] = useState(looks.text);
  const [helloTime, setHelloTime] = useState(looks.duration);
  const limitedHello = () => {
    dispatch(lookSliceActions.updateText(greetText));
    dispatch(lookSliceActions.updateDuration(2));
    dispatch(lookSliceActions.updateIsGreetClicked(true));
  };
  const sayHello = () => {
    dispatch(lookSliceActions.updateText(greetText));
    dispatch(lookSliceActions.updateDuration(-1));
    dispatch(lookSliceActions.updateIsGreetClicked(true));
  };

  const thinkForTwoSec = () => {
    dispatch(lookSliceActions.updateText("hmm"));
    dispatch(lookSliceActions.updateDuration(2));
    dispatch(lookSliceActions.updateIsGreetClicked(true));
  };
  const thinkHmm = () => {
    dispatch(lookSliceActions.updateText("hmm"));
    dispatch(lookSliceActions.updateDuration(-1));
    dispatch(lookSliceActions.updateIsGreetClicked(true));
  };

  const changeSizeBy10 = () => {
    const { size, addedSize } = looks;
    const increasedSize = {
      width: addedSize.width > 0 ? addedSize.width * 1.1 : size.width * 1.1,
      height: addedSize.height > 0 ? addedSize.height * 1.1 : size.height * 1.1,
    };
    dispatch(lookSliceActions.updateAddedSize(increasedSize));
  };
  return (
    <div>
      <div className="font-bold"> Looks</div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          limitedHello();
        }}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Say{" "}
        <input
          className={classes.input}
          value={greetText}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setGreetText(e.target.value);
          }}
        />{" "}
        for{" "}
        <input
          className={classes.input}
          value={helloTime}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setHelloTime(e.target.value);
          }}
        />{" "}
        secs
      </div>
      <div
        onClick={sayHello}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Say Hello
      </div>
      <div
        onClick={thinkForTwoSec}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Think hmm for 2 seconds
      </div>
      <div
        onClick={thinkHmm}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        think hmm..
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        Switch costume to costume1
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        next costume
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        switch backdrop to backdrop1
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        next backdrop
      </div>
      <div
        onClick={changeSizeBy10}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        change size by 10
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        set size to 100%
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        change color effect by 25
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        set color effect to 0
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        clear graphic effect
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        show
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        go to front layer
      </div>
    </div>
  );
};

export default Looks;
