interface User {
    id: number;
    username: string;
    email?: string;
}

const user1: User = {
    id: 1,
    username: "alice",
    email: "alice@gmail.com"
}

const user2: User = {
    id: 2,
    username: "bob"
}

console.log(user1, user2);