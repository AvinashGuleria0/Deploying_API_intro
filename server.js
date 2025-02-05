const express = require("express");
const app = express();

const PORT = 8008;

app.get("/", (req, res) => {
    res.send(`Hello There My name is Avinash This is one of my first project to publish at port ${PORT} ashish yadav <br>
                Mentor Rishwant Thakoor is the best Mentor in Kalvium`)
    
});

app.listen(8008, () => {
    console.log(`Server is running on port ${PORT}`)
})
