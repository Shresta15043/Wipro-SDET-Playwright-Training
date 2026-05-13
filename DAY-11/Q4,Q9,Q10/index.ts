// //Q4. Recursive Navigation Type
// Scenario: You are building a tree structure for a file system or a sidebar menu.
// Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.

type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[];
};

const root: FolderNode = {
  name: "project",
  files: ["index.ts"],
  subFolders: [
    {
      name: "src",
      files: ["app.ts", "utils.ts"]
    },
    {
      name: "docs",
      subFolders: [
        { name: "api", files: ["auth.md"] }
      ]
    }
  ]
};

console.log(JSON.stringify(root, null, 2));

// 9. Index Signatures for Dynamic Metadata ● 
// Scenario: You are receiving a "Metadata" object from a server where the keys are dynamic strings, 
// but the values must be either a string, number, or boolean. ● 
// Task: Create an interface UserMetadata that has a required 
// createdAt: Date but allows any other dynamic string keys as long as their values match the union type mentioned.

interface UserMetadata {
  createdAt: Date;
  [key: string]: string | number | boolean | Date;
}

// Valid examples
const meta1: UserMetadata = {
  createdAt: new Date(),
  role: "admin",
  age: 25,
  isActive: true
};

const meta2: UserMetadata = {
  createdAt: new Date(),
  country: "IN",
  score: 99.5
};
console.log(meta1);
console.log(meta2);
// Invalid - this will error because Date[] isn't allowed
// const meta3: UserMetadata = {
//   createdAt: new Date(),
//   tags: ["admin", "user"]
// };

//10. Mapped Types with Key Remapping
// ● Scenario: You have a data model and need to generate a type for an API response that "prefixes" all the keys.
// ● Task: 1. Define an interface Car { make: string; model: string; }. 
// 2. Create a mapped type ApiResponse<T> that iterates through keys of T and 
// renames them to be uppercase and prefixed with DATA_ (e.g., make becomes DATA_MAKE).

interface Car { 
  make: string; 
  model: string; 
}

type ApiResponse<T> = {
  [K in keyof T as `DATA_${Uppercase<K & string>}`]: T[K]
};

type CarApiResponse = ApiResponse<Car>;

// This resolves to:
const response: CarApiResponse = {
  DATA_MAKE: "Toyota",
  DATA_MODEL: "Camry"
};

// Type checking
// const bad: CarApiResponse = { make: "Toyota" }; // Error: missing DATA_MAKE
// const bad2: CarApiResponse = { DATA_MAKE: 123 }; // Error: number not assignable to string

console.log(response);