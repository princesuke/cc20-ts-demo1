import { useState, type ChangeEvent } from "react";

type Theme = "light" | "dark" | "system";

export default function Lab8() {
  const [theme, setTheme] = useState<Theme>("system");
  const [agree, setAgree] = useState<boolean>(false);

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Theme;
    setTheme(value);
  };
  // TODO: setTheme ให้เป็น "light" | "dark" | "system" จาก e.target.value

  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };
  // TODO: setAgree จาก e.target.checked

  return (
    <div>
      <label>
        Theme:{" "}
        <select value={theme} onChange={onSelect}>
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>

      <label style={{ marginLeft: 12 }}>
        <input type="checkbox" checked={agree} onChange={onCheck} /> I agree
      </label>

      <p>
        Result: theme={theme}, agree={String(agree)}
      </p>
    </div>
  );
}
