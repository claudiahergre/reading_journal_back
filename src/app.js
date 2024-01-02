const express = require("express");
const dayjs = require('dayjs') // npm install dayjs
const cors = require('cors') // npm install cors


const app = express();

app.use(express.json());
app.use(cors());



// RUTAS
app.use("/api", require("./routes/api"));

module.exports = app