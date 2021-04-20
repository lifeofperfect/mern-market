import express from 'express';
import {readdirSync} from 'fs';
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

//db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=> console.log(`DB CONNECTED`))
    .catch((err)=> console.log(`DB CONNECTION ERROR`, err))



const port = process.env.PORT || 8000

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

readdirSync("./routes").map((r)=> app.use("/api", require(`./routes/${r}`)));

app.listen(port, ()=> console.log(`server running ${port}`));