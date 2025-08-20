function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice", active: true };

// ตัวอย่างทดสอบที่คาดหวัง
const id    = getProperty(user, "id");     // type: number
const name1  = getProperty(user, "name");   // type: string
const flag  = getProperty(user, "active"); // type: boolean
// getProperty(user, "email");             // ❌ ควร error
