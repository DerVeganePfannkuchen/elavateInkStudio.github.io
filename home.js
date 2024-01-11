const bookingClosePopup = document.querySelector('.bookingPopupClose')
const bookingPopupShield = document.querySelector('.bookingPopupShield')
const bookingPopup = document.querySelector('.bookingPopup')
const bookingPopupTitle =document.getElementsByClassName('bookingPopupTitle')
bookingClosePopup.addEventListener('click',event =>{
    bookingPopup.classList.add('closing')
    closePopup()

})
bookingPopupShield.addEventListener('click',event =>{
    bookingPopup.classList.add('closing')
    closePopup()
})


function openPopup(){
    console.log('im here')
    bookingPopup.classList.add('show')
    bookingPopupShield.classList.add("show")
    console.log( bookingPopup.classList)
}
function closePopup(){
    if(bookingPopup.classList.contains('closing')){
        for (let i = 0; i< bookingPopupTitle.length;i++){
            bookingPopupTitle[i].classList.add('bookingPopupFadeOutWords')
        }
        bookingClosePopup.classList.add('bookingPopupFadeOutWords')
        bookingPopup.classList.add('bookingPopupFadeOutBackground')
        bookingPopupShield.classList.add('popUpShieldFadeOutBackground')
        console.log(bookingPopupShield.classList)
    setTimeout(()=>{
        bookingPopup.classList.remove("show")
        bookingPopupShield.classList.remove("show")
        bookingPopup.classList.remove('closing')
        bookingClosePopup.classList.remove('bookingPopupFadeOutWords')
        bookingPopup.classList.remove('bookingPopupFadeOutBackground')
        bookingPopupShield.classList.remove('popUpShieldFadeOutBackground')
        for (let i = 0; i< bookingPopupTitle.length;i++){
            bookingPopupTitle[i].classList.remove('bookingPopupFadeOutWords')
        }
        console.log(bookingPopupShield.classList)
    },500)
}
    
}