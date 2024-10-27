const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("App is runing!");
})

app.listen(3000, () => {
    console.log("app is runing at " + 3000);
})