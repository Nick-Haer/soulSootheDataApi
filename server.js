require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const dbConnection = require('./dbConnection');

const app = express();

const path = require('path');

dbConnection();

const Image = require("./models/Images")

const { default: axios } = require('axios');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const PORT = process.env.PORT || 5000;

axios({
    method: 'get',
    url: "https://api.imgur.com/3/gallery/r/AnimalsBeingBros",
    headers: { 'authorization': 'Client-ID ' +  "cefddea13c7fc8f"}
})
.then((res) => Image.insertMany(res.data.data))
.catch((err) => console.error(err));



// app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
