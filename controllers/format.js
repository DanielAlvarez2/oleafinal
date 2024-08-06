const MenuItem = require('../models/MenuItem')
const SpecialsFormat = require('../models/SpecialsFormat')

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
        let {pagePadding,itemMargin,showLegalText} = await SpecialsFormat.findOne({index:1})
        if(pagePadding == undefined) pagePadding = 0
        if(itemMargin == undefined) itemMargin = 0
        if(showLegalText == undefined) showLegalText = true

        console.log(showLegalText, itemMargin, pagePadding)
        showLegalText == 0 ? showLegalText = false : showLegalText = true 
        res.render('format/specials',{req:req,
                                      appetizers:appetizers,
                                      entrees:entrees,
                                      desserts:desserts,
                                      pagePadding:pagePadding,
                                      itemMargin:itemMargin,
                                      showLegalText:showLegalText})
    },
    postSpecials: async(req,res)=>{
        let specialsFormat = await SpecialsFormat.find()
        if (specialsFormat.length == 0){
            await SpecialsFormat.create({
                index:1,
                pagePadding: req.body.pagePadding,
                itemMargin: req.body.itemMargin,
                showLegalText: req.body.showLegalText
            })
        }
        else{
            await SpecialsFormat.findOneAndUpdate({index:1},{
                pagePadding: req.body.pagePadding,
                itemMargin: req.body.itemMargin,
                showLegalText: req.body.showLegalText
            })
        }
        res.redirect(req.get('referer'))
    },
    getDinner: async(req,res)=>{
        const charcuterie = await MenuItem.find({
            $and:[
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
                {menu:'dinner'},
                {section:'sides'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('format/dinner',{req,req,
                                    charcuterie:charcuterie,
                                    appetizers:appetizers,
                                    entrees:entrees,
                                    sides:sides})
    }
}