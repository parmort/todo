export interface Todo {
  id: number;
  name: string;
  complete: boolean;
}

const todoSorters = {
  id: (a: Todo, b: Todo): number => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  },

  complete: (a: Todo, b: Todo): number => {
    if (a.complete === b.complete) return todoSorters.id(a, b);
    if (a.complete) return 1;
    if (!a.complete) return -1;
  },
};

export { todoSorters };
