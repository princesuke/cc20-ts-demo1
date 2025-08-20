interface Person {
  name: string;
  age: number;
}

type NameType = Person["name"]; // 👉 string
type AgeType = Person["age"];  // 👉 number

const name: NameType = "john";
const age: AgeType = 12;


interface Book {
  title: string;
  year: number;
  available: boolean;
}

type BookInfo = Book["title" | "year"];
// 👉 string | number

const book: BookInfo = "hello";
const bookNo: BookInfo = 13;

type AllBookTypes = Book[keyof Book];
// 👉 string | number | boolean



export{}

