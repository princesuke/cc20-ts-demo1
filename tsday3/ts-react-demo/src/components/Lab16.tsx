import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(page: number, limit: number): Promise<Post[]> {
  const res = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    { params: { _page: page, _limit: limit } }
  );
  return res.data;
}

export default function Lab16() {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getPosts(page, 5);
        setPosts(data);
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

  return (
    <div>
      <h3>Page (page {page})</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
      <div>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
