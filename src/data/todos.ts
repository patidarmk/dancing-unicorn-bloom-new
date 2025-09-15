export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const initialTodos: Todo[] = [
  {
    id: 1,
    text: "Design the new user interface for the mobile app",
    completed: false,
  },
  {
    id: 2,
    text: "Develop the API endpoints for user authentication",
    completed: false,
  },
  {
    id: 3,
    text: "Review and merge the latest pull requests on GitHub",
    completed: true,
  },
  {
    id: 4,
    text: "Prepare the presentation for the quarterly review meeting",
    completed: false,
  },
  {
    id: 5,
    text: "Write end-to-end tests for the new checkout feature",
    completed: false,
  },
  {
    id: 6,
    text: "Deploy the latest build to the staging environment",
    completed: true,
  },
  {
    id: 7,
    text: "Fix the critical bug reported in the production logs",
    completed: false,
  },
];