const MenuItem = require('../models/MenuItem')

module.exports = {
    getIndex: (req,res)=>{
        res.render('main/index.ejs', {title:'olea new haven'})
    },
    getIndex2: (req,res)=>{
        res.render('main/index2.ejs', {title:'olea new haven'})
    },
    getInfo: (req,res)=>{
        res.render('main/info.ejs', {title:'olea new haven | info'})
    },
    getFreeParking: (req,res)=>{
        res.render('main/free-parking.ejs', {title: 'olea new haven | free parking'})
    },
    getChefBio: (req,res)=>{
        res.render('main/chef-bio.ejs', {title:'olea new haven | chef bio'})
    },
    getPrivateParties: (req,res)=>{
        res.render('main/private-parties.ejs', {title:'olea new haven | private parties'})
    },
    getPress: (req,res)=>{
        res.render('main/press.ejs',{title:'olea new haven | press'})
    },
    getGiftcards: (req,res)=>{
        res.render('main/giftcards.ejs',{title:'olea new haven | gift cards'})
    },
    getNewsletter: (req,res)=>{
        res.render('main/newsletter.ejs', {title:'olea new haven | newsletter'} )
    },
    getDinner: async(req,res)=>{
        const charcuterie = await MenuItem.find({
            $and:[
                {menu:'dinner'},
                {section:'charcuterie'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        const appetizers = await MenuItem.find({
            $and:[
                {menu:'dinner'},
                {section:'appetizers'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        const entrees = await MenuItem.find({
            $and:[
                {menu:'dinner'},
                {section:'entrees'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        const sides = await MenuItem.find({
            $and:[
                {section:'sides'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('main/dinner.ejs',{title:'olea new haven | dinner menu',
                                      charcuterie:charcuterie,
                                      appetizers:appetizers,
                                      entrees:entrees,
                                      sides:sides})
    },
    getSpecials: async(req,res)=>{
        const appetizers = await MenuItem.find({
            $and:[
                {menu:'specials'},
                {section:'appetizers'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        const entrees = await MenuItem.find({
            $and:[
                {menu:'specials'},
                {section:'entrees'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        const desserts = await MenuItem.find({
            $and:[
                {menu:'specials'},
                {section:'desserts'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('main/specials.ejs',{title:'olea new haven | daily specials',
                                      appetizers:appetizers,
                                      entrees:entrees,
                                      desserts:desserts})        
    },
    getDessert: async(req,res)=>{
        const desserts = await MenuItem.find({
            $and:[
                {menu:'dessert'},
                {section:'desserts'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('main/dessert.ejs',{title:'olea new haven | dessert menu',
                                      desserts:desserts})                
    },
    getLogin: async(req,res)=>{
        res.render('main/login.ejs', {title:'olea new haven | login'})
    }
}