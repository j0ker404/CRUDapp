const express = require('express');
const app = express();
// const PORT = process.env.PORT || 8080;
app.use(express.json())

// mount apis to main app
const api = require("./api");
app.use('/api',api);


// site
app.get('/', (req, res) => {
    res.send("Hello World, to my home page");
});




module.exports = app;