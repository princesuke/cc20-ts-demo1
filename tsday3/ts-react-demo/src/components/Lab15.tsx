import { useEffect, useState } from "react";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; data: Comment[] }
  | { kind: "error"; message: string };

export default function Lab15() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    (async () => {
      setStatus({ kind: "loading" });
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        // f (!res.ok) throw new Error("Failed to fetch posts");
        if (res.ok) {
          const data = (await res.json()) as Comment[];
          setStatus({ kind: "success", data });
        }
      } catch (e) {
        setStatus({
          kind: "error",
          message: e instanceof Error ? e.message : "Unknow error",
        });
      }
    })();

    // run();
  }, []);

  if (status.kind === "loading" || status.kind === "idle")
    return <p>Loading...</p>;

  if (status.kind === "error")
    return <p style={{ color: "red" }}>{status.message}</p>;

  return (
    <>
      <ul>
        {status.data.map((c) => (
          <li key={c.id}>
            {c.name} + {c.email}
          </li>
        ))}
      </ul>
    </>
  );
}
