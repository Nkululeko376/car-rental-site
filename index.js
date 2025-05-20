/*===========Closing and opening the menu containing the navigation links by using the fa-bars icon
=======*/
let menuHideOpen = document.querySelector('.js-fa-bars');
menuHideOpen.addEventListener("click", () => {
    document.querySelector('body').classList.toggle('open-menu')
});

let userIcon = document.querySelector('.js-fa-user');
userIcon.addEventListener('mouseover', () => {
    document.querySelector('.login-p').style = "display: block;";
});
userIcon.addEventListener('mouseout', () => {
    document.querySelector('.login-p').style = "display: none;";
});