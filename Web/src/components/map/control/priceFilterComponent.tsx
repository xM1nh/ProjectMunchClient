import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const PriceFilterComponent = () => {
  const [min, setMin] = useState<number | null>(null);
  const [max, setMax] = useState<number | null>(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="btn bg-white shadow-md">
        Price
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4">
        <div className="flex items-center gap-2">
          <Input
            className="w-28 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="Min"
            type="number"
            onChange={(e) => {
              const value = !Number.isNaN(e.target.valueAsNumber)
                ? e.target.valueAsNumber
                : null;
              setMin(value);
            }}
            value={min ?? ""}
          />
          <Separator className="w-4" />
          <Input
            className=" w-28 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="Max"
            type="number"
            onChange={(e) => {
              const value = !Number.isNaN(e.target.valueAsNumber)
                ? e.target.valueAsNumber
                : null;
              setMax(value);
            }}
            value={max ?? ""}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PriceFilterComponent;
