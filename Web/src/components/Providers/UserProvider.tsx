import { TUser } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";

type TUserProviderProps = {
  children: ReactNode;
};

type TUserProviderContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: TUser | null;
  setUser: (user: TUser | null) => void;
};

const initialState: TUserProviderContext = {
  isLoggedIn: false,
  setIsLoggedIn: () => null,
  user: null,
  setUser: () => null,
};

const UserProviderContext = createContext<TUserProviderContext>(initialState);

export const UserProvider = ({ children, ...props }: TUserProviderProps) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProviderContext.Provider
      {...props}
      value={{ user, setUser, isLoggedIn, setIsLoggedIn }}
    >
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
