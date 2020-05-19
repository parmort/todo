import Router from 'express-promise-router';
import { Todo } from '../db';

const router = Router();

router.post('/:id', async (req, res) => {
  const { rows } = await Todo.complete(req.params.id);
  res.send(rows);
});

router.delete('/:id', async (req, res) => {
  const { rows } = await Todo.uncomplete(req.params.id);
  res.send(rows);
});

export default router;
