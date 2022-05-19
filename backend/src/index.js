const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

mongoose.connnect('mongodb://db:27017/db', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(bodyParser.json());

app.listen(port, () => console.log(`Online: ${port}`));

