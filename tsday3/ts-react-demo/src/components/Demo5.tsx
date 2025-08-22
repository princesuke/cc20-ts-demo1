import { forwardRef, useRef } from "react";

const CustomInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input {...props} ref={ref} />;
});

function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </div>
  );
}

export default MyComponent;
