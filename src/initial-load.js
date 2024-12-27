import homeImage from './home.jpg'
export function createHome() {
    const content = document.getElementById('content');
    const headline = document.createElement('div');

    content.style.padding = "35px";

    headline.id = 'headline';
    headline.style.textAlign = 'center';
    headline.textContent = `"You know, my father used to say, whatever you do, do it 100%. When you work, work. When you laugh, laugh. When you eat, eat like it's your last meal."`;
    headline.style.alignSelf = 'flex-start';

    const homeImg = document.createElement('img');
    homeImg.src = homeImage;
    
    content.appendChild(homeImg);
    content.appendChild(headline);
}