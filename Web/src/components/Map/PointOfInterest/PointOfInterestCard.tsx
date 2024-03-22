import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { HTMLAttributes, useState } from "react";
import PointOfInterestBigCard from "@/components/Map/PointOfInterest/PointOfInterestBigCard";
import { TPointOfInterest } from "@/types";
import PlaceholderImage from "@/assets/placeholder.jpg";

interface IPointOfInterestHoverCardProps
  extends HTMLAttributes<HTMLDivElement> {
  data: TPointOfInterest;
}

const CarouselImage = ({ source }: { source: string }) => {
  return (
    <CarouselItem>
      <img src={source} className="w-full object-cover" />
    </CarouselItem>
  );
};

const PointOfInterestCard = ({
  data,
  className,
  ...props
}: IPointOfInterestHoverCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("", className)} {...props}>
      <Dialog open={open} onOpenChange={setOpen}>
        <Carousel opts={{ loop: true }}>
          <DialogTrigger asChild>
            <CarouselContent className="cursor-pointer">
              {data.photos.length === 0 ? (
                <CarouselImage source={PlaceholderImage} />
              ) : (
                data.photos.map((photo, i) => {
                  return <CarouselImage source={photo} key={`asdf${i}`} />;
                })
              )}
            </CarouselContent>
          </DialogTrigger>
          <CarouselPrevious variant={"ghost"} className="h-full rounded-none" />
          <CarouselNext variant={"ghost"} className="h-full rounded-none" />
        </Carousel>
        <div
          className="flex flex-col items-start p-2 cursor-pointer relative"
          onClick={() => setOpen(true)}
        >
          <p className="font-bold text-lg">{data.name}</p>
          <p>{data.reviews}</p>
          <p>{data.description}</p>
        </div>
        <PointOfInterestBigCard data={data} />
      </Dialog>
    </div>
  );
};

export default PointOfInterestCard;
