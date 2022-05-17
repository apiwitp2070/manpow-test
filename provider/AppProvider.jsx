import React, { useContext, useState } from 'react'

const AppContext = React.createContext({
  value: 1,
  setValue: () => {},
})

export const useAppContext = () => {
  const { value, setValue } = useContext(AppContext)
  return { value, setValue }
}

export const AppProvider = ({ children }) => {
  const [value, setValue] = useState(1)

  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
