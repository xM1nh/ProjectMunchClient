import {
  QueryClient,
  QueryClientProvider as ClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

type TQueryClientProviderProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: TQueryClientProviderProps) => {
  return <ClientProvider client={queryClient}>{children}</ClientProvider>;
};

export default QueryClientProvider;
