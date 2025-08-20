interface Book {
    title: string;
    year: number;
}

type BookKeys = keyof Book


function printBookProperty(book: Book, key: BookKeys) {
    console.log(`${book[key]}`);
}

const myBook: Book = { title: "TypeScript Basics", year: 2025 };


// ตัวอย่างการเรียกใช้ที่คาดหวัง
printBookProperty(myBook, "title"); // 👉 "TypeScript Basics"
printBookProperty(myBook, "year");  // 👉 2025
printBookProperty(myBook, "author"); // ❌ Error (ไม่มี property นี้)
