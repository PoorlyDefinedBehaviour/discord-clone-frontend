import { useState, useEffect } from "react";

export default function useKeyPress(targetKey): boolean {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }): void => {
    if (key === targetKey) setKeyPressed(true);
  };

  const upHandler = ({ key }): void => {
    if (key === targetKey) setKeyPressed(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return (): void => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
}
