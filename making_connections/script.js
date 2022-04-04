
function change(element) {
    var name =  document.querySelector("#user-name");
    name.innerText = "Chunky Man";
}


function hideRow1(element) {
    document.querySelector("#todd").remove();
    document.querySelector("#friend-icon").remove();
    document.querySelector("#accept-icon1").remove();
    document.querySelector("#decline-icon1").remove();
}


function hideRow2(element) {
    document.querySelector("#phil").remove();
    document.querySelector(".phil-icon").remove();
    document.querySelector("#accept-icon2").remove();
    document.querySelector("#decline-icon2").remove();
}
