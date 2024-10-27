const express = require('express');

const app = express();

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send("App is runing!");
})

app.listen(port, () => {
    console.log("app is runing at " + port);
})
