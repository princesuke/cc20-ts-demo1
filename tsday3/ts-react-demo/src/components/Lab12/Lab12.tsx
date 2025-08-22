import { useRef } from "react";
import { CustomInput } from "./CustomInput";

export default function Lab12() {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const focus = () => {
    textRef.current?.focus();
  };
  // TODO: focus textarea

  return (
    <div>
      {/* <textarea ref={textRef}>TEXT</textarea> */}
      <CustomInput ref={textRef} placeholder="Type here..." />
      <button onClick={focus}>Focus</button>
    </div>
  );
}
