import MapControlComponent from "@/components/map/control/mapControlComponent";
import Map from "../components/map/map";
import Layout from "./layout";
import MapSidebarComponent from "@/components/map/mapSidebarComponent";
import IPointOfInterest from "@/interfaces/IPointOfInterest";
import PlaceholderImage from "@/assets/placeholder.jpg";
import PlaceholderImage2 from "@/assets/placeholder2.png";

const MOCK_DATA: IPointOfInterest[] = [
  {
    longitude: -117.9,
    latitude: 33.7,
    name: "Home",
    description: "home",
    reviews: 1,
    photos: [
      PlaceholderImage,
      PlaceholderImage2,
      PlaceholderImage,
      PlaceholderImage,
    ],
  },
  {
    longitude: -118.9,
    latitude: 33.7,
    name: "Home",
    description: "home",
    reviews: 1,
    photos: [
      PlaceholderImage2,
      PlaceholderImage,
      PlaceholderImage,
      PlaceholderImage,
    ],
  },
  {
    longitude: -119.9,
    latitude: 33.7,
    name: "Home",
    description: "home",
    reviews: 1,
    photos: [
      PlaceholderImage,
      PlaceholderImage,
      PlaceholderImage2,
      PlaceholderImage,
    ],
  },
  {
    longitude: -120.9,
    latitude: 33.7,
    name: "Home",
    description: "home",
    reviews: 1,
    photos: [
      PlaceholderImage,
      PlaceholderImage2,
      PlaceholderImage,
      PlaceholderImage,
    ],
  },
];

const MapPage = () => {
  return (
    <Layout>
      <div className="flex w-full h-full relative">
        <MapControlComponent />
        <div className="w-full sm:w-3/4 lg:w-4/5 h-full relative ">
          <Map pointOfInterests={MOCK_DATA} />
        </div>
        <div className="w-0 sm:w-1/4 lg:w-1/5">
          <MapSidebarComponent pointOfInterests={MOCK_DATA} />
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
