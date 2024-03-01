import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface IPointOfInterestHoverCardProps
  extends HTMLAttributes<HTMLDivElement> {
  photos?: string[];
  name: string;
  description: string;
  review?: number;
}

const CarouselImage = ({ source }: { source: string }) => {
  return (
    <CarouselItem>
      <img src={source} className="w-full md:h-40 lg:h-60 object-cover" />
    </CarouselItem>
  );
};

const PointOfInterestCard = ({
  photos,
  name,
  description,
  review,
  className,
  ...props
}: IPointOfInterestHoverCardProps) => {
  return (
    <div className={cn("", className)} {...props}>
      <Dialog>
        <Carousel opts={{ loop: true }}>
          <DialogTrigger asChild>
            <CarouselContent className="cursor-pointer">
              {photos?.map((photo, i) => {
                return <CarouselImage source={photo} key={`asdf${i}`} />;
              })}
            </CarouselContent>
          </DialogTrigger>
          <CarouselPrevious variant={"ghost"} className="h-full rounded-none" />
          <CarouselNext variant={"ghost"} className="h-full rounded-none" />
        </Carousel>
        <DialogTrigger asChild>
          <div className="flex flex-col items-start p-2 cursor-pointer">
            <p className="font-bold text-lg">{name}</p>
            <p>{review}</p>
            <p>{description}</p>
          </div>
        </DialogTrigger>
        <DialogContent>Test</DialogContent>
      </Dialog>
    </div>
  );
};

export default PointOfInterestCard;
