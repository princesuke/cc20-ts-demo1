import { useState, type FormEvent, type ChangeEvent } from "react";

export default function Lab6() {
  const [email, setEmail] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    alert(`Submitted: ${email}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" value={email} onChange={onChange} />
      <button type="submit">Send</button>
    </form>
  );
}
