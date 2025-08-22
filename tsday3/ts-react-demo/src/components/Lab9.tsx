import { useRef } from "react";

export default function Lab9() {
  const boxRef = useRef<HTMLDivElement>(null);

  const scrollBottom = () => {
    const el = boxRef.current;
    if (!el) return;
    el.scrollTop = el.scrollTop != 0 ? 0 : el.scrollHeight;
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          border: "1px solid #ccc",
          height: "100px",
          overflowY: "scroll",
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
      <button onClick={scrollBottom}>Scroll to Bottom</button>
    </div>
  );
}
