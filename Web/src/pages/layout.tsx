import Header from "@/components/header/header";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
