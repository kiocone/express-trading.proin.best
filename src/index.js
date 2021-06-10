const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash')
const session = require('express-session')
const MySqlStore = require('express-mysql-session')
const { database } = require('./keys')

//inicializa
const app = express();

//configuracion
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//middleware
app.use(session({
    secret: 'tradeproinbestsession',
    resave: false,
    saveUninitialized: false,
    store: new MySqlStore(database)
}))
app.use(flash())
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//app.use(express.json())

//global Vars
app.use((req, res, next) => {
    app.locals.success = req.flash('success')
    next()
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/panel', require('./routes/panel'));
app.use('/profile', require('./routes/profile'));
app.use('/posiciones',require('./routes/posiciones'))


//public
app.use(express.static(path.join(__dirname,'public')));

//arrancar
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ', app.get('port'))
});