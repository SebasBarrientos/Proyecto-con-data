const express = require("express");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./config/config")

const cors = require("cors")
app.use(cors())

const PORT = process.env.PORT || 3001;

app.use(express.json())

dbConnection()

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
