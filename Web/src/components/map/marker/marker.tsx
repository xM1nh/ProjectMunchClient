import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Marker } from "react-map-gl";
import IconComponent from "@/components/iconComponent";
import Popup from "./markerPopup";
import ICoordinates from "./ICoordinates";
import { HTMLAttributes } from "react";

interface IMapMarker extends ICoordinates, HTMLAttributes<HTMLDivElement> {}

const MapMarker = ({ long, lat, ...props }: IMapMarker) => {
  return (
    <div {...props}>
      <Marker longitude={long} latitude={lat} anchor="top">
        <HoverCard>
          <HoverCardTrigger>
            <IconComponent
              name="location_on"
              fill={1}
              className="text-5xl text-red-900 hover:cursor-pointer hover:outline-1 hover:outline-white"
            />
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            sideOffset={40}
            className="tooltip bg-white p-1"
          >
            <Popup />
          </HoverCardContent>
        </HoverCard>
      </Marker>
    </div>
  );
};

export default MapMarker;
