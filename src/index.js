import "./styles.css";
import chickenparm from "./Chicken-Parmesan-1.jpg"
import { createHeadline } from "./initial-load.js";

const content = document.getElementById('content');

const image = document.createElement("img");
image.src = chickenparm;
content.appendChild(image);
   
createHeadline();
console.log("headline created");
