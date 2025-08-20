interface Employee {
  id: number;
  name: string;
  salary: number;
  department: string;
}

type PublicEmployee = Omit<Employee, "salary">;

const emp: PublicEmployee = {
    id: 1,
    name: "Alice",
    department: "Design"
}