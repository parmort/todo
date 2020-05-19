import { Express } from 'express';
import todos from './todos';

export default (app: Express): void => {
  app.get('/', (_, res) => res.send('Server is working'));

  app.use('/todos', todos);
};
