const express = require("express");
const encode = require("./utils/encode");
const bodyParser = require("body-parser");
const decode = require("./utils/decode");
var path = require("path");
const cors = require('cors');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use("/", encode);
app.use("/", decode);


var port = process.env.PORT || 1234;

app.listen(port, () => {
    console.log(`Server up and running on port ${port}!`);
});
