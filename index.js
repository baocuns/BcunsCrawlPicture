import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 80;

app.use(require('cors')());

app.get('/images', async (req, res) => {
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

// Handle 404
app.use((req, res) => {
  res.json({
    status: 404,
    message: 'Not Found',
  });
});

app.listen(PORT);