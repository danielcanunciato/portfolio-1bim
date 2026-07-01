const express = require('express');

const api = express();
const port = 2469;

api.get("/", (req, res) => {
    res.send('Hello World!')
})

api.listen(port, ()=>{
    console.log(`Listening to port ${port}.`);
})