import React from "react";
import CatSprite from "./CatSprite";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { lookSliceActions } from "../store/lookSlice";

export default function PreviewArea() {
  const looks = useSelector((state) => state.looks);
  const dispatch = useDispatch();
  useEffect(() => {
    const greetTime = setTimeout(() => {
      if (looks.duration >= 0) {
        dispatch(lookSliceActions.updateIsGreetClicked(false));
      }
    }, looks.duration * 1000);

    return () => clearTimeout(greetTime);
  }, [looks.isGreetClicked]);
  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      {looks.isGreetClicked && <p>{looks.text}</p>}
      <CatSprite />
    </div>
  );
}
