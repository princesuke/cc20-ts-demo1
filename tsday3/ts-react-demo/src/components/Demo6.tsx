interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

async function loadData() {
  try {
    const user = await fetchUser(1);
    console.log(user.name);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error:", err.message);
    }
  }
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
}

// Usage
interface Post {
  id: number;
  title: string;
}
const posts = await fetchJson<Post[]>("/api/posts");

export {};
