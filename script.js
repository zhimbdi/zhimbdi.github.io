// Pop-up message on load
window.onload = function() {
    setTimeout(() => {
        alert("Hey Rashika! Ajay made this colorful world just for you! 💖");
    }, 1000);
};

// Golgappa hover effect
document.querySelector('.golgappa').addEventListener('mouseover', function() {
    this.style.animation = 'spin 1s linear infinite';
});

document.querySelector('.golgappa').addEventListener('mouseout', function() {
    this.style.animation = 'spin 4s linear infinite, float 3s ease-in-out infinite';
});