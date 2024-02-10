import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const MarkerPopup = () => {
  return (
    <Dialog>
      <Carousel>
        <DialogTrigger asChild>
          <CarouselContent className="cursor-pointer">
            <CarouselItem className="bg-red-500">test</CarouselItem>
            <CarouselItem>test</CarouselItem>
            <CarouselItem>test</CarouselItem>
            <CarouselItem>test</CarouselItem>
            <CarouselItem>test</CarouselItem>
          </CarouselContent>
        </DialogTrigger>
        <CarouselPrevious variant={"ghost"} className="h-full rounded-none" />
        <CarouselNext variant={"ghost"} className="h-full rounded-none" />
      </Carousel>

      <DialogContent>Test</DialogContent>
    </Dialog>
  );
};

export default MarkerPopup;
