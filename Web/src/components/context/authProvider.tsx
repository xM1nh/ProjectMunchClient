import { TUser } from "@/types";
import { ReactNode, createContext, useState } from "react";

type TAuthProviderProps = {
  children: ReactNode;
};

type TAuthProviderContext = {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
};

const initialState: TAuthProviderContext = {
  user: null,
  setUser: () => null,
};

const AuthProviderContext = createContext<TAuthProviderContext>(initialState);

export const AuthProvider = ({ children, ...props }: TAuthProviderProps) => {
  const [user, setUser] = useState<TUser | null>(null);

  return (
    <AuthProviderContext.Provider {...props} value={""}>
      {children}
    </AuthProviderContext.Provider>
  );
};
