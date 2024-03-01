import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import AllFilter from "@/components/Map/Control/AllFilter";
import PriceFilter from "@/components/Map/Control/PriceFilter";

const FilterBar = () => {
  return (
    <div className="z-10 hidden flex-row items-center gap-4 sm:flex sm:w-1/3 sm:mx-4">
      <AllFilter className="btn bg-white shadow-md" />
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="basis-auto">
            <PriceFilter />
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <PriceFilter />
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <PriceFilter />
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <PriceFilter />
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <PriceFilter />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="rounded-full" />
        <CarouselPrevious className="rounded-full" />
      </Carousel>
    </div>
  );
};

export default FilterBar;
