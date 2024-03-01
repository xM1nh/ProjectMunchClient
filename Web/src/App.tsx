import { ThemeProvider } from "@/components/providers/themeProvider";
import MapPage from "./pages/MapPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <QueryClientProvider client={queryClient}>
          <MapPage />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
