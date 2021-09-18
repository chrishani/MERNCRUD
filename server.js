const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//App midleware
app.use(bodyParser.json());

//routes middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://twg:twg123@mernapp.78adw.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB connected successfuly');
    })
    .catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
    console.log('App is running on ', PORT, 'Well done');
});