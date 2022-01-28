import React from "react";

export const AppContext = React.createContext<{
  showMain: boolean;
  setShowMain: (value: boolean) => void;
}>({
  showMain: false,
  setShowMain: () => {},
});
