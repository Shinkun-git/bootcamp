import express, { urlencoded } from 'express';
import session from 'express-session';
import passport from 'passport';
import http from 'http';
import path from 'path';
import config from './config/index.js';
import api from './api/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine','ejs');
app. set("views", path.join(__dirname, "views"));

app.use('/api', api);

app.get('/home', (req, res) => {
    const user = req.session.user;  // Retrieve stored user data
    res.render('home', { data: user || {} });  // Pass to EJS
});

app.get('/signUp', (req, res)=>{
    res.render('signUp');
})

app.get('/login', (req,res)=>{
    res.render('login');
})

const server = http.createServer(app);

server.listen(config.serverPort, ()=>{
    console.log('Server  listening on port ', config.serverPort);
})

