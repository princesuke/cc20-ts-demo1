import "./App.css";
import { useEffect, useState } from "react";
import type { Todo } from "./types/todo";
import { Api } from "./api/client";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    Api.list().then(setTodos).catch(console.error);
  }, []);

  const add = async () => {
    if (!title.trim()) return;

    const todoData = await Api.create({ title });
    setTodos((s) => [...s, todoData]);
    setTitle("");
  };

  const toggle = async (id: number) => {
    const t = todos.find((x) => x.id === id);
    const u = await Api.update(id, { done: !t?.done });
    setTodos((s) => s.map((item) => (item.id === id ? u : item)));
  };

  const remove = async (id: number) => {
    await Api.remove(id);
    setTodos((s) => s.filter((x) => x.id !== id));
  };

  return (
    <div style={{ width: 460 }}>
      <h3>Todo Workshop</h3>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: 300 }}
          placeholder="What to do?"
        />

        <button onClick={add}>Add</button>
      </div>
      <ul style={{ padding: 0 }}>
        {todos.map((t) => (
          <li
            key={t.id}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <label>
              <input
                checked={t.done}
                onChange={() => toggle(t.id)}
                type="checkbox"
              />
              {t.title}
            </label>
            <button onClick={() => remove(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
