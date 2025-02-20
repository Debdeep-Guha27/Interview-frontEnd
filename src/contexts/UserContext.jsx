import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState("login");
  const [userId, setUserId] = useState(null);
  let value = { auth, setAuth, userId, setUserId };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
