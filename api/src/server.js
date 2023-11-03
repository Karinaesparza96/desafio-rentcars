const cors = require("cors");
const express = require("express");
const routes = require("./routes/routes");

require("./database");
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);
