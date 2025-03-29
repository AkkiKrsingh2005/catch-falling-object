let basket = document.getElementById("basket");
let apple = document.getElementById("apple");
let scoreDisplay = document.getElementById("score");
let score = 0;
let basketX = 160;
let appleY = 0;
let appleX = Math.random() * 370;

// Move basket with arrow keys
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" && basketX > 0) {
        basketX -= 20;
    } else if (event.key === "ArrowRight" && basketX < 320) {
        basketX += 20;
    }
    basket.style.left = basketX + "px";
});

// Drop the apple
function dropApple() {
    appleY += 5;
    apple.style.top = appleY + "px";
    apple.style.left = appleX + "px";

    if (appleY >= 460) {
        if (appleX >= basketX && appleX <= basketX + 80) {
            score++;
            scoreDisplay.textContent = score;
        }
        resetApple();
    }
}

// Reset apple position
function resetApple() {
    appleY = 0;
    appleX = Math.random() * 370;
    apple.style.top = appleY + "px";
    apple.style.left = appleX + "px";
}

// Run game loop
setInterval(dropApple, 50);
