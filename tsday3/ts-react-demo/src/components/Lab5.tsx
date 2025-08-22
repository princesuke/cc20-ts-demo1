import { useState, type ChangeEvent } from "react";

export default function Lab5() {
  const [name, setName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleChange} placeholder="Your name" />
      <p>Hello, {name || "..."}</p>
    </div>
  );
}
