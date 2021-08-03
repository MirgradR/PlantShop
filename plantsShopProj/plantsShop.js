/* burgerMenu script */

let burgerMenu = document.querySelector('.burger_menu')
let navigation = document.querySelector('.header__navigation')

let screenWidth = document.documentElement.clientWidth
burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle('openMenu')
    if (burgerMenu.classList.contains('openMenu')) {
        navigation.classList.add('openList')
    } else {
        navigation.classList.remove('openList')
    }
})
 
/* Popap script */

let popup = document.querySelector('.popup')
let btnService = document.querySelectorAll('.btn-service')
let popupClose = document.querySelector('.popup__close')

for (let btnServ of btnService) {
    btnServ.addEventListener('click', function(){
        popup.classList.toggle('active')
    })
}
popupClose.addEventListener('click', function(e) {
    event.preventDefault()
    popup.classList.remove('active')
})
popup.addEventListener('click', function(e) {
    if (!e.target.closest('.popup__content')) {
        popup.classList.remove('active')
    }
})

/* Slider repeat */

let counter = 1
if (document.getElementById('radio' + counter)) {
    setInterval(function() {
    document.getElementById('radio' + counter).checked = true
    counter++
    if (counter > 4) {
        counter = 1
    }
    }, 5000)
}

/* Shop list for page shop1 */

let btnShop = document.querySelector('.btn-shop')
let shopItems = document.querySelector('.shop__items')

if (btnShop && shopItems) {
    btnShop.addEventListener('click', function() {
        shopItems.classList.toggle('open-shoplist') 
    })
}