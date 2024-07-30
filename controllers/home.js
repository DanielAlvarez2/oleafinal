console.log('home controller')
const express = require('express')


module.exports = {
    getIndex: (req,res)=>{
        console.log('getIndex running')
        res.render('main/index.ejs', {title:'olea new haven'})
    },
    getInfo: (req,res)=>{
        res.render('main/info.ejs', {title:'olea new haven | info'})
    }
}