import { ThemeProvider } from "@/components/providers/themeProvider";
import MapPage from "./pages/mapPage";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <MapPage />
      </ThemeProvider>
    </>
  );
}

export default App;
