import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface IIconComponentProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  fill?: number;
  weight?: number;
  grade?: number;
  opticalSize?: number;
}

const IconComponent = ({
  name = "",
  fill = 0,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  className,
  ...props
}: IIconComponentProps) => {
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      {...props}
      style={{
        fontVariationSettings: `'FILL' ${fill},'wght' ${weight},'GRAD' ${grade},'opsz' ${opticalSize}`,
      }}
    >
      {name}
    </span>
  );
};

export default IconComponent;
