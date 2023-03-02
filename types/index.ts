export type ID = string;

export interface TodosColumn {
  id: ID;
  title: string;
  todos: Todo[];
}

export interface Todo {
  id: ID;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
}
