/* const http = require('http');
const app = require('./app');

const server = http.createServer(app);

*/
const express = require('express');
const app = express();
const database = require('./database.js')
const auth = require('./helpers/jwt.js')
const unless = require('express-unless')
const users = require('./controllers/UserController.js')
const cars = require('./routes/routesVoit.js')
const errors = require('./helpers/ErrorHandler.js')
const cors = require('cors');

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
  });
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', null],
    optionsSuccessStatus: 200
}))
// middleware for authenticating token submitted with requests
auth.authenticateToken.unless = unless
app.use(auth.authenticateToken.unless({
    path: [
        { url: '/users/login', methods: ['POST'] },
        { url: '/users/register', methods: ['POST'] }
    ]
}))

app.use(express.json());
//app.use(express.urlencoded({ extended: true }))// middleware for parsing application/json
app.use('/users', users); // middleware for listening to routes
app.use('/voit', cars);
app.use(errors.errorHandler); // middleware for error responses


const db = database.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', () => console.log(`Connected to mongo at ${uri}`));

const port = (process.env.PORT || 3000)

app.listen(port, () => {
    console.log("Server is running at localhost:" + port);
}); 