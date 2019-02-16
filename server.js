const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use("/public", express.static(path.resolve(__dirname + "/public")));
app.use(bodyParser.urlencoded({ extended: false, new: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/contact", (req, res) => {
  console.log("req.body", req.body);
  console.log("parsed:", JSON.parse(req.body.request));
  console.log("request:", req.body.request);
  console.log("request received");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
