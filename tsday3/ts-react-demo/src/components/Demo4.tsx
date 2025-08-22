import { type ChangeEvent, type MouseEvent, type FormEvent } from "react";

function Example() {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Value:", e.target.value); // SyntheticEvent<...>
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", e.currentTarget);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // stop reload
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}
