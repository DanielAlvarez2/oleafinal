const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const updateController = require('../controllers/update')

router.get('/specials', updateController.getSpecials)
router.get('/archives', updateController.getArchives)
router.get('/createMenuItem', updateController.createMenuItem)
router.get('/desserts', updateController.getDesserts)
router.get('/dessertWines', updateController.getDessertWines)
router.get('/dessertCocktails', updateController.getDessertCocktails)
router.get('/japaneseWhisky', updateController.getJapaneseWhisky)
router.get('/singleMaltScotch', updateController.getSingleMaltScotch)
router.get('/brandy', updateController.getBrandy)
router.get('/grappa', updateController.getGrappa)
router.get('/appetizers', updateController.getAppetizers)
router.get('/beer', updateController.getBeer)
router.get('/btg', updateController.getBTG)
router.get('/cavaChampagne', updateController.getCavaChampagne)
router.get('/charcuterie', updateController.getCharcuterie)
router.get('/craftDrinks', updateController.getCraftDrinks)
router.get('/entrees', updateController.getEntrees)
router.get('/nonAlcoholic', updateController.getNonAlcoholic)
router.get('/redFrance', updateController.getRedFrance)
router.get('/redItaly', updateController.getRedItaly)
router.get('/redSpain', updateController.getRedSpain)
router.get('/rose', updateController.getRose)
router.get('/sangria', updateController.getSangria)
router.get('/sides', updateController.getSides)
router.get('/whiteFrance', updateController.getWhiteFrance)
router.get('/whiteGermany', updateController.getWhiteGermany)
router.get('/whiteItaly', updateController.getWhiteItaly)
router.get('/whiteSpain', updateController.getWhiteSpain)
router.get('/menuItem', updateController.getUpdateMenuItem)

router.get('/moveUp/:id', updateController.moveUp)
router.get('/moveDown/:id', updateController.moveDown)


router.post('/createNopic', updateController.createNOpic)
router.post('/createWpic', upload.single('file'),updateController.createWpic)
router.post('/delete/:id', updateController.delete)
router.post('/item/:id', updateController.editItem)
router.post('/archive/:id', updateController.archive)
router.post('/unarchive/:id', updateController.unarchive)
router.post('/saveChanges/:id', updateController.saveChanges)
router.post('/saveChangesWpic/:id', upload.single('file'), updateController.saveChangesWpic)

module.exports = router