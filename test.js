function init() {
    let image = document.getElementById('zero');
    image.onclick = showAnswer;
}

function showAnswer() {
    let image = document.getElementById('zero');
    image.src = "img/zero.jpg";
}

window.onload = init;