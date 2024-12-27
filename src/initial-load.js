export function createHeadline() {
    const content = document.getElementById('content');
    const headline = document.createElement('div');
    headline.id = 'headline';
    headline.textContent = 'The Italian Bobtaughter appended';
    content.appendChild(headline);
}