import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return (await res.json()) as T;
}

export default function Lab14() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchJson<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknow error");
      }
    })();

    // run();
  }, []);

  return (
    <>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} + {u.email}
          </li>
        ))}
      </ul>
      <div>{error}</div>
    </>
  );
}
