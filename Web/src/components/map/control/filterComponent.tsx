import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconComponent from "@/components/iconComponent";
import PriceFilterComponent from "./priceFilterComponent";

const MapControlFilterComponent = () => {
  return (
    <div className="z-10 flex flex-row items-center gap-4 min-w-64 max-w-[50%]">
      <Sheet>
        <SheetTrigger className="btn bg-white shadow-md">
          <IconComponent name="tune" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
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
