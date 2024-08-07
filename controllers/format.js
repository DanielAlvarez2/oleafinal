const MenuItem = require('../models/MenuItem')
const SpecialsFormat = require('../models/SpecialsFormat')
const DinnerFormat = require('../models/DinnerFormat')
const DessertFormat = require('../models/DessertFormat')

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
        let {pagePadding,itemMargin,showLegalText} = await DinnerFormat.findOne({index:1})
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
        const specialsFormat = await SpecialsFormat.find()
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
    postDinner: async(req,res)=>{
        const dinnerFormat = await DinnerFormat.find()
        if(dinnerFormat.length == 0){
            await DinnerFormat.create({
                index:1,
                pagePadding: req.body.pagePadding,
                paddingVertical: req.body.paddingVertical,
                paddingHorizontal: req.body.paddingHorizontal
            })
        }else{
            await DinnerFormat.findOneAndUpdate({index:1},{
                pagePadding: req.body.pagePadding,
                paddingVertical: req.body.paddingVertical,
                paddingHorizontal: req.body.paddingHorizontal
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
        let {pagePadding, paddingHorizontal, paddingVertical} = await DinnerFormat.findOne({index:1})
        if(pagePadding == undefined) pagePadding = 0
        if(paddingHorizontal == undefined) paddingHorizontal = 0
        if(paddingVertical == undefined) paddingVertical = 0
        console.log('getDinner: '+pagePadding,paddingHorizontal,paddingVertical)
        res.render('format/dinner',{req,req,
                                    charcuterie:charcuterie,
                                    appetizers:appetizers,
                                    entrees:entrees,
                                    sides:sides,
                                    pagePadding:pagePadding,
                                    paddingVertical:paddingVertical,
                                    paddingHorizontal:paddingHorizontal})
    },
    getDessert: async(req,res)=>{
        const desserts = await MenuItem.find({
            $and:[
                {menu:'dessert'},
                {section:'desserts'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        const temp = await DessertFormat.find()
        let pageTopBottom
        let pageLeftRight
        let paddingVertical
        if(temp.length == 0){
            pageTopBottom = 0
            pageLeftRight = 0
            paddingVertical = 0
            console.log('no dessert format entries exist')
        }else{
            ({ pageTopBottom, pageLeftRight, paddingVertical } = await DessertFormat.findOne({index:1}))
        }
        console.log(pageTopBottom, pageLeftRight, paddingVertical)
        res.render('format/dessert.ejs', {req,req,
                                          desserts:desserts,
                                          pageTopBottom:pageTopBottom,
                                          pageLeftRight:pageLeftRight,
                                          paddingVertical:paddingVertical})
    },
    postDessert: async(req,res)=>{
        const getFormat = await DessertFormat.find()
        if(getFormat.length == 0){
            await DessertFormat.create({
                index:1,
                pageTopBottom: req.body.pageTopBottom,
                pageLeftRight: req.body.pageLeftRight,
                paddingVertical: req.body.paddingVertical
            })
        }else{
            await DessertFormat.findOneAndUpdate({index:1},{
                pageTopBottom: req.body.pageTopBottom,
                pageLeftRight: req.body.pageLeftRight,
                paddingVertical: req.body.paddingVertical                
            })
        }
        res.redirect(req.get('referer'))
    },
    getDessertBack: async(req,res)=>{
        res.render('format/dessert-back.ejs',{req:req})
    }
}