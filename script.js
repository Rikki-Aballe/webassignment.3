// Get the box element
const box = document.getElementById("box");

// Function to animate the box
function animateBox() {
    let position = 0;
    const interval = setInterval(() => {
        if (position >= 300) {
            clearInterval(interval);
        } else {
            position++;
            box.style.transform = `translateX(${position}px)`;
        }
    }, 5);
}

// Start the animation when the page loads
window.onload = animateBox;

