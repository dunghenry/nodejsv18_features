import express, { Express, Request, Response } from 'express';
const port: number = 4000;
const app: Express = express();

app.get('/', async (req: Request, res: Response) => {
    const str: string = 'Hehe';
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const rs = await response.json();
    return res.status(200).json(rs);
    return res.status(200).json({ message: str });
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
