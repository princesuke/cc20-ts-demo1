import { useState } from "react";

type NumericStepperProps = {
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
};

export const NumericStepper = ({
  min,
  max,
  step = 1,
  initial = 0,
}: NumericStepperProps) => {
  const [value, setValue] = useState<number>(initial);

  const dec = () => {
    const newVal = value - step;
    if (min !== undefined && newVal < min) return;
    setValue(newVal);
  };
  const inc = () => {
    const newVal = value + step;
    if (max !== undefined && newVal > max) return;
    setValue(newVal);
  };

  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{value}</span>
      <button onClick={inc}>+</button>
    </div>
  );
};
