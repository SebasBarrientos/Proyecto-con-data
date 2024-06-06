const express = require("express");
const app = express();
const { dbConnection } = require("./config/config")
require("dotenv").config();

const cors = require("cors")
app.use(cors())

const PORT = process.env.PORT || 3001;

app.use(express.json())

dbConnection()


app.use("/sales", require("./routes/sales"));


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
