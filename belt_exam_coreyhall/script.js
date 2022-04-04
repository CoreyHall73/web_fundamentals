var firstImg = document.querySelector("#firstImage");
function over(element) {
    firstImg.src = "assets/succulents-2.jpg";
}

function out(element) {
    firstImg.src = "assets/succulents-1.jpg";
}

var message = document.querySelector("#message");
function remove(element) {
    message.remove();
}