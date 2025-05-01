import { FunctionComponent } from "preact";
import "./LeaderboardToggle.css";
import { useState } from "preact/hooks";

type ToggleValue = string;

interface ToggleOption {
  label: string;
  value: ToggleValue;
}

interface Props {
  options: [ToggleOption, ToggleOption];
  initialValue?: ToggleValue;
  onChange?: (value: ToggleValue) => void;
}

export const ToggleSwitch: FunctionComponent<Props> = ({
  options,
  initialValue,
  onChange,
}) => {
  const [selected, setSelected] = useState<ToggleValue>(
    initialValue || options[0].value
  );

  const handleSelect = (value: ToggleValue) => {
    if (value !== selected) {
      setSelected(value);
      onChange?.(value);
    }
  };

  return (
    <div
      className="toggle-container"
      data-state={selected === options[0].value ? "left" : "right"}
    >
      <div className="slider" />
      {options.map((option) => (
        <button
          key={option.value}
          className={`toggle-option ${
            selected === option.value ? "active" : ""
          }`}
          onClick={() => handleSelect(option.value)}
          aria-pressed={selected === option.value}
          aria-label={`Select ${option.label}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
