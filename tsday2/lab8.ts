interface User {
  id: number;
  username: string;
  active: boolean;
}

const users: User[] = [
  { id: 1, username: "Alice", active: true },
  { id: 2, username: "Bob", active: false },
];

function getValues<T>(items: T[], key: keyof T): T[keyof T][] {
    return items.map((item)=>item[key]);
}

const ids = getValues(users, "id");
const names = getValues(users, "username");
const flags = getValues(users, "active");

console.log(ids);
console.log(names);
console.log(flags);