require('dotenv').config();

const express = require('express');

// const dbConnection = require('./dbConnection');

const app = express();

const path = require('path');

const mongoose = require('mongoose');
const { default: axios } = require('axios');

// const routes = require('./controllers');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const PORT = process.env.PORT || 5000;

axios.get("https://api.imgur.com/3/gallery/r/Eyebleach", {
    clientId: "731e05220d4aa7b7ed6b8b6d12966ecc556f85ba",
})
.then((res) => console.log(res.body))
.catch((err) => console.error(err.message));



// dbConnection();

// app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
