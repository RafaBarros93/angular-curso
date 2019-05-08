const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

class App {
    constructor() {
        this.express = express();
        this.miiddlewares();
        this.database();
        this.routes();
    }

    miiddlewares() {
        this.express.use(express.json());
        this.express.use(cors());
    }

    database() {
        mongoose.connect(
            "mongodb+srv://admin:123@cluster0-kgkln.mongodb.net/list?retryWrites=true",
            { useNewUrlParser: true }
        );
    }
    routes() {
        this.express.use(routes);
    }
}

module.exports = new App().express;
