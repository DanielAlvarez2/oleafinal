module.exports = {
    getIndex: (req,res)=>{
        console.log('getIndex running')
        res.render('main/index.ejs', {title:'olea new haven'})
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
    }
}