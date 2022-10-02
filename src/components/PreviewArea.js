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
  const activeSpriteHandler = (char_id) =>  {
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
      {looks.isGreetClicked && <p>{looks.text}</p>}
      {looks.isCatVisible &&
        sprite["characters"].map((chararcter) => (
          <CatSprite
            key={chararcter.id}
            char_id={chararcter.id}
            setActiveSprite={activeSpriteHandler}
          />
        ))}
      <button onClick={(e) => createSpriteHandler()}>Create Sprite</button>
    </div>
  );
}
