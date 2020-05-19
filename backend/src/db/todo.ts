import db from './db';

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

async function update(id: string, name: string) {
  const res = await db.query('UPDATE todos SET name = $1 WHERE id = $2', [
    name,
    id,
  ]);
  const { rows, rowCount } = await db.query(
    'SELECT * FROM todos WHERE id = $1',
    [id]
  );

  return { ...res, rows, rowCount };
}

async function complete(id: string) {
  const res = await db.query(
    'UPDATE todos SET complete = true WHERE id = $1',
    [id]
  );
  const { rows, rowCount } = await db.query(
    'SELECT * FROM todos WHERE id = $1',
    [id]
  );

  return { ...res, rows, rowCount };
}

async function uncomplete(id: string) {
  const res = await db.query(
    'UPDATE todos SET complete = false WHERE id = $1',
    [id]
  );
  const { rows, rowCount } = await db.query(
    'SELECT * FROM todos WHERE id = $1',
    [id]
  );

  return { ...res, rows, rowCount };
}

async function destroy(id: string) {
  const { rows, rowCount } = await db.query(
    'SELECT * FROM todos WHERE id = $1',
    [id]
  );
  const res = await db.query('DELETE FROM todos WHERE id = $1', [id]);

  return { ...res, rows, rowCount };
}

const Todo = {
  findAll,
  find,
  create,
  update,
  complete,
  uncomplete,
  destroy,
};

export { Todo };
