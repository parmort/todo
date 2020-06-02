export interface Todo {
  id: number;
  name: string;
  complete: boolean;
}

export class TodoSorters {
  static byId (a: Todo, b: Todo): number {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  }

  static byComplete (a: Todo, b: Todo): number {
    if (a.complete === b.complete) return TodoSorters.byId(a, b);
    if (a.complete) return 1;
    if (!a.complete) return -1;
  }
}
