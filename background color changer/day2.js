//function myfunction() {
//  document.body.style.backgroundColor ='red'
//}
var btn = document.querySelector('button')

function randombgcolor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgcolor);
    document.body.style.backgroundColor = bgcolor;
}