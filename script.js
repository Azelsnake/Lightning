const gifContainer = document.getElementById('gif-container');
// Tracing the mouse around the page for the lightning        
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            gifContainer.style.left = x + 'px';
            gifContainer.style.top = y + 'px';
        });
function playSFX() {
    const audio = new Audio("sfx.mp3");
    audio.play();
}

// Add a global click event listener to the document
document.addEventListener("click", playSFX);