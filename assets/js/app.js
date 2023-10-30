var open = document.getElementById("open");
var second = document.getElementById("second");
var third = document.getElementById("third");
var four = document.getElementById("four");
// var flow = document.getElementById("flow");
var close = document.getElementById("closebtn");
var seconded = document.getElementById("seconded");
var thired = document.getElementById("thired");
var fouth = document.getElementById("fouth");
var overlay = document.getElementById("overlay");
var modal = document.getElementById("my_modal");
var mySecond = document.getElementById("mySecond");
var myThird = document.getElementById("myThird");
var myFour = document.getElementById("myFour");
open.addEventListener("click", function () {
    modal.style.display = "block",
        overlay.style.display = "block"

});
close.addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none"


});
second.addEventListener("click", function () {
    mySecond.style.display = "block",
        overlay.style.display = "block"

});
seconded.addEventListener("click", function () {
    mySecond.style.display = "none";
    overlay.style.display = "none"


});
third.addEventListener("click", function () {
    myThird.style.display = "block",
        overlay.style.display = "block"

});
thired.addEventListener("click", function () {
    myThird.style.display = "none";
    overlay.style.display = "none"


});
four.addEventListener("click", function () {
    myFour.style.display = "block",
        overlay.style.display = "block"
    flow.style.overflow = "hidden"
});
fouth.addEventListener("click", function () {
    myFour.style.display = "none";
    overlay.style.display = "none"
    flow.style.overflow = "unset"

});