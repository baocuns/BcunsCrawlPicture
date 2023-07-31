import express from "express";
import axios from "axios";
import errorMsg from "./error";

const app = express();
const PORT = process.env.PORT || 80;

app.use(require("cors")());

app.use("/images", async (req, res) => {
  try {
    const src: any = req.query.src;
    const response = await axios.get(src, {
      responseType: "stream",
      headers: {
        referer: "https://www.nettruyen.com",
      },
    });
    response.data.pipe(res);
  } catch (error) {
    return res
      .status(500)
      .json(errorMsg("An error occurred, please try again!", error));
  }
});

// Handle 404
app.use((req, res) => {
  res.json({
    status: 404,
    message: "Not Found",
  });
});

app.listen(PORT);
