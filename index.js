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


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running.."
    })
})


// //ROUTING
// app.use("/users", userRouter);
// app.use("/books", booksRouter);

app.all("*", (req, res) => {
    res.status(500).json({
        message: "This route does not exist!"
    })
})


app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

