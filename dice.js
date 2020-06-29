
var rand1= Math.floor((Math.random() * 6) + 1);
var rand2= Math.floor((Math.random() * 6) + 1);

var imag1=document.querySelector(".img1");
var imag2=document.querySelector(".img2");

var loc  = "images/dice"+rand1+".png";
imag1.setAttribute("src",loc);

var loc  = "images/dice"+rand2+".png";
imag2.setAttribute("src",loc);

if (rand1 > rand2) {
  document.querySelector("h1").innerHTML = "💖 Player 1 WINS !!";
}
else {
  document.querySelector("h1").innerHTML = "💖 Player 2 WINS !!";
}

// if(rand1 == 1){
//   img1.setAttribute("src","images/dice1.png");
// }
// else if (rand1 == 2) {
//   img1.setAttribute("src","images/dice2.png");
// }
// else if (rand1 == 3) {
//   img1.setAttribute("src","images/dice3.png");
// }
// else if (rand1 == 4) {
//   img1.setAttribute("src","images/dice4.png");
// }
// else if (rand1 == 5) {
//   img1.setAttribute("src","images/dice5.png");
// }
// else if (rand1 == 6) {
//   img1.setAttribute("src","images/dice6.png");
// }
//
// if(rand2 == 1){
//   img2.setAttribute("src","images/dice1.png");
// }
// else if (rand2 == 2) {
//   img2.setAttribute("src","images/dice2.png");
// }
// else if (rand2 == 3) {
//   img2.setAttribute("src","images/dice3.png");
// }
// else if (rand2 == 4) {
//   img2.setAttribute("src","images/dice4.png");
// }
// else if (rand2 == 5) {
//   img2.setAttribute("src","images/dice5.png");
// }
// else if (rand2 == 6) {
//   img2.setAttribute("src","images/dice6.png");
// }
