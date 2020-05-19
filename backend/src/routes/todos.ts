import Router from 'express-promise-router';
import { Todo } from '../db';
import complete_todos from './complete_todos'

const router = Router();
router.use('/complete', complete_todos);

router.get('/', async (_, res) => {
  const { rows } = await Todo.findAll();
  res.send(rows);
});

router.get('/:id', async (req, res) => {
  const { rows } = await Todo.find(req.params.id);
  res.send(rows[0]);
});

router.post('/', async (req, res) => {
  const { rows } = await Todo.create(req.body.name);
  res.send(rows[0]);
});

router.put('/:id', async (req, res) => {
  const { rows } = await Todo.update(req.params.id, req.body.name);
  res.send(rows[0]);
});

router.delete('/:id', async (req, res) => {
  const { rows } = await Todo.destroy(req.params.id);
  res.send(rows[0]);
});

export default router;
