import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MapSidebarCard = () => {
  return (
    <div>
      <div>
        <Carousel opts={{ loop: true }}>
          <CarouselContent className="cursor-pointer">
            <CarouselItem className="bg-red-500">test</CarouselItem>
            <CarouselItem>test</CarouselItem>
            <CarouselItem>test</CarouselItem>
            <CarouselItem>test</CarouselItem>
            <CarouselItem>test</CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      <div></div>
    </div>
  );
};

export default MapSidebarCard;
