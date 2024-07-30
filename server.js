const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.sendFile(index.html)
})
app.get('/info',(req,res)=>{
    res.sendFile(info.html)
})
app.listen(PORT,()=>{
    console.log(`Express Server Now Listening on port ${PORT}`);
})