import { Todo } from '@/data/todos';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <div className="flex items-center p-4 bg-background hover:bg-accent/50 rounded-lg transition-colors">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => toggleTodo(todo.id)}
        className="mr-4"
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={cn(
          'flex-grow text-sm cursor-pointer',
          todo.completed && 'line-through text-muted-foreground'
        )}
      >
        {todo.text}
      </label>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={() => deleteTodo(todo.id)}
      >
        <X className="h-4 w-4 text-muted-foreground" />
      </Button>
    </div>
  );
}