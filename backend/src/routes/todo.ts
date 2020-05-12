import Router from 'express-promise-router';
import { Todo } from '../db';

const router = Router();

router.get('/', async (_, res) => {
  const { rows } = await Todo.findAll();
  res.send(rows);
});

router.get('/:id', async (req, res) => {
  const { rows } = await Todo.find(req.params.id);
  res.send(rows);
})

router.post('/', async (req, res) => {
  const { rows } = await Todo.create(req.body.name);
  res.send(rows);
});

router.put('/:id', async (req, res) => {
  const { rows } = await Todo.update(req.params.id, req.body);
  res.send(rows);
});

router.delete('/:id', async (req, res) => {
  const { rows } = await Todo.delete(req.params.id);
  res.send(rows);
})

export default router;
