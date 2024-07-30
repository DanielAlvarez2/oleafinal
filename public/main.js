const infoWrapper = document.querySelector('#info-wrapper')
const menusWrapper = document.querySelector('#menus-wrapper')
const infoSubMenu = document.querySelector('#info-sub-menu')
const menusSubMenu = document.querySelector('#menus-sub-menu')
infoWrapper.addEventListener('mouseover',()=>{
    infoSubMenu.style.display = 'block'
})
infoWrapper.addEventListener('mouseout',()=>{
    infoSubMenu.style.display = 'none'
})
menusWrapper.addEventListener('mouseover',()=>{
    menusSubMenu.style.display = 'block'
})
menusWrapper.addEventListener('mouseout',()=>{
    menusSubMenu.style.display = 'none'
})