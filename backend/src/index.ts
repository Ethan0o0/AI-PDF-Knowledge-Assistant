import express, { Application, Request, Response } from 'express';
import router from './routes/AI-Routes';

const app: Application = express();
const port: number = 5020;

app.use('/', router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});