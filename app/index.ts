import express, {Request, Response} from 'express';

const app = express();

app.use('/api', (req: Request, res: Response) => {
    res.send('Hello World');
});