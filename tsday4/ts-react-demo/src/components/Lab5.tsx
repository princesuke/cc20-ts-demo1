import { useState, useEffect, useMemo, useCallback } from "react";

interface User {
  id: number;
  name: string;
}

const fetchUser = async (): Promise<User> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000)
  );
};

export default function Lab5() {
  const [user, setUser] = useState<User | null>(null);
  const [count, setCount] = useState<number>(0);

  const welcomeMessage = useMemo<string>(() => {
    return user ? `Welcome, ${user.name}` : `Loading...`;
  }, [user]);

  const handleClick = useCallback((): void => {
    if (user) {
      console.log(`Click by ${user.name}`);
    } else {
      console.log(`Click but no user yet`);
    }
  }, [user]);

  const doubleCount = useMemo<number>(() => {
    return count * 2;
  }, [count]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      const data = await fetchUser();
      if (isMounted) {
        setUser(data);
      }
    };

    load().catch(console.error);

    return () => {
      isMounted = false;
    };
  });

  const formatUser = useCallback((user: User): string => {
    return `ID: ${user.id}, Name: ${user.name}`;
  }, []);

  return (
    <div>
      <h3>{welcomeMessage}</h3>
      <button onClick={handleClick}>Click me</button>

      <h3>Counter</h3>
      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <h3>User Info</h3>
      {user ? <p>{formatUser(user)}</p> : <p>No user loaded yet</p>}
    </div>
  );
}
