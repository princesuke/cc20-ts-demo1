import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Lab13() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async (): Promise<void> => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        // f (!res.ok) throw new Error("Failed to fetch posts");
        if (res.ok) {
          const data = (await res.json()) as Post[];
          setPosts(data);
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknow error");
      }
    };

    run();
  }, []);

  return (
    <>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
      <div>{error}</div>
    </>
  );
}
