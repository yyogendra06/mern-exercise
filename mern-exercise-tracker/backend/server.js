const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

// ENVIRONMENT VARIABLE 
require('dotenv').config();

// EXPRESS SERVER
const app = express();
const port = process.env.PORT || 5000;

// MIDDLE WARE CORS AND PARSE JSON
app.use(cors());
app.use(express.json());

// MONGOOSE DATABASE CONNECTIVITY
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connectivity has been established");
})

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`SERVER is running on port : ${port}`);
});