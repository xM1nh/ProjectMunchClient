import { TUser } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";

type TUserProviderProps = {
  children: ReactNode;
};

type TUserProviderContext = {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
};

const initialState: TUserProviderContext = {
  user: null,
  setUser: () => null,
};

const UserProviderContext = createContext<TUserProviderContext>(initialState);

export const UserProvider = ({ children, ...props }: TUserProviderProps) => {
  const [user, setUser] = useState<TUser | null>(null);

  return (
    <UserProviderContext.Provider {...props} value={{ user, setUser }}>
      {children}
    </UserProviderContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserProviderContext);

  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");

  return context;
};
