var likes = 3;

function addLike() {
    likes++
    var h3 = document.querySelector("h3");
    h3.innerText = likes + ' like(s)';
}