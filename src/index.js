import { openBurger, closeBurger } from './js/buregerMenu';

import './scss/main.scss';
import './scss/header.scss';
import './scss/burger-menu.scss';


document.querySelector('.burger').addEventListener('click', openBurger);
document.querySelector('.burger-close').addEventListener('click', closeBurger);


