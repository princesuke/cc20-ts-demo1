let users: {name: string; age: number}[] = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 22}
];

// for (const u of users) {
//     console.log(`${u.name} (${u.age})`)
// }

users.push({name: "23", age: 30});

for (const u of users) {
    console.log(`${u.name} (${u.age})`)
}