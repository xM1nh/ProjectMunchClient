import PlaceholderImage from "@/assets/placeholder.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const PointOfInterestBigCardImageContainer = ({
  photos,
}: {
  photos: string[];
}) => {
  return (
    <Dialog>
      <Carousel>
        <DialogTrigger asChild>
          <CarouselContent className="cursor-pointer">
            {photos.length === 0 ? (
              <CarouselItem>
                <img src={PlaceholderImage} />
              </CarouselItem>
            ) : (
              photos.map((photo, i) => {
                return (
                  <CarouselItem key={`cxvhkl${i}`} className="sm:basis-1/2">
                    <img src={photo} />
                  </CarouselItem>
                );
              })
            )}
          </CarouselContent>
        </DialogTrigger>
        <CarouselPrevious variant={"ghost"} className="h-full rounded-none" />
        <CarouselNext variant={"ghost"} className="h-full rounded-none" />
      </Carousel>
    </Dialog>
  );
};

export default PointOfInterestBigCardImageContainer;
