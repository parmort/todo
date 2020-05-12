import db from './db';

type Values =
  | {
      name: string;
      completed: boolean;
    }
  | {
      name: string;
    };

async function findAll() {
  return await db.query('SELECT * FROM todos');
}

async function find(id: string) {
  return await db.query('SELECT * FROM todos WHERE id = $1', [id]);
}

async function create(name: string) {
  const time = Date.now();
  await db.query('INSERT INTO todos(name, timeCreated) VALUES($1, $2)', [
    name,
    time,
  ]);
  return await db.query('SELECT * FROM todos WHERE timeCreated = $1', [time]);
}

async function update(id: string, values: Values) {}

async function destroy(id: string) {
  const row = await db.query('SELECT * FROM todos WHERE id = $1', [id]);
  await db.query('DELETE FROM todos WHERE id = $1', [id]);

  return row;
}

const Todo = {
  findAll,
  find,
  create,
  update,
  destroy,
};

export { Todo };
