const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));



console.log("running at 5002");
app.listen(process.env.PORT || 5002);
