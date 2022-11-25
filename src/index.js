const express = require('express');
const port = 4000;
const app = express();
app.use(express.json());
app.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const rs = await response.json();
    return res.status(200).json(rs);
    return res.status.json({ message: 'Xin chao' });
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
