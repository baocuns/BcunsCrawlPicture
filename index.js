const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 80;

app.use(require("cors")());

app.get("/images", async (req, res) => {
  try {
    const { src } = req.query;
    const response = await axios.get(src, {
      responseType: "stream",
      headers: {
        referer: "https://www.nettruyen.com",
      },
    });
    return response.data.pipe(res);
  } catch (err) {
    return res.status(404).json({
      status: 404,
      message: "Picture Not Found",
    });
  }
});

// Handle 404
app.use((req, res) => {
  return res.status(404).json({
    status: 404,
    message: "Not Found",
  });
});

app.listen(PORT);
