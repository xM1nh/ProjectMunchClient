import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface IIconComponentProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  fill?: number;
  weight?: number;
  grade?: number;
  opticalSize?: number;
}

const IconComponent = forwardRef<HTMLSpanElement, IIconComponentProps>(
  (
    {
      name = "",
      fill = 0,
      weight = 400,
      grade = 0,
      opticalSize = 24,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn("material-symbols-outlined", className)}
        {...props}
        style={{
          fontVariationSettings: `'FILL' ${fill},'wght' ${weight},'GRAD' ${grade},'opsz' ${opticalSize}`,
        }}
      >
        {name}
      </span>
    );
  }
);

export default IconComponent;
