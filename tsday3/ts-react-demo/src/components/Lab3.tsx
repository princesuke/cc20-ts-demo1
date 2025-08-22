import { useState } from "react";

interface ToggleSwitchProps {
  initialOn?: boolean;
}

export const ToggleSwitch = ({ initialOn = false }: ToggleSwitchProps) => {
  const [on, setOn] = useState<boolean>(initialOn);

  return (
    <button
      //   aria-pressed={on}
      onClick={() => setOn(!on)}
    >
      {on ? "ON" : "OFF"}
    </button>
  );
};
