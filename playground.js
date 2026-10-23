for (let y = 0; y < 100; y++) {
  for (let x = 0; x < 100; x++) {
    let dx = x - 50;
    let dy = y - 50;   
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 39.3 && distance < 40.7) {
      drawPixel(x, y, "blue");
    }
  }
}


for (let i = 0; i < 6; i++) {
  drawHorizontalLine(32, 35 + i, "green"); 
  drawHorizontalLine(63, 35 + i, "green");
}


drawVerticalLine(50, 48, "red");


for (let x = 40; x <= 60; x++) {
  drawPixel(x, 72, "red");
}


for (let i = 1; i <= 6; i++) {
  drawPixel(40 - i, 72 - i, "red"); 
  drawPixel(60 + i, 72 - i, "red");
}


checkPixel(50, 10, "blue", "top of head");
checkPixel(34, 37, "green", "left eye");
checkPixel(65, 37, "green", "right eye");
checkPixel(50, 50, "red", "nose");
checkPixel(50, 72, "red", "mouth middle");
checkPixel(50, 25, "black", "forehead empty");

let myname = `Hooman`;
let age = `24`;
let favoriteFood = `Cheeseburger`;

let sen1= "I am" + myname + "and I am" + age + "years old.";
let sen2= "I am ${myname} and I am ${age} years old and I like to eat ${favoriteFood}.";

console.log(sen1);
console.log(sen2);