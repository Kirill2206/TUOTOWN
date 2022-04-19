const burgerMenu = document.querySelector('.burger-menu');

const openBurger = () => {
    burgerMenu.classList.add('hide');
}
const closeBurger = () => {
    burgerMenu.classList.remove('hide');
}
export { openBurger, closeBurger };
