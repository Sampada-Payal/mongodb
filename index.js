// imporrt env
const dotenv = require('dotenv');
const express = require('express');

// database connection
const DbConnection = require('D:\\FSWDT\\mongodb\\databaseConnection.js');

const app = express();
const PORT = 5500;

//config dotenv
dotenv.config();
DbConnection();


app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

