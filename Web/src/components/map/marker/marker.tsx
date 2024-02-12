import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
        <Dialog>
          <HoverCard>
            <DialogTrigger asChild>
              <HoverCardTrigger>
                <IconComponent
                  name="location_on"
                  fill={1}
                  className="text-5xl text-red-900 hover:cursor-pointer hover:outline-1 hover:outline-white"
                />
              </HoverCardTrigger>
            </DialogTrigger>
            <HoverCardContent
              side="top"
              sideOffset={40}
              className="tooltip bg-white p-1"
            >
              <Popup />
            </HoverCardContent>
            <DialogContent>Test</DialogContent>
          </HoverCard>
        </Dialog>
      </Marker>
    </div>
  );
};

export default MapMarker;
