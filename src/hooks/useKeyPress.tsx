import { useState, useEffect } from "react";

export const useKeyPress = (targetKey): any =>{
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }: any): void => {
    if (key === targetKey) setKeyPressed(true);
  };

  const upHandler = ({ key }: any): void => {
    if (key === targetKey) setKeyPressed(false);
  };

  useEffect((): any => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return (): void => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
}
