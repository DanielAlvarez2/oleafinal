const SpecialsFormat = require('../models/SpecialsFormat')
const DinnerFormat = require('../models/DinnerFormat')
const DessertFormat = require('../models/DessertFormat')
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
        let {pagePadding,itemMargin,showLegalText} = await SpecialsFormat.findOne({index:1})
        if(pagePadding == undefined) pagePadding = 0
        if(itemMargin == undefined) itemMargin = 0
        if(showLegalText == undefined) showLegalText = true
        showLegalText == 0 ? showLegalText = false : showLegalText = true 
        res.render('print/specials',{req:req,
                                      appetizers:appetizers,
                                      entrees:entrees,
                                      desserts:desserts,
                                      pagePadding:pagePadding,
                                      itemMargin:itemMargin,
                                      showLegalText:showLegalText})

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
                {section:'sides'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        const {pagePadding,paddingVertical,paddingHorizontal} = await DinnerFormat.findOne({index:1})
        console.log(pagePadding,paddingHorizontal,paddingVertical)
        res.render('print/dinner',{req:req,
                                   pagePadding:pagePadding,
                                   paddingVertical:paddingVertical,
                                   paddingHorizontal:paddingHorizontal,
                                   charcuterie:charcuterie,
                                   appetizers:appetizers,
                                   entrees:entrees,
                                   sides:sides})
    },
    getDessert: async(req,res)=>{
        const desserts = await MenuItem.find({
            $and:[
                {menu:'dessert'},
                {section:'desserts'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})        
        const {pageTopBottom,pageLeftRight,paddingVertical} = await DessertFormat.findOne({index:1})
        res.render('print/dessert',{req:req,
                                    desserts:desserts,
                                    pageTopBottom:pageTopBottom,
                                    pageLeftRight:pageLeftRight,
                                    paddingVertical:paddingVertical})
    }
}