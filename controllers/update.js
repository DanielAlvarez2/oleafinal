const MenuItem = require('../models/MenuItem')
const cloudinary = require('../middleware/cloudinary')

module.exports = {
    getSpecials: async(req,res)=>{
        // if(req.user.role != 'manager'){
        //     req.session.destroy()
        //     req.user = null
        //     res.redirect('/')
        // }
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
        res.render('update/specials.ejs',{title:'EDIT SPECIALS',
                                       req:req,
                                       appetizers:appetizers,
                                       entrees:entrees,
                                       desserts:desserts})
    },
    getArchives: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        try{
            const archives = await MenuItem.find({archived:true})
            res.render('update/archives.ejs',{title:'ARCHIVES',
                                       archives:archives,
                                       req:req})

        }catch(err){
            console.log(err)
        }        
    },
    createMenuItem: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        try{
            res.render('update/createMenuItem.ejs',{title:'CREATE MENU ITEM',
                                             req:req,
                                             user:req.user})
        }catch(err){
            console.log(err)
        }

    },
    getDesserts: async(req,res)=>{
        // if(!req.user) res.redirect('/dessert')
        const desserts = await MenuItem.find({
            $and:[
                {menu:'dessert'},
                {section:'desserts'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('update/desserts.ejs',{req:req,
                                      title:'EDIT DESSERTS',
                                      desserts:desserts})
        
    },
    getDessertWines: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        const dessertWines = await MenuItem.find({
            $and:[
                {section:'dessert wines'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('update/dessert-wines.ejs', {req:req,
                                                title:'olea new haven | update dessert wines',
                                                dessertWines:dessertWines})
    },
    getDessertCocktails: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        const dessertCocktails = await MenuItem.find({
            $and:[
                {section:'dessert cocktails'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('update/dessert-cocktails.ejs', {req:req,
                                                title:'olea new haven | update dessert cocktails',
                                                dessertCocktails:dessertCocktails})
    },
    getJapaneseWhisky: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        const japaneseWhisky = await MenuItem.find({
            $and:[
                {section:'japanese whisky'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('update/japanese-whisky.ejs', {req:req,
                                                title:'olea new haven | update japanese whisky',
                                                japaneseWhisky:japaneseWhisky})
    },        
    getSingleMaltScotch: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        const singleMaltScotch = await MenuItem.find({
            $and:[
                {section:'single malt scotch'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('update/single-malt-scotch.ejs', {req:req,
                                                title:'olea new haven | update single malt scotch',
                                                singleMaltScotch:singleMaltScotch})
    },        
    getBrandy: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        const brandy = await MenuItem.find({
            $and:[
                {section:'brandy'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('update/brandy.ejs', {req:req,
                                                title:'olea new haven | update brandy',
                                                brandy:brandy})
    },            
    getGrappa: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        const grappa = await MenuItem.find({
            $and:[
                {section:'grappa'},
                {archived:false}
            ]
        }).sort({sequence:'asc'})
        res.render('update/grappa.ejs', {req:req,
                                                title:'olea new haven | update grappa',
                                                grappa:grappa})
    },                
    getCraftDrinks: async(req,res)=>{
        // if(!req.user) res.redirect('/drinks')
        try{
            const craftDrinks = await MenuItem.find({
                $and:[
                    {menu:'drinks'},
                    {section:'craft drinks'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/craftDrinks.ejs',{title:'EDIT CRAFT DRINKS',
                                              req:req,
                                              craftDrinks:craftDrinks})
        }catch(err){
            console.log(err)
        }
    },
    getAppetizers: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        try{
            const appetizers = await MenuItem.find({
                $and:[
                    {menu:'dinner'},
                    {section:'appetizers'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/appetizers.ejs',{title:'EDIT APPETIZERS',
                                             req:req,
                                             appetizers:appetizers})
        }catch(err){
            console.log(err)
        }        
    },
    getBeer: async(req,res)=>{
        // if(!req.user) res.redirect('/drinks')
        try{
            const beerCans = await MenuItem.find({
                $and:[
                    {menu:'drinks'},
                    {section:'beer can'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            const beerDrafts = await MenuItem.find({
                $and:[
                    {menu:'drinks'},
                    {section:'beer draft'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/beer.ejs',{title:'EDIT BEER',
                                       req:req,
                                       beerCans:beerCans,
                                       beerDrafts:beerDrafts})
        }catch(err){
            console.log(err)
        }        
    },
    getBTG: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const btgCava = await MenuItem.find({
                $and:[
                    {menu:'wine'},
                    {section:'btg cava'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            const btgWhites = await MenuItem.find({
                $and:[
                    {menu:'wine'},
                    {section:'btg whites'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            const btgRose = await MenuItem.find({
                $and:[
                    {menu:'wine'},
                    {section:'btg rose'},
                    {archived: false}
                ]
            }).sort({sequence:'asc'})
            const btgReds = await MenuItem.find({
                $and:[
                    {menu:'wine'},
                    {section:'btg reds'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            const btgSherries = await MenuItem.find({
                $and:[
                    {menu:'wine'},
                    {section:'btg sherries'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/btg.ejs',{title:'EDIT BTG',
                                      req:req,
                                      btgCava:btgCava,
                                      btgWhites:btgWhites,
                                      btgRose:btgRose,
                                      btgReds:btgReds,
                                      btgSherries:btgSherries})
        }catch(err){
            console.log(err)
        }        
    },
    getCavaChampagne: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const cavaChampagne = await MenuItem.find({
                $and:[
                    {menu:'wine'},
                    {section:'cava champagne'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/cavaChampagne.ejs',{title:'EDIT CAVA CHAMPAGNE',
                                                req:req,
                                                cavaChampagne:cavaChampagne})
        }catch(err){
            console.log(err)
        }        
    },
    getCharcuterie: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        try{
            const charcuterie = await MenuItem.find({
                $and:[
                    {menu:'dinner'},
                    {section:'charcuterie'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/charcuterie.ejs',{title:'EDIT CHARCUTERIE',
                                              req:req,
                                              charcuterie:charcuterie})
        }catch(err){
            console.log(err)
        }        
    },
    getEntrees: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        try{
            const entrees = await MenuItem.find({
                $and:[
                    {menu:'dinner'},
                    {section:'entrees'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/entrees.ejs',{title:'EDIT ENTREES',
                                          req:req,
                                          entrees:entrees})
        }catch(err){
            console.log(err)
        }        
    },
    getNonAlcoholic: async(req,res)=>{
        // if(!req.user) res.redirect('/drinks')
        try{
            const nonAlcoholic = await MenuItem.find({
                $and:[
                    {menu:'drinks'},
                    {section:'non-alcoholic'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/nonAlcoholic.ejs', {title:'EDIT NON-ALCOHOLIC',
                                                req:req,
                                                nonAlcoholic:nonAlcoholic})
        }catch(err){
            console.log(err)
        }
    },
    getRedFrance: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const redFrance = await MenuItem.find({
                $and:[
                    {section:'red france'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/redFrance.ejs', {title:'EDIT RED FRANCE',
                                             req:req,
                                             redFrance:redFrance})
        }catch(err){
            console.log(err)
        }        
    },
    getRedItaly: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const redItaly = await MenuItem.find({
                $and:[
                    {section:'red italy'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/redItaly.ejs', {title:'EDIT RED ITALY',
                                            req:req,
                                            redItaly:redItaly})
        }catch(err){
            console.log(err)
        }        
    },
    getRedSpain: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const redSpain = await MenuItem.find({
                $and:[
                    {section:'red spain'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/redSpain.ejs',{title:'EDIT RED SPAIN',
                                           req:req,
                                           redSpain:redSpain})
        }catch(err){
            console.log(err)
        }
    },
    getRose: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const rose = await MenuItem.find({
               $and:[
                {menu:'wine'},
                {section:'rose'},
                {archived:false}
               ] 
            }).sort({sequence:'asc'})
            res.render('update/rose.ejs',{title:'EDIT ROSE',
                                   req:req,
                                   rose:rose})
        }catch(err){
            console.log(err)
        }        
    },
    getSangria: async(req,res)=>{
        // if(!req.user) res.redirect('/drinks')
        try{
            const sangria = await MenuItem.find({
                $and:[
                    {menu:'drinks'},
                    {section:'sangria'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/sangria.ejs', {title:'EDIT SANGRIA',
                                           req:req,
                                           sangria:sangria})
        }catch(err){
            console.log(err)
        }        
    },
    getSides: async(req,res)=>{
        // if(!req.user) res.redirect('/')
        try{
            const sides = await MenuItem.find({
                $and:[
                    {menu:'dinner'},
                    {section:'sides'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/sides.ejs', {title:'EDIT SIDES',
                                        req:req,
                                        sides:sides})
        }catch(err){
            console.log(err)
        }        
    },
    getWhiteFrance: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const whiteFrance = await MenuItem.find({
                $and:[
                    {section:'white france'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/whiteFrance.ejs',{title:'EDIT WHITE FRANCE',
                                              req:req,
                                              whiteFrance:whiteFrance})
        }catch(err){
            console.log(err)
        }        
    },
    getWhiteGermany: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const whiteGermany = await MenuItem.find({
                $and:[
                    {section:'white germany'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/whiteGermany.ejs',{title:'EDIT WHITE GERMANY',
                                           req:req,
                                           whiteGermany:whiteGermany})
        }catch(err){
            console.log(err)
        }        
    },
    getWhiteItaly: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const whiteItaly = await MenuItem.find({
                $and:[
                    {section:'white italy'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/whiteItaly.ejs', {title:'EDIT WHITE ITALY',
                                              req:req,
                                              whiteItaly:whiteItaly})
        }catch(err){
            console.log(err)
        }        
    },
    getWhiteSpain: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')
        try{
            const whiteSpain = await MenuItem.find({
                $and:[
                    {menu:'wine'},
                    {section:'white spain'},
                    {archived:false}
                ]
            }).sort({sequence:'asc'})
            res.render('update/whiteSpain.ejs',{title:'EDIT WHITE SPAIN',
                                             req:req,
                                             whiteSpain:whiteSpain})
        }catch(err){
            console.log(err)
        }        
    },
    getUpdateMenuItem: async(req,res)=>{
        // if(!req.user) res.redirect('/wine')        
        try{
            const item = await MenuItem.findById(req.params.id)
            res.render('update/menuItem.ejs',{req:req,
                                         item:item,
                                         title:'UPDATE ITEM'
            })
        }catch(err){
            console.log(err)
        }        
    },
    createNOpic: async(req,res)=>{
        console.log(req.body)
        try{
            const existingItems = await MenuItem.find({
                $and:[
                    {menu:req.body.menu},
                    {section:req.body.section},
                    {archived:false}
                ]
            })
            await MenuItem.create({
                menu:req.body.menu,
                section:req.body.section,
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                allergies:req.body.allergies,
                sequence:existingItems.length+1,
                grapes:req.body.grapes,
                vintage:req.body.vintage
            })
        }catch(err){
            console.log(err)
        }
        console.log('req.body: '+JSON.stringify(req.body))
        res.redirect(req.get('referer'))
    },
    createWpic: async(req,res)=>{
        console.log(req.body)
        try{   
            const result = await cloudinary.uploader.upload(req.file.path)
            const existingItems = await MenuItem.find({
                $and:[
                    {menu:req.body.menu},
                    {section:req.body.section},
                    {archived:false}
                ]
            })
            await MenuItem.create({
                menu:req.body.menu,
                section:req.body.section,
                name:req.body.name,
                image:result.secure_url,
                cloudinaryId:result.public_id,
                description:req.body.description,
                price:req.body.price,
                allergies:req.body.allergies,
                sequence:existingItems.length+1,
            })
            console.log('Menu Item has been added!')
            res.redirect(req.get('referer'))
        }catch(err){
            console.log(err)
        }        
    },
    delete: async(req,res)=>{
        console.log('delete')
        try{
            const menuItem = await MenuItem.findById({_id:req.params.id})
            if(menuItem.cloudinaryId) await cloudinary.uploader.destroy(menuItem.cloudinaryId)
            const sectionItems = await MenuItem.find({
                $and:[
                    {menu:menuItem.menu},
                    {section:menuItem.section},
                    {archived:false}
                ]
            })
            for (let i=menuItem.sequence+1;i<=sectionItems.length;i++){
                await MenuItem.findOneAndUpdate({
                    $and:[
                        {menu:menuItem.menu},
                        {section:menuItem.section},
                        {archived:false},
                        {sequence:i}
                    ]},{sequence:i-1}
                )
            }
            
            await MenuItem.deleteOne({_id:req.params.id})
            console.log(`DELETED: ${req.params.name}`)
            res.redirect(req.get('referer'))            
        }catch(err){
            console.log(err)
        }        
    },
    editItem: async(req,res)=>{
        console.log('editItem')
        try{
            const item = await MenuItem.findById(req.params.id)
            res.render('update/menuItem.ejs',{req:req,
                                         item:item,
                                         title:'UPDATE ITEM'
            })
        }catch(err){
            console.log(err)
        }        
    },
    saveChanges: async(req,res)=>{
        try{
            console.log(req.params.id)
            console.log(req.body)
            await MenuItem.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/dashboard')
        }catch(err){
            console.log(err)
        }        
    },
    saveChangesWpic: async(req,res)=>{
        try{
            console.log(req.params.id)
            console.log(req.body)
            console.log('cloudinaryId: '+req.body.cloudinaryId)
            if(req.body.cloudinaryId){
                await cloudinary.uploader.destroy(req.body.cloudinaryId)
            }
            const result = await cloudinary.uploader.upload(req.file.path)

            await MenuItem.findByIdAndUpdate(req.params.id,{
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                allergies:req.body.allergies,
                image:result.secure_url,
                cloudinaryId:result.public_id
            })
            res.redirect('/dashboard')
        }catch(err){
            console.log(err)
        }        
    },
    archive: async(req,res)=>{
        try{
            const currentItem = await MenuItem.findById(req.params.id)
            const sectionItems = await MenuItem.find({
                $and:[
                    {menu:currentItem.menu},
                    {section:currentItem.section},
                    {archived:false}
                ]
            })
            for (let i=currentItem.sequence+1;i<=sectionItems.length;i++){
                await MenuItem.findOneAndUpdate({
                    $and:[
                        {menu:currentItem.menu},
                        {section:currentItem.section},
                        {sequence:i},
                        {archived:false}
                    ]},
                    {sequence:i-1}
                )
            }
            await MenuItem.findByIdAndUpdate(
                {_id:req.params.id},
                {archived:true}
            )
            res.redirect(req.get('referer'))
        }catch(err){
            console.log(err)
        }        
    },
    unarchive: async(req,res)=>{
        try{
            console.log(req.params.id)
            const currentItem = await MenuItem.findById(req.params.id)
            console.log(currentItem.sequence)
            const sectionItems = await MenuItem.find({
                $and:[
                    {menu:currentItem.menu},
                    {section:currentItem.section},
                    {archived:false}
                ]
            })
            console.log('length: '+sectionItems.length)
            await MenuItem.findByIdAndUpdate(
                {_id:req.params.id},
                {archived:false, sequence:sectionItems.length+1}
            )
            res.redirect(req.get('referer'))
        }catch(err){
            console.log(err)
        }
    },
    moveUp: async(req,res)=>{
        try{
            const currentItem = await MenuItem.findById(req.params.id)
            const itemAbove = await MenuItem.findOne({
                $and:[
                    {sequence:currentItem.sequence-1},
                    {menu:currentItem.menu},
                    {section:currentItem.section}
                ]
            })
            await MenuItem.findByIdAndUpdate(
                {_id:req.params.id},
                {sequence:currentItem.sequence-1}
            )
            await MenuItem.findByIdAndUpdate(
                {_id:itemAbove.id},
                {sequence:currentItem.sequence}
            )
            res.redirect(req.get('referer'))
        }catch(err){
            console.log(err)
        }
    },
    moveDown: async(req,res)=>{
        try{
            const currentItem = await MenuItem.findById(req.params.id)
            const itemBelow = await MenuItem.findOne({
                $and:[
                    {sequence:currentItem.sequence+1},
                    {menu:currentItem.menu},
                    {section:currentItem.section}
                ]
            })
            await MenuItem.findByIdAndUpdate(
                {_id:req.params.id},
                {sequence:currentItem.sequence+1}
            )
            await MenuItem.findByIdAndUpdate(
                {_id:itemBelow.id},
                {sequence:currentItem.sequence}
            )
            res.redirect(req.get('referer'))
        }catch(err){
            console.log(err)
        }
    }           
    
}