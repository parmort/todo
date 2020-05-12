import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

router(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
