import { ReactNode, createContext, useContext, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Auth from "@/components/Auth/Auth";

type TAuthModalProviderProps = {
  children: ReactNode;
};

type TAuthModalProviderContext = {
  isOpenAuthModal: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
};

const initialState: TAuthModalProviderContext = {
  isOpenAuthModal: false,
  openAuthModal: () => null,
  closeAuthModal: () => null,
};

const AuthModalProviderContext =
  createContext<TAuthModalProviderContext>(initialState);

export const AuthModalProvider = ({
  children,
  ...props
}: TAuthModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openAuthModal = () => {
    if (isOpen) return;
    setIsOpen(true);
  };

  const closeAuthModal = () => {
    if (!isOpen) return;
    setIsOpen(false);
  };

  return (
    <AuthModalProviderContext.Provider
      {...props}
      value={{ isOpenAuthModal: isOpen, openAuthModal, closeAuthModal }}
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="h-full sm:h-fit">
          <Auth />
        </DialogContent>
      </Dialog>
      {children}
    </AuthModalProviderContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalProviderContext);

  if (context === undefined)
    throw new Error("useAuthModal must be used within a AuthModalProvider");

  return context;
};
