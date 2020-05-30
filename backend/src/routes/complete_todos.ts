import Router from 'express-promise-router';
import { Todo } from '../db';

const router = Router();

router.post('/:id', async (req, res) => {
  const { rows } = await Todo.complete(req.params.id);
  res.json(rows[0]);
});

router.delete('/:id', async (req, res) => {
  const { rows } = await Todo.uncomplete(req.params.id);
  res.json(rows[0]);
});

export default router;
