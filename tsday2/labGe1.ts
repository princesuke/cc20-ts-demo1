function doubleNumber<T extends number>(value: T): T {
  // return 2 เท่า
  return (value * 2) as T;
}

// ตัวอย่างทดสอบ
const a = doubleNumber(5);   // ✅ 10
// const b = doubleNumber("hi"); // ❌ error เพราะไม่ใช่ number
