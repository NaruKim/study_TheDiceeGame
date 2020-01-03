//First Die
var n = Math.random();
var m = Math.floor(n * 6);
//var randomNumber=Math.floor*(Math.random());

//Second Die
var x = Math.random();
var y = Math.floor(x * 6);

if(m>y){
  document.querySelector("h2").textContent="Player 1 Won";
}
else if(y>m){
  document.querySelector("h2").textContent="Player 2 Won";
}
else if(m==y){
  document.querySelector("h2").textContent="Draw";
}

//First Die

if (m == 0) {
  document.querySelector(".img1").setAttribute("src", "dice1.png");
}

if (m == 1) {
  document.querySelector(".img1").setAttribute("src", "dice2.png");
}

if (m == 2) {
  document.querySelector(".img1").setAttribute("src", "dice3.png");
}

if (m == 3) {
  document.querySelector(".img1").setAttribute("src", "dice4.png");
}

if (m == 4) {
  document.querySelector(".img1").setAttribute("src", "dice5.png");
}

if (m == 5) {
  document.querySelector(".img1").setAttribute("src", "dice6.png");
}

//Second Die


if (y == 0) {
  document.querySelector(".img2").setAttribute("src", "dice1.png");
}

if (y == 1) {
  document.querySelector(".img2").setAttribute("src", "dice2.png");
}

if (y == 2) {
  document.querySelector(".img2").setAttribute("src", "dice3.png");
}

if (y == 3) {
  document.querySelector(".img2").setAttribute("src", "dice4.png");
}

if (y == 4) {
  document.querySelector(".img2").setAttribute("src", "dice5.png");
}

if (y == 5) {
  document.querySelector(".img2").setAttribute("src", "dice6.png");
}
