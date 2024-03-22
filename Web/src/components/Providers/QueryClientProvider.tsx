import { API_BASE_URL } from "@/config";
import {
  QueryClient,
  QueryClientProvider as ClientProvider,
  QueryFunction,
} from "@tanstack/react-query";
import { ReactNode } from "react";

type TQueryClientProviderProps = {
  children: ReactNode;
};

const defaultQueryFn: QueryFunction = async ({ queryKey }) =>
  await fetch(`${API_BASE_URL}${queryKey[0]}`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => data);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

const QueryClientProvider = ({ children }: TQueryClientProviderProps) => {
  return <ClientProvider client={queryClient}>{children}</ClientProvider>;
};

export default QueryClientProvider;
