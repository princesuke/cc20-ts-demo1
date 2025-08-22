import "./App.css";
// import Lab5 from "./components/Lab5";
// import Lab6 from "./components/Lab6";
import UiPanel from "./UiPanel";

function App() {
  return (
    <>
      <UiPanel />

      {/* <Lab6 /> */}
      {/* <Lab5 /> */}
      <style>{css}</style>
    </>
  );
}

export default App;

const css = `
  .error { color: #c0392b; margin: 0; }
  input { padding: 8px; border: 1px solid #ddd; border-radius: 6px; }
  label { font-weight: 600; }
  button { padding: 10px 14px; border: none; border-radius: 8px; background: #0d6efd; color: white; }
`;
