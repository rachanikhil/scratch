import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import classes from "./Motion.module.css";
import { positionSliceActions } from "../store/positionSlice";
import { degreeSliceActions } from "../store/degreeSlice";
import { useState } from "react";

const Motion = () => {
  const position = useSelector((state) => state.position);
  const degree = useSelector((state) => state.rotation.degree);
  const [x, setX] = useState(parseInt(position.xPosition, 10));
  const [y, setY] = useState(parseInt(position.yPosition, 10));
  const [angle, SetAngle] = useState(degree);
  const dispatch = useDispatch();
  const moveTenSteps = () => {
    if (position.isRandom) {
      positionSliceActions.updateCatPosition({ x: 10, y: 0 });
      dispatch(positionSliceActions.updateRandom(false));
      setX(position.xPosition + 10);
    } else {
      dispatch(positionSliceActions.updatePositionX(10));
      setX(position.xPosition + 10);
    }
  };
  const turn15DegreeRight = () => {
    dispatch(degreeSliceActions.updateDegree(15));
  };
  const turn15DegreeLeft = () => {
    dispatch(degreeSliceActions.updateDegree(-15));
  };
  const goToRandomPosition = () => {
    dispatch(positionSliceActions.updateRandom(true));
    const randomX = Math.floor(Math.random() * position.maxLeft * 2);
    const randomY = Math.floor(Math.random() * position.maxTop * 2);
    dispatch(
      positionSliceActions.updateCatPosition({ x: randomX, y: randomY })
    );
    setX(randomX);
    setY(randomY);
  };
  const goToXandYPosition = () => {
    dispatch(
      positionSliceActions.updateCatPosition({
        x: parseInt(x, 10),
        y: parseInt(y, 10),
      })
    );
  };
  const pointIndirection = () => {
    dispatch(degreeSliceActions.changeDegree(parseInt(angle, 10)));
  };

  const inTheDirectionOfMouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const calangle =
      Math.atan2(mouseX - position.xPosition, mouseY - position.yPosition) *
        (180 / Math.PI) +
      180;
    dispatch(degreeSliceActions.changeDegree(calangle));
    SetAngle(calangle);
  };

  const updatePositoionOnX = () => {
    dispatch(positionSliceActions.changePositionX(parseInt(x, 10)));
  };

  const updatePositoionOnY = () => {
    dispatch(positionSliceActions.changePositionY(parseInt(y, 10)));
  };

  const onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  return (
    <div>
      <div className="font-bold"> {"Motion"} </div>
      <div
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        id="move10Steps"
        onClick={moveTenSteps}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Move 10 steps"}
      </div>
      <div
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        id="turn15DegreeRight"
        onClick={turn15DegreeRight}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        id="turn15DegreeLeft"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        onClick={turn15DegreeLeft}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        id="goToRandomPosition"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        onClick={goToRandomPosition}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"go to random position"}
      </div>
      <div
        id="goToXandYPosition"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        onClick={goToXandYPosition}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"go to x:"}
        <input
          className={classes.input}
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
        {" y:"}
        <input
          className={classes.input}
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
      </div>
      <div
        id="glideToRandomPosition"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"glide "}
        <input className={classes.input} />
        {" secs to random position"}
      </div>
      <div
        id="glideToXandYposition"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"glide "}
        <input className={classes.input} />
        {"secs to x: "}
        <input
          className={classes.input}
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
        {"y:"}
        <input
          className={classes.input}
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
      </div>
      <div
        id="pointIndirection"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        onClick={pointIndirection}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Point in direction "}
        <input
          className={classes.input}
          value={angle}
          onChange={(e) => SetAngle(e.target.value)}
        />
      </div>
      <div
        id="inTheDirectionOfMouse"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        onClick={inTheDirectionOfMouse}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Point towards mousePointer "}
      </div>
      <div
        id="updatePositoionOnX"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        onClick={updatePositoionOnX}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Change x by "}
        <input
          className={classes.input}
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
      </div>
      <div
        id="updatePositoionOnY"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        onClick={updatePositoionOnY}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"change y by "}
        <input
          className={classes.input}
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
      </div>
      <div
        id="bounceOnEdge"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"if on edge, bounce "}
      </div>
      <div
        id="setRotationStyle"
        onDragStart={(e) => onDragStart(e, e.currentTarget.id)}
        draggable
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"set rotation style left-right "}
      </div>
    </div>
  );
};

export default Motion;
