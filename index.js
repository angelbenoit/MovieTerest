const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const key = require('./config/key.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

require('./models/User.js');
require('./services/passport.js');
mongoose.connect(key.mongoURI);

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys:['fdfvfgnhrfb']
}));

app.use(morgan('combined'));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser());

require('./routes/authRoutes.js')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);