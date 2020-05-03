const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    "Hello": "World",
    "Name": "Chandra"
  });
});

exports.app = functions.https.onRequest(app);
