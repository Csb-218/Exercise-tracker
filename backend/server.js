const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
//connecting to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection  = mongoose.connection;
connection.once('open', () => {console.log("MongoDB database connection established successfully")});

const exercisesRouter = require('./routers/exercises');
const usersRouter = require('./routers/activity');

app.use('/exercises' , exercisesRouter );
app.use('/activity' , usersRouter );

app.listen(port, () => {
    console.log(`server listening on ${port}`); 
});