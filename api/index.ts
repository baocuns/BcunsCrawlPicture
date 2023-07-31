import express from 'express';
import axios from 'axios';
import { Comics } from '..';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(require('cors')());

app.get('/images', async (req: any, res: any) => {
  try {
    const { src } = req.query;
    const response = await axios.get(src, {
      responseType: 'stream',
      headers: {
        referer: 'https://www.nettruyen.com',
      },
    });
    response.data.pipe(res);
  } catch (err) {
    throw err;
  }
});

app.get('/', (req, res) => {
  res.json({
    NPM: 'https://www.npmjs.com/package/comics-api',
    Github: 'https://github.com/pth-1641/Comics-API',
    Client: 'https://github.com/pth-1641/Comics-API/tree/master/api',
  });
});

// Handle 404
app.use((req, res) => {
  res.json({
    status: 404,
    message: 'Not Found',
  });
});

app.listen(PORT);
