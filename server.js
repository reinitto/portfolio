const express = require("express");
const path = require("path");
const app = express();
app.use("/public", express.static(path.resolve(__dirname + "/public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
