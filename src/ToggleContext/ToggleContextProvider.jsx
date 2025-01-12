import React, { createContext, useState } from 'react'
export const ToggleContext = createContext();

function ToggleContextProvider({children}) {
  const [mode, setMode] = useState("light");

  function handlePage() {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  const value = {
    mode,
    setMode,
    handlePage
  }
  return (
    <ToggleContext.Provider value={value}>
      {children}
    </ToggleContext.Provider>
  )
}

export default ToggleContextProvider