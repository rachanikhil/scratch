import React from "react";
import CatSprite from "./CatSprite";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { lookSliceActions } from "../store/lookSlice";
import { spriteSliceActions } from "../store/spriteSlice";

export default function PreviewArea() {
  const looks = useSelector((state) => state.looks);
  const sprite = useSelector((state) => state.sprite);
  const dispatch = useDispatch();
  const createSpriteHandler = () => {
    console.log(sprite);
    let characterArray = [...sprite.characters];
    characterArray.push({ id: `sprite${sprite.characters.length}`, angle: 0 });
    dispatch(spriteSliceActions.addCharacter(characterArray));
  };
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  let elmnt = null;
  const elementDrag = (e) => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  };

  const closeDragElement = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };
  const dragMouseDown = (e, id) => {
    elmnt = document.getElementById(id);

    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };
  const activeSpriteHandler = (char_id) => {
    console.log(char_id);

    dispatch(spriteSliceActions.setActiveSprite(char_id));
  };
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
      <button className="absolute" onClick={(e) => createSpriteHandler()}>Create Sprite</button>
      {looks.isGreetClicked && <p>{looks.text}</p>}
      {looks.isCatVisible &&
        sprite["characters"].map((chararcter, i) => (
          <div
            id={`${chararcter.id}-${i}`}
            key={i}
            onMouseDown={(e) => dragMouseDown(e, `${chararcter.id}-${i}`)}
          >
            <CatSprite
              key={chararcter.id}
              char_id={chararcter.id}
              setActiveSprite={activeSpriteHandler}
            />
          </div>
        ))}
    </div>
  );
}
