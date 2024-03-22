import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "@/components/Providers/ThemeProvider.tsx";
import { Toaster } from "@/components/ui/sonner";
import RouteSwitch from "@/RouteSwitch.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "@/components/Providers/UserProvider.tsx";
import { AuthModalProvider } from "@/components/Providers/AuthModalProvider.tsx";
import QueryClientProvider from "@/components/Providers/QueryClientProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <QueryClientProvider>
        <UserProvider>
          <AuthModalProvider>
            <BrowserRouter>
              <RouteSwitch />
              <Toaster />
            </BrowserRouter>
          </AuthModalProvider>
        </UserProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
