import "./styles.css";
import chickenparm from "./Chicken-Parmesan-1.jpg"
import background from "./background.jpg"
import logo from "./logo.jpg"
import { createHeadline } from "./initial-load.js";
import { clearContent } from "./clear-content.js";
import { createMenu } from "./menu.js";

const content = document.getElementById('content');
const logoContainer = document.querySelector('#logo');
const logoImg = document.createElement("img");
const menuBtn = document.getElementById('menu');

logoImg.src = logo;
logoContainer.appendChild(logoImg);
document.body.style.backgroundImage = `url(${background})`;
document.body.style.backgroundSize = 'cover'; 
document.body.style.backgroundPosition = 'center'; 
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.overflow = 'hidden';

const image = document.createElement("img");
image.src = chickenparm;
content.appendChild(image);
   
createHeadline();

menuBtn.addEventListener('click', () => {
    clearContent();
    createMenu();
})
