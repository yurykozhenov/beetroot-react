import React, { useState } from "react";

export default function useToggled(initialState = false) {
  const [isToggled, setToggled] = useState(initialState);

  const handleToggled = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggled(Boolean(e.target.checked));
  };

  return [isToggled, handleToggled] as const;
}
