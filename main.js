// canvas reference
const canvas = document.getElementById("myCanvas")
canvas.height = window.innerHeight
canvas.width = 300; //pixels

const ctx = canvas.getContext("2d");
const myCar = new Car(100, 100, 30, 50);
myCar.draw(ctx);