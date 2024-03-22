import IconComponent from "@/components/IconComponent";
import {
  DialogContent,
  DialogClose,
  DialogHeader,
} from "@/components/ui/dialog";
import { TPointOfInterest } from "@/types";
import { HTMLAttributes } from "react";
import PointOfInterestBigCardImageContainer from "./PointOfInterestBigCardImageContainer";

interface IPointOfInterestBigCardProps extends HTMLAttributes<HTMLDivElement> {
  data: TPointOfInterest;
}

const PointOfInterestBigCard = ({ data }: IPointOfInterestBigCardProps) => {
  return (
    <DialogContent className="h-full block">
      <DialogHeader className="flex flex-row justify-between items-center h-fit sticky mb-4">
        <DialogClose asChild>
          <button className="btn btn-ghost">
            <IconComponent name="arrow_back_ios" />
            <span className="hidden">Back to search</span>
          </button>
        </DialogClose>
        <div className="text-primary text-xl font-bold hidden">
          Project Munch
        </div>
        <div className="flex justify-center items-center gap-4 px-4">
          <IconComponent name="bookmark" />
          <IconComponent name="share" />
        </div>
      </DialogHeader>
      <PointOfInterestBigCardImageContainer photos={data.photos} />
      <div className="flex flex-col items-start p-2 cursor-pointer">
        <p className="font-bold text-3xl">{data.name}</p>
        <p>{data.reviews}</p>
        <p>{data.description}</p>
      </div>
    </DialogContent>
  );
};

export default PointOfInterestBigCard;
