import * as React from 'react';
import { initialTodos, Todo } from '@/data/todos';
import { AddTodoForm } from '@/components/AddTodoForm';
import { TodoList } from '@/components/TodoList';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Index = () => {
  const [todos, setTodos] = React.useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-2xl shadow-gray-500/10">
        <CardHeader>
          <CardTitle className="text-2xl">My Tasks</CardTitle>
          <CardDescription>
            You have {pendingCount} pending and {completedCount} completed tasks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <AddTodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;