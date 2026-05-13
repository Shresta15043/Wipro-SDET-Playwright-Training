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