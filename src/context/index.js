import React, { useState } from "react";

const initialState = {
  colors: []
};

export const GlobalContext = React.createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
