const profile: {
    name: string;
    age: number;
    address: {
        line1: string;
        line2: string | undefined;
        city: string;
        zip: string
    };
    tags: string[]
} = {
  name: "John",
  age: 25,
  address: {
    line1: "123 Main Rd",
    line2: undefined,
    city: "Bangkok",
    zip: "10200"
  },
  tags: ["newbie", "ts"]
};

