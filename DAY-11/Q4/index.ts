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