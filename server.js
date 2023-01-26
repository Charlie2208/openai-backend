const express = require("express");
const app = express();
require('dotenv').config()
const routes = require("./routes/api")
const cors = require("cors");

const port = process.env.PORT || 5503;

// Enable all request

app.use(cors())

// parsing application/json

app.use(express.json())

// parsing application application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }))

app.use("/openai", routes)

app.listen(port, () => {
    console.log(`Server Running at port http://localhost:${port}`)
})