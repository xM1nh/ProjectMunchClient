import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Marker } from "react-map-gl";
import IconComponent from "@/components/iconComponent";
import PointOfInterestHoverCard from "./pointOfInterestHoverCard";
import { HTMLAttributes } from "react";
import IPointOfInterest from "@/interfaces/IPointOfInterest";

interface IPointOfInterestProps extends HTMLAttributes<HTMLDivElement> {
  data: IPointOfInterest;
}

const PointOfInterest = ({ data, ...props }: IPointOfInterestProps) => {
  return (
    <div {...props}>
      <Marker longitude={data.longtitude} latitude={data.latitude} anchor="top">
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
              <PointOfInterestHoverCard />
            </HoverCardContent>
            <DialogContent>Test</DialogContent>
          </HoverCard>
        </Dialog>
      </Marker>
    </div>
  );
};

export default PointOfInterest;
