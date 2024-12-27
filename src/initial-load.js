export function createHeadline() {
    const content = document.getElementById('content');
    const headline = document.createElement('div');
    headline.id = 'headline';
    headline.style.textAlign = 'center';
    headline.textContent = `"You know, my father used to say, whatever you do, do it 100%. When you work, work. When you laugh, laugh. When you eat, eat like it's your last meal."`;
    content.appendChild(headline);
}