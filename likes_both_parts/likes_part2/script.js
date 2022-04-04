var firstLikes = 9;

function addLikeTop() {
    firstLikes++
    var likes1 = document.querySelector("#likes1");
    likes1.innerText = firstLikes + ' like(s)';
}

var secondLikes = 12;
function addLikeMiddle() {
    secondLikes++
    var likes2 = document.querySelector("#likes2");
    likes2.innerText = secondLikes + ' like(s)';
}

var thirdLikes = 9;
function addLikeBottom() {
    thirdLikes++
    var likes3 = document.querySelector("#likes3");
    likes3.innerText = thirdLikes + ' like(s)';
}



