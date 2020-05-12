import { Pool } from 'pg';

export default new Pool({
  host: 'localhost',
  user: 'nolan',
  database: 'todo',
  port: 5432,
});
