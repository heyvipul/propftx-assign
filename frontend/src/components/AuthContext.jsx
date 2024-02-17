import { createContext, useState } from "react"

export const authContext = createContext();

const AuthContext = ({children}) => {
  const [user,setUser] = useState(null)

  return (
    <authContext.Provider value={{setUser,user}}>
        {children}
    </authContext.Provider>
  )
}

export default AuthContext