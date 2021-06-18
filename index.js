const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
let connectionStr = 'mongodb://<deleted>:<deleted>@<deleted>:<deleted>/<deleted>';
mongoose.connect(connectionStr, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB is connected');
})

const itemRoute = require('./routes/ItemRouter.js');
app.use('/item', itemRoute);

const port = 1803;
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})
