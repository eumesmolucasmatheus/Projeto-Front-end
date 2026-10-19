type FilterOption = { text: string; value?: string };

type FilterGroupProps = {
  title: string;
  inputType: "checkbox" | "radio";
  options: FilterOption[];
  selected: string[];
  onChange: (value: string, checked: boolean) => void;
};

export function FilterGroup({ title, inputType, options, selected, onChange }: FilterGroupProps) {
  const name = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <fieldset className="mb-5">
      <legend className="mb-3 text-sm font-bold text-dark-gray-2">{title}</legend>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const value = opt.value ?? opt.text;
          return (
            <label key={value} className="flex cursor-pointer items-center gap-3 text-sm text-dark-gray-2">
              <input
                type={inputType}
                name={name}
                value={value}
                checked={selected.includes(value)}
                onChange={(e) => onChange(value, e.target.checked)}
                className="size-5 accent-primary"
              />
              {opt.text}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
