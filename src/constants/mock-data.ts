import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    department: "Computer Science",
    description:
      "Fundamentals of programming using modern languages, focusing on logic, problem-solving, and basic algorithms.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Data Structures",
    department: "Computer Science",
    description:
      "Study of arrays, linked lists, stacks, queues, trees, and graphs with emphasis on performance and memory usage.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG301",
    name: "Database Management Systems",
    department: "Computer Science",
    description:
      "Concepts of relational databases, SQL, normalization, indexing, and transaction management.",
    createdAt: new Date().toISOString(),
  },
];
