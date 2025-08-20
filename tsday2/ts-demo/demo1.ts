function logDate(d: Date | string) {
  if (d instanceof Date) {
    console.log(d.toISOString()); // TS รู้ว่า d เป็น Date
  } else {
    console.log(d.toUpperCase()); // TS รู้ว่า d เป็น string
  }
}

logDate(new Date());   // 👉 พิมพ์ ISO string
logDate("hello");      // 👉 HELLO


