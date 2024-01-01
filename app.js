const express = require('express');
const connectDB = require('./db/connectDB');
const app = express();
require('dotenv').config()
const Router = require('./router/employeeRouter');
const bodyParser = require('body-parser');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the frontend folder
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.json());



app.use('/', Router)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI).then(() => console.log(`connected to db`))
        app.listen(port, () => console.log(`Server is listening on port ${port}...`))

    } catch (error) {
        console.log(error);
    }

}

start();






