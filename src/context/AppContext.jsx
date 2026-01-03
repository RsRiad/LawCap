import { lawyers } from "../assets/assets";
import { AppContext } from "./Context";
const AppContextProvider = ({ children }) => {
  const value = {
    lawyers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
