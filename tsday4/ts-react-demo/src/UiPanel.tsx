// import React from "react";
import { useUi } from "./stores/ui";

export default function UiPanel() {
  const theme = useUi((s) => s.theme);
  const user = useUi((s) => s.user);
  const toggleTheme = useUi((s) => s.toggleTheme);
  const login = useUi((s) => s.login);
  const logout = useUi((s) => s.logout);
  const reset = useUi((s) => s.reset);

  return (
    <div style={{ display: "grid", gap: 8, maxWidth: 360 }}>
      <h3>Zustand Lab (JS → TS + persist)</h3>

      <div>
        <b>Theme:</b> {theme}
      </div>
      <div>
        <b>User:</b> {user ? `${user.name} (#${user.id})` : "—"}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <button onClick={reset}>Reset</button>
      </div>

      <p style={{ opacity: 0.7 }}>
        Acceptance: Toggle theme → reload → theme ต้องอยู่เหมือนเดิม.
        <br />
        Login → reload → user ต้องกลับเป็น null (เพราะไม่ persist).
      </p>
    </div>
  );
}
