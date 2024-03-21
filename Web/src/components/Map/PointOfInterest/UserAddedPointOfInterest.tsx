import { Marker } from "react-map-gl";
import IconComponent from "@/components/IconComponent";
import { HTMLAttributes } from "react";
import { TCoordinates } from "@/types";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import useGetReverseGeocoding from "@/hooks/useGetReverseGeocoding";
import UserAddedPointOfInterestCard from "@/components/Map/PointOfInterest/UserAddedPointOfInterestPopup";

interface IPointOfInterestProps extends HTMLAttributes<HTMLDivElement> {
  coords: TCoordinates;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UserAddedPointOfInterest = ({
  coords,
  open,
  onOpenChange,
  ...props
}: IPointOfInterestProps) => {
  const { getReverseGeocodingStatus, getReverseGeocodingData } =
    useGetReverseGeocoding({
      longitude: coords.longitude,
      latitude: coords.latitude,
    });

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side={"bottom"}
        overlay={false}
        className="min-w-60 max-w-80 h-fit p-4 inset-x-0 mx-auto mb-4 sm:right-1/4 lg:right-[20%] rounded-md"
      >
        <div {...props}>
          <Marker
            longitude={coords.longitude}
            latitude={coords.latitude}
            anchor="top"
          >
            <IconComponent
              name="location_on"
              fill={1}
              className="text-5xl text-blue-900 hover:cursor-pointer hover:outline-1 hover:outline-white -translate-y-12"
            />
          </Marker>
          <UserAddedPointOfInterestCard
            status={getReverseGeocodingStatus}
            data={getReverseGeocodingData}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UserAddedPointOfInterest;
