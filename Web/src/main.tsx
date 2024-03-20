import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "@/components/context/themeProvider.tsx";
import {
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from "@tanstack/react-query";
import { API_BASE_URL } from "./config";
import { Toaster } from "@/components/ui/sonner";
import RouteSwitch from "./RouteSwitch.tsx";
import { BrowserRouter } from "react-router-dom";

const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) =>
  await fetch(`${API_BASE_URL}${queryKey[0]}`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RouteSwitch />
          <Toaster />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
