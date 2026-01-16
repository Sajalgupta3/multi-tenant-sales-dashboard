import { createContext, useContext, useState } from "react";
import { mockData } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tenant, setTenant] = useState("orgA");
  const [role, setRole] = useState("Admin");

  return (
    <AppContext.Provider
      value={{
        tenant,
        role,
        setTenant,
        setRole,
        data: mockData[tenant]
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
