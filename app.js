var text = ["Explore", "Discover"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2500);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}