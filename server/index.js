const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys')
const passport = require('passport');

const cookieSession = require('cookie-session');
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] 
    })
)
app.use(
    passport.initialize()
)
app.use(
    passport.session()
)
mongoose.connect(keys.mongoURI)
require('./routes/authRoutes')(app);
require('./models/User')
const passportConfig = require('./services/passport');
// above line is equivalent to next 2 lines
// const authRoutes = require('./routes/authRoutes')
// authRoutes(app);
// in authRoutes 
// module.exports = (app) => { using app; }
const PORT = process.env.PORT || 8010;
app.listen(PORT);
