const MenuItem = require('../models/MenuItem')
const SpecialsFormat = require('../models/SpecialsFormat')
const DinnerFormat = require('../models/DinnerFormat')
const DessertFormat = require('../models/DessertFormat')
const DessertBackFormat = require('../models/DessertBackFormat')

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
        const dessertWines = await MenuItem.find({
            $and:[
                {section:'dessert wines'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        const dessertCocktails = await MenuItem.find({
            $and:[
                {section:'dessert cocktails'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})        
        const japaneseWhisky = await MenuItem.find({
            $and:[
                {section:'japanese whisky'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                
        const singleMaltScotch = await MenuItem.find({
            $and:[
                {section:'single malt scotch'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                        
        const brandy = await MenuItem.find({
            $and:[
                {section:'brandy'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                                
        const grappa = await MenuItem.find({
            $and:[
                {section:'grappa'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})  
        const {pageTop,verticalMargin,pageLeftRight} = await DessertBackFormat.findOne({index:1})
        console.log(pageLeftRight,pageTop,verticalMargin)
        res.render('format/dessert-back.ejs',{req:req,
                                              pageTop:pageTop,
                                              verticalMargin:verticalMargin,
                                              pageLeftRight:pageLeftRight,
                                              grappa:grappa,
                                              brandy:brandy,
                                              singleMaltScotch:singleMaltScotch,
                                              japaneseWhisky:japaneseWhisky,
                                              dessertCocktails:dessertCocktails,
                                              dessertWines:dessertWines})
    },
    postDessertBack: async(req,res)=>{
        const getFormat = await DessertBackFormat.find()
        if(getFormat.length == 0){
            await DessertBackFormat.create({
                index:1,
                pageTop: req.body.pageTop,
                pageLeftRight: req.body.pageLeftRight,
                verticalMargin: req.body.verticalMargin
            })
        }else{
            await DessertBackFormat.findOneAndUpdate({index:1},{
                pageTop: req.body.pageTop,
                pageLeftRight: req.body.pageLeftRight,
                verticalMargin: req.body.verticalMargin                
            })
        }
        res.redirect(req.get('referer'))        
    },
    getWineList: async(req,res)=>{
        const btgCava = await MenuItem.find({
            $and:[
                {section:'btg cava'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        const btgWhites = await MenuItem.find({
            $and:[
                {section:'btg whites'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})        
        const btgRose = await MenuItem.find({
            $and:[
                {section:'btg rose'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                
        const btgReds = await MenuItem.find({
            $and:[
                {section:'btg reds'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                        
        const cavaChampagne = await MenuItem.find({
            $and:[
                {section:'cava champagne'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                                
        const rose = await MenuItem.find({
            $and:[
                {section:'rose'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                                        
        const whiteSpain = await MenuItem.find({
            $and:[
                {section:'white spain'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                                                
        const whiteFrance = await MenuItem.find({
            $and:[
                {section:'white france'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})        
        const whiteItaly = await MenuItem.find({
            $and:[
                {section:'white italy'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})        
        const whiteGermany = await MenuItem.find({
            $and:[
                {section:'white germany'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})        
        const redSpain = await MenuItem.find({
            $and:[
                {section:'red spain'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                                                
        const redFrance = await MenuItem.find({
            $and:[
                {section:'red france'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})        
        const redItaly = await MenuItem.find({
            $and:[
                {section:'red italy'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                                
        const sangria = await MenuItem.find({
            $and:[
                {section:'sangria'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})        
        const nonAlcoholic = await MenuItem.find({
            $and:[
                {section:'non-alcoholic'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                
        const beerCans = await MenuItem.find({
            $and:[
                {section:'beer can'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                        
        const beerDrafts = await MenuItem.find({
            $and:[
                {section:'beer draft'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                                
        const craftDrinks = await MenuItem.find({
            $and:[
                {section:'craft drinks'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})        
        const btgSherries = await MenuItem.find({
            $and:[
                {section:'btg sherries'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})                
        res.render('format/wine-list.ejs',{req:req,
            btgCava:btgCava,btgWhites:btgWhites,btgRose:btgRose,
            btgReds:btgReds,cavaChampagne:cavaChampagne,rose:rose,
            whiteSpain:whiteSpain,whiteFrance:whiteFrance,
            whiteItaly:whiteItaly,whiteGermany:whiteGermany,
            redSpain:redSpain,redFrance:redFrance,
            redItaly:redItaly,sangria:sangria,
            nonAlcoholic:nonAlcoholic,beerCans:beerCans,
            beerDrafts:beerDrafts,craftDrinks:craftDrinks,
            btgSherries:btgSherries})
    }
}