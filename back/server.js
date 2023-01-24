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
app.use('/voit',cars);
app.use(errors.errorHandler); // middleware for error responses


const db = database.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', () => console.log(`Connected to mongo at ${uri}`));

app.listen(3000, () => {
    console.log("Server is running at localhost:3000")
}); 