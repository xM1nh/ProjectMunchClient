import { TPointOfInterest } from "@/types";
import PointOfInterestCard from "@/components/Map/PointOfInterest/PointOfInterestCard";

const MapSidebarComponent = ({
  pointOfInterests,
}: {
  pointOfInterests: TPointOfInterest[];
}) => {
  return (
    <div className="h-full w-full z-10 shadow-md shadow-slate-600 min-w-fit grid grid-cols-1 lg:grid-cols-2 auto-rows-min overflow-y-scroll">
      {pointOfInterests.map((poi, i) => {
        return (
          <PointOfInterestCard
            photos={poi.photos}
            name={poi.name}
            description={poi.description}
            review={poi.reviews}
            key={`nmb${i}`}
            className="m-1 rounded-sm overflow-hidden h-fit shadow-md shadow-slate-200"
          />
        );
      })}
    </div>
  );
};

export default MapSidebarComponent;
