import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import PriceFilterComponent from "./priceFilterComponent";
import AllFilterButton from "./allFilterButton";

const MapControlFilterComponent = () => {
  return (
    <div className="z-10 hidden flex-row items-center gap-4 sm:flex sm:w-1/3 sm:mx-4">
      <AllFilterButton className="btn bg-white shadow-md" />
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="basis-auto">
            <PriceFilterComponent />
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <PriceFilterComponent />
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <PriceFilterComponent />
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <PriceFilterComponent />
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <PriceFilterComponent />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="rounded-full" />
        <CarouselPrevious className="rounded-full" />
      </Carousel>
    </div>
  );
};

export default MapControlFilterComponent;
