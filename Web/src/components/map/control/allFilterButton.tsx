import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconComponent from "@/components/iconComponent";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface IAllFilterButtonProps extends HTMLAttributes<HTMLDivElement> {}

const AllFilterButton = ({ className, ...props }: IAllFilterButtonProps) => {
  return (
    <div className={cn("", className)} {...props}>
      <Sheet>
        <SheetTrigger>
          <IconComponent name="tune" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AllFilterButton;
