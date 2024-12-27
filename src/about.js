export function createAbout() {
    const content = document.getElementById('content');
    content.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, architecto quae? 
                           Quibusdam sapiente reprehenderit, numquam veritatis dolores deserunt, nostrum 
                           optio odit nulla nobis nam explicabo obcaecati atque ad culpa eius.`
    content.style.color = '#333';
    content.style.textAlign = 'center';
    content.style.fontSize = '2rem';
    content.style.fontWeight = 'bold';
}