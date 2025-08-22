import { useState, type MouseEvent } from "react";

export default function Lab7() {
  const [count, setCount] = useState<number>(0);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const step = Number(e.currentTarget.dataset.step ?? 1);
    setCount((c) => c + step);
  };

  return (
    <div>
      <button data-step="-1" onClick={handleClick}>
        -1
      </button>
      <span style={{ margin: "0 8px" }}>{count}</span>
      <button data-step="1" onClick={handleClick}>
        +1
      </button>
    </div>
  );
}
