const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
// const methodOverride = require('method-override')
const flash = require('express-flash')
const logger = require('morgan')
const connectDb = require('./config/database')
require('dotenv').config({path:'./config/.env'})
require('./config/passport')(passport)
const connectDB = require('./config/database')
connectDB()
const path = require('path')
const PORT = process.env.PORT || 3001
const mainRoutes = require('./routes/main')
const updateRoutes = require('./routes/update')
const formatRoutes = require('./routes/format')
const printRoutes = require('./routes/print')
const authRoutes = require('./routes/auth')
const dashboardRoutes = require('./routes/dashboard')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(
    session({
        secret: 'keyboard cat',
        resave:false,
        saveUninitialized:false,
        store: new MongoStore({mongooseConnection:mongoose.connection}),
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(logger('dev'))

app.use('/', mainRoutes)
app.use('/auth', authRoutes)
app.use('/update', updateRoutes)
app.use('/format', formatRoutes)
app.use('/print', printRoutes)
app.use('/dashboard', dashboardRoutes)


app.use(function(req,res){
    res.status(404).render('error404.ejs',{title:'404'})
})

app.listen(PORT,()=>{
    console.log(`Express Server Now Listening on port ${PORT}`);
})