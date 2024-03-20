import { Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import App from "./App";

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
};

export default RouteSwitch;
