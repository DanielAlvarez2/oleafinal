const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('flash')
const connectDb = require('./config/database')
require('dotenv').config({path:'./config/.env'})
require('./config/passport')(passport)
const connectDB = require('./config/database')
connectDB()
const path = require('path')
const PORT = process.env.PORT || 3001
const mainRoutes = require('./routes/main')
const updateRoutes = require('./routes/update')
app.set('view engine','ejs')
app.use(express.static('public'))
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


app.use('/', mainRoutes)
app.use('/update', updateRoutes)

app.use(function(req,res){
    res.status(404).render('error404.ejs',{title:'404'})
})

app.listen(PORT,()=>{
    console.log(`Express Server Now Listening on port ${PORT}`);
})