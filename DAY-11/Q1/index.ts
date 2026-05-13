// 1. The Generic API Wrapper
// Scenario: You need a reusable function to fetch data that automatically types the response.
// Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.

async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Network request Failed: ' + response.statusText)
    }
    const data: T = await response.json();
    return data;
}

interface Album {
    userId: number,
    id: number,
    title: string
}

async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData<Album>(url);

    console.log(`Album ID: ${album.id}`)
    console.log(`Album Title: ${album.title}`)
}

demo();

// // 2. Record Mapping for Configuration
// Scenario: You are managing feature flags or permissions for specific user roles.
// Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a variable PermissionMap where every Role must be mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.

enum Role {
  Admin = "Admin",
  Editor = "Editor",
  Guest = "Guest"
}

const PermissionMap: Record<Role, boolean> = {
  [Role.Admin]: true,
  [Role.Editor]: true,
  [Role.Guest]: false
};

console.log(PermissionMap);
console.log(`Can Editor edit? ${PermissionMap[Role.Editor]}`);

//  question 3 Exhaustiveness Checking (The never Type)
// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.

type TaskStatus = 'Open' | 'InProgress' | 'Closed' |'Archived';

function handleTask(status: TaskStatus): string {
  switch (status) {
    case 'Open':
      return 'Task is open';
    case 'InProgress':
      return 'Task is in progress';
    case 'Closed':
      return 'Task is closed';
    case 'Archived':
            return "Task is Archived";  
    default:
      // If you miss a case, status here is type 'never'
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
  }
}

console.log(handleTask('Open'));
console.log(handleTask('Closed'));