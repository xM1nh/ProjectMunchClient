import Header from "@/components/header/header";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="h-[calc(100%-4rem)]">{children}</main>
    </div>
  );
};

export default Layout;
