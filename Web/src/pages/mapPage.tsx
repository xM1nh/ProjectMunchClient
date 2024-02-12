import MapControlComponent from "@/components/map/control/mapControlComponent";
import Map from "../components/map/map";
import Layout from "./layout";
import MapSidebarComponent from "@/components/map/mapSidebarComponent";

const MapPage = () => {
  return (
    <Layout>
      <div className="flex w-full h-full">
        <div className="w-9/12 h-full relative ">
          <MapControlComponent />
          <Map />
        </div>
        <MapSidebarComponent />
      </div>
    </Layout>
  );
};

export default MapPage;
