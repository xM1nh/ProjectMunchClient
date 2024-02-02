interface IIconComponentProps {
  name: string;
  fill?: number;
  weight?: number;
  grade?: number;
  opticalSize?: number;
  tw?: string;
}

const IconComponent = ({
  name = "",
  fill = 0,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  tw = "",
}: IIconComponentProps) => {
  return (
    <div>
      <span
        className={`material-symbols-outlined ${tw}`}
        style={{
          fontVariationSettings: `'FILL' ${fill},'wght' ${weight},'GRAD' ${grade},'opsz' ${opticalSize}`,
        }}
      >
        {name}
      </span>
    </div>
  );
};

export default IconComponent;
