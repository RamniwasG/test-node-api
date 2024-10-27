const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/apis', (req, res) => {
    res.send({ message: "App is runing!" });
})

app.listen(port, () => {
    console.log("app is runing at " + port);
})
