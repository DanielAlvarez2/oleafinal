const MenuItem = require('../models/MenuItem')

module.exports = {
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
        const pagePadding = Math.floor(Math.random() * 50)
        const itemMargin = Math.floor(Math.random() * 20)
        res.render('format/specials',{req:req,
                                      appetizers:appetizers,
                                      entrees:entrees,
                                      desserts:desserts,
                                      pagePadding:pagePadding,
                                      itemMargin:itemMargin})
    }
}