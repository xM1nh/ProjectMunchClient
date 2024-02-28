import { Marker } from "react-map-gl";
import IconComponent from "@/components/iconComponent";
import { HTMLAttributes } from "react";
import { TPointOfInterest } from "@/types";
import PointOfInterestSmallCard from "./pointOfInterestSmallCard";

interface IPointOfInterestProps extends HTMLAttributes<HTMLDivElement> {
  data: TPointOfInterest;
}

const PointOfInterest = ({ data, ...props }: IPointOfInterestProps) => {
  return (
    <div {...props}>
      <Marker longitude={data.longitude} latitude={data.latitude} anchor="top">
        <IconComponent
          name="location_on"
          fill={1}
          className="text-5xl text-red-900 hover:cursor-pointer hover:outline-1 hover:outline-white"
        />
      </Marker>
    </div>
  );
};

export default PointOfInterest;
