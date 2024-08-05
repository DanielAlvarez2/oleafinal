const User = require('../models/User')

module.exports = {
    getUsers: async(req,res)=>{
        const users = await User.find()
        console.log(req.user)
        res.render('dashboard/users.ejs',{users:users,req:req})
    },
    getIndex: async(req,res)=>{
        res.render('dashboard/index.ejs', {req:req})
    }
}