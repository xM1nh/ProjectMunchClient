import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Marker } from "react-map-gl";
import IconComponent from "@/components/IconComponent";
import { HTMLAttributes } from "react";
import { TPointOfInterest } from "@/types";
import PointOfInterestCard from "@/components/Map/PointOfInterest/PointOfInterestCard";
import PointOfInterestBigCard from "@/components/Map/PointOfInterest/PointOfInterestBigCard";

interface IPointOfInterestProps extends HTMLAttributes<HTMLDivElement> {
  data: TPointOfInterest;
}

const PointOfInterest = ({ data, ...props }: IPointOfInterestProps) => {
  return (
    <div {...props}>
      <Marker longitude={data.longitude} latitude={data.latitude} anchor="top">
        <Dialog>
          <HoverCard>
            <DialogTrigger asChild>
              <HoverCardTrigger>
                <IconComponent
                  name="location_on"
                  fill={1}
                  className="text-5xl text-red-900 hover:cursor-pointer hover:outline-1 hover:outline-white -translate-y-12"
                />
              </HoverCardTrigger>
            </DialogTrigger>
            <HoverCardContent
              side="top"
              sideOffset={40}
              className="tooltip bg-white p-1"
            >
              <PointOfInterestCard data={data} />
            </HoverCardContent>
            <PointOfInterestBigCard data={data} />
          </HoverCard>
        </Dialog>
      </Marker>
    </div>
  );
};

export default PointOfInterest;
