const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3001
const mainRoutes = require('./routes/main')
app.set('view engine','ejs')
app.use(express.static('public'))

app.use('/', mainRoutes)

app.use(function(req,res){
    res.status(404).render('error404.ejs',{title:'404'})
})

app.listen(PORT,()=>{
    console.log(`Express Server Now Listening on port ${PORT}`);
})