const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'ok'});
});

app.post('/',(req, res) => {
    res.status(200).json({ message: 'message from 7001'});
});

app.all('/*', (req, res) => {
    return res.status(401).json({
      error: "Url not found",
    });
  });

app.listen(7000, (err, res) => {
    if(err)  console.log(err)
    console.log("server is running..")
});