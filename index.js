const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
dotenv.config()
const port = process.env.PORT || 5000;
const app = express();

const authRoutes = require('./src/Routes/auth.routes');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Apply oqvest api working.')
})

app.use('/auth', authRoutes);

app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (err.code === 401) {
        err.status = 401;
    }
    res.status(err.status || 500).send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

module.exports = app;