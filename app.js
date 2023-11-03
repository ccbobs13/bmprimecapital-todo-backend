require("dotenv").config();
const express = require('express');
const cors = require('cors');
const db = require('./src/database/mongo-db');
const PORT = process.env.PORT | 3000;
const todoRouter = require('./src/routes/todo.route');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

db.MONGOOSE.connect(db.URL)
    .then(() => console.log("Connected to remote database"))
    .catch((err) => {
        console.log("Error : Cannot connect to database ", err.message);
        process.exit();
    });

app.use('/todos', todoRouter);
app.use((req, res, next) => {
    res.status(404).send({
        error: "Resource not found",
    });
});

app.listen(PORT, () => console.log(`Application running on port ${PORT}`))